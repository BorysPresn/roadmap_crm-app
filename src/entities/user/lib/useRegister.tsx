import { useState } from "react";

import { Toast } from "@shared/ui";
import { AxiosError } from "axios";
import { type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useRegisterMutation } from "../api/register";
import type { AuthErrorResponse, RegisterFormData } from "../model/types";

export const useRegister = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();
  const registerMutation = useRegisterMutation();
  const isSubmitting = registerMutation.isPending;

  const registration: SubmitHandler<RegisterFormData> = async (
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
  return {
    registration,
    isSubmitting,
    errorMessage,
  };
};
