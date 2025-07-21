import { useState } from "react";

import {
  type AuthErrorResponse,
  type RegisterFormData,
  useRegisterMutation,
} from "@entities/user";
import {
  Button,
  ButtonContainer,
  ContentContainer,
  ContentHeader,
  FormContainer,
  Input,
  Overlay,
  Toast,
} from "@shared/ui";
import { AxiosError } from "axios";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const navigate = useNavigate();
  const registerMutation = useRegisterMutation();
  const isSubmitting = registerMutation.isPending;
  const password = watch("password");

  const submit: SubmitHandler<RegisterFormData> = async (
    data: RegisterFormData,
  ) => {
    try {
      await registerMutation.mutateAsync(data);
      toast(<Toast icon="firework" message="User created, please Sign in" />);
      navigate("/login");
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
        <ContentHeader headingLevel="h1" text="Register" />
        <FormContainer onSubmit={handleSubmit(submit)} noValidate>
          <Input
            type="text"
            inputId="first"
            label="First name"
            error={errors.first_name?.message || ""}
            {...register("first_name", {
              required: "First name is required",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Only letters are allowed",
              },
            })}
          />
          <Input
            type="text"
            inputId="last"
            label="Last name"
            error={errors.last_name?.message || ""}
            {...register("last_name", {
              required: "Last name is required",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Only letters are allowed",
              },
            })}
          />
          <Input
            inputId="register-email"
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
            inputId="register-pass"
            label="Password"
            type="password"
            error={errors.password?.message || ""}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <Input
            inputId="repeatPass"
            label="Repeat password"
            type="password"
            error={errors.repeatPassword?.message || ""}
            {...register("repeatPassword", {
              required: "Repeat password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          <ButtonContainer>
            <Button
              type="button"
              shape="pill"
              variant="white"
              onClick={() => navigate("/login")}
              disabled={isSubmitting}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
            >
              Back
            </Button>
            <Button
              shape="pill"
              variant="blue"
              type="submit"
              disabled={isSubmitting}
            >
              Sign up
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ContentContainer>
    </Overlay>
  );
};
