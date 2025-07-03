import React from "react";

import { Button, Input } from "@shared/UI";
import { useForm } from "react-hook-form";

import type { IRegisterFormData } from "../../model/authApi";
import type { AuthFormProps } from "./LoginForm";

import cl from "../styles/FormStyles.module.scss";

const RegisterForm: React.FC<AuthFormProps> = ({
  onToggleMode,
  isSubmitting,
  onFormSubmit,
  errorMessage,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
    },
  });

  const submit = (data: IRegisterFormData) => {
    onFormSubmit(data);
  };
  const password = watch("password");
  return (
    <form className={cl.form} onSubmit={handleSubmit(submit)} noValidate>
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
          validate: (value) => value === password || "Passwords do not match",
        })}
      />
      <div className={cl.buttons}>
        <Button
          shape="pill"
          variant="white"
          onClick={onToggleMode}
          disabled={isSubmitting}
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
      </div>
    </form>
  );
};

export default RegisterForm;
