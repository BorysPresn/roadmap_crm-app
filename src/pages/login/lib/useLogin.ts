import { useState } from "react";

import {
  type AuthErrorResponse,
  type LoginFormData,
  useLoginMutation,
} from "@entities/user";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

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
