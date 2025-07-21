import { useState } from "react";

import {
  type AuthErrorResponse,
  type LoginFormData,
  useLoginMutation,
} from "@entities/user";
import {
  Button,
  ButtonContainer,
  ContentContainer,
  ContentHeader,
  FormContainer,
  Input,
  Overlay,
} from "@shared/ui";
import { AxiosError } from "axios";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const navigate = useNavigate();
  const loginMutation = useLoginMutation();
  const isSubmitting = loginMutation.isPending;

  const submit: SubmitHandler<LoginFormData> = async (data: LoginFormData) => {
    try {
      await loginMutation.mutateAsync(data);
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          const errorData = error.response.data as AuthErrorResponse;
          setErrorMessage(errorData.message);
        }
      }
    }
  };

  return (
    <Overlay>
      <ContentContainer size="large">
        <ContentHeader headingLevel="h1" text="Login" />
        <FormContainer onSubmit={handleSubmit(submit)} noValidate>
          <Input
            inputId="login-email"
            label="Email"
            type="email"
            error={errors.email?.message || errorMessage || ""}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Wrong email format",
              },
            })}
          />

          <Input
            inputId="login-password"
            label="Password"
            type="password"
            error={errors.password?.message || errorMessage || ""}
            {...register("password", { required: "Password is required" })}
          />
          <ButtonContainer>
            <Button
              type="button"
              shape="pill"
              variant="white"
              onClick={() => navigate("/register")}
              disabled={isSubmitting}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
            >
              Register
            </Button>
            <Button
              shape="pill"
              variant="blue"
              type="submit"
              disabled={isSubmitting}
            >
              Sign in
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ContentContainer>
    </Overlay>
  );
};
