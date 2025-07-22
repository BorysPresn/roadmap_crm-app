import { useState } from "react";

import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from "../api/login.ts";
import { type AuthErrorResponse, type LoginFormData } from "../model/types.ts";

export const useLogin = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();
  const loginMutation = useLoginMutation();
  const isSubmitting = loginMutation.isPending;

  const login = async (data: LoginFormData) => {
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

  return {
    login,
    isSubmitting,
    errorMessage,
  };
};
