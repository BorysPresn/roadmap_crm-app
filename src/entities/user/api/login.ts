import { apiClient } from "@shared/api";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import type {
  AuthErrorResponse,
  AuthSuccessResponse,
  LoginFormData,
} from "../model/types";

export const useLoginMutation = () =>
  useMutation<
    AuthSuccessResponse,
    AxiosError<AuthErrorResponse>,
    LoginFormData
  >({
    mutationFn: async (payload: LoginFormData) => {
      const response = await apiClient.post<AuthSuccessResponse>(
        "/auth/login",
        payload,
      );
      return response.data;
    },

    onSuccess: (data) => {
      console.log(data);
      sessionStorage.setItem("refreshToken", data.refresh_token);
      sessionStorage.setItem("token", data.access_token);
    },
  });
