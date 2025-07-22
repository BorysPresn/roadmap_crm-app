import { apiClient } from "@shared/api";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import type {
  AuthErrorResponse,
  AuthSuccessResponse,
  RegisterFormData,
} from "../model/types";

export const useRegisterMutation = () =>
  useMutation<
    AuthSuccessResponse,
    AxiosError<AuthErrorResponse>,
    RegisterFormData
  >({
    mutationFn: async (payload: RegisterFormData) => {
      const response = await apiClient.post("/auth/register", {
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
        password: payload.password,
      });
      return response.data;
    },
  });
