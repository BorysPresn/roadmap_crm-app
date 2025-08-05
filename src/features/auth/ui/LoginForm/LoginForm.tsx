import { useState } from "react";

import { type LoginFormData, useLoginQuery } from "@entities/user";
import { Button, FormContainer, Input } from "@shared/ui";
import { AxiosError } from "axios";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { loginInputFieldsConfig } from "../../config/loginInputsConfig";

import cl from "./styles.module.scss";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const { mutateAsync, isPending } = useLoginQuery();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const submit: SubmitHandler<LoginFormData> = async (data: LoginFormData) => {
    try {
      await mutateAsync(data);
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMessage(error?.response?.data?.message);
      } else {
        setErrorMessage("Unknown error");
      }
    }
  };
  return (
    <FormContainer onSubmit={handleSubmit(submit)} noValidate>
      {loginInputFieldsConfig.map((field) => (
        <Input
          key={field.name}
          type={field.type}
          inputId={field.name}
          label={field.label}
          error={errors[field.name]?.message || errorMessage || ""}
          {...register(field.name, field.validation)}
        />
      ))}
      <div className={cl.buttons}>
        <Button
          type="button"
          shape="pill"
          variant="white"
          onClick={() => navigate("/register")}
          disabled={isPending}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          Sign up
        </Button>
        <Button shape="pill" variant="blue" type="submit" disabled={isPending}>
          Sign in
        </Button>
      </div>
    </FormContainer>
  );
};
