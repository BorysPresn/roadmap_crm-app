import React from "react";

import { Button, Input } from "@shared/ui";
import { type SubmitHandler, useForm } from "react-hook-form";

import type { ILoginFormData } from "../../model/authApi";

import cl from "../styles/FormStyles.module.scss";

export interface AuthFormProps {
  onFormSubmit: (data: ILoginFormData) => void;
  onToggleMode: () => void;
  isSubmitting: boolean;
  errorMessage: string | null;
}

export const LoginForm: React.FC<AuthFormProps> = ({
  onFormSubmit,
  onToggleMode,
  isSubmitting,
  errorMessage,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>();

  const submit: SubmitHandler<ILoginFormData> = (data: ILoginFormData) => {
    onFormSubmit(data);
  };
  return (
    <form className={cl.form} onSubmit={handleSubmit(submit)} noValidate>
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
      <div className={cl.buttons}>
        <Button
          type="button"
          shape="pill"
          variant="white"
          onClick={onToggleMode}
          disabled={isSubmitting}
          onKeyDown={(e) => {
            // <--- ДОБАВЛЕНО
            if (e.key === "Enter") {
              e.preventDefault(); // Предотвращаем срабатывание onClick по Enter
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
      </div>
    </form>
  );
};

export default LoginForm;
