import { useState } from "react";

import { type RegisterFormData, useRegisterQuery } from "@entities/user";
import { registerInputFieldsConfig } from "@features/auth/config/register-inputs-config";
import {
  Button,
  ButtonContainer,
  FormContainer,
  Input,
  Toast,
} from "@shared/ui";
import { AxiosError } from "axios";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { mutateAsync, isPending } = useRegisterQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const submit: SubmitHandler<RegisterFormData> = async (
    data: RegisterFormData,
  ) => {
    try {
      await mutateAsync(data);
      toast(<Toast icon="firework" message="User created, please Sign in" />);
      navigate("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMessage(error?.response?.data.message);
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(submit)} noValidate>
      {registerInputFieldsConfig.map((field) => (
        <Input
          key={field.name}
          inputId={field.name}
          type={field.type}
          label={field.label}
          error={
            field.name === "email"
              ? errors[field.name]?.message || errorMessage || ""
              : errors[field.name]?.message || ""
          }
          {...register(field.name, field.validation)}
        />
      ))}
      <ButtonContainer>
        <Button
          type="button"
          shape="pill"
          variant="white"
          onClick={() => navigate("/login")}
          disabled={isPending}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          Back
        </Button>
        <Button shape="pill" variant="blue" type="submit" disabled={isPending}>
          Sign up
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};
