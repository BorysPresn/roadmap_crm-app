import React, { useState } from "react";

import {
  type AuthErrorResponse,
  type LoginFormData,
  type RegisterFormData,
  useLoginMutation,
  useRegisterMutation,
} from "@entities/user";
import { Toast } from "@shared/ui/index.ts";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { LoginForm } from "./forms/LoginForm.tsx";
import RegisterForm from "./forms/RegisterForm.tsx";

import cl from "./styles/AuthPage.module.scss";

const AuthPage: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  const loginMutation = useLoginMutation();
  const registerMutation = useRegisterMutation();
  const isSubmitting = loginMutation.isPending || registerMutation.isPending;

  const toggleMode = () => {
    setIsLoginMode((prev) => !prev);
    setErrorMessage(null);
  };

  const onFormSubmit = async (data: LoginFormData | RegisterFormData) => {
    setErrorMessage(null);
    try {
      if (isLoginMode) {
        await loginMutation.mutateAsync(data);
        navigate("/dashboard");
      } else {
        await registerMutation.mutateAsync(data as RegisterFormData);
        toast(<Toast icon="firework" message="User created, please Sign in" />);
        setIsLoginMode(true);
      }
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
    <div className={cl.bg}>
      <div className={cl.formContainer}>
        <h1 className={cl.title}>{isLoginMode ? "Login" : "Registration"}</h1>
        {isLoginMode ? (
          <LoginForm
            onToggleMode={toggleMode}
            isSubmitting={isSubmitting}
            onFormSubmit={onFormSubmit}
            errorMessage={errorMessage}
          />
        ) : (
          <RegisterForm
            errorMessage={errorMessage}
            onToggleMode={toggleMode}
            isSubmitting={isSubmitting}
            onFormSubmit={onFormSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
