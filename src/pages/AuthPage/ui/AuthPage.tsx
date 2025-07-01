import React, { useState } from "react";

import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import {
  type IAuthErrorResponse,
  type ILoginFormData,
  type IRegisterFormData,
  useLogin,
  useRegister,
} from "../model/authApi.ts";
import RegisterForm from "./RegisterForm.tsx";
import LoginForm from "./forms/LoginForm.tsx";

import cl from "./styles/AuthPage.module.scss";

const AuthPage: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  const loginMutation = useLogin();
  const registerMutation = useRegister();
  const isSubmitting = loginMutation.isPending || registerMutation.isPending;

  const toggleMode = () => {
    setIsLoginMode((prev) => !prev);
    setErrorMessage(null);
  };

  const onFormSubmit = async (data: ILoginFormData | IRegisterFormData) => {
    setErrorMessage(null);
    try {
      if (isLoginMode) {
        await loginMutation.mutateAsync(data);
        navigate("/dashboard");
      } else {
        await registerMutation.mutateAsync(data as IRegisterFormData);
        setIsLoginMode(true);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          const errorData = error.response.data as IAuthErrorResponse;
          setErrorMessage(errorData.message);
        }
      }
    }
  };
  return (
    <div className={cl.bg}>
      <div
        className={cl.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
