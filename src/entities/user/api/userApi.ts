import { apiClient } from "@shared/api";
import { omit } from "@shared/lib";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export interface LoginFormData {
  email: string;
  password: string;
}
export interface RegisterFormData extends LoginFormData {
  first_name: string;
  last_name: string;
  repeatPassword: string;
}

export interface AuthSuccessResponse {
  message: string;
  access_token: string;
  refresh_token: string;
}

export interface AuthErrorResponse {
  message: string;
}

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
      sessionStorage.setItem("refreshToken", data.refresh_token);
      sessionStorage.setItem("token", data.access_token);
    },
  });

export const useRegisterMutation = () =>
  useMutation<
    AuthSuccessResponse,
    AxiosError<AuthErrorResponse>,
    RegisterFormData
  >({
    mutationFn: async (payload: RegisterFormData) => {
      const dataToSend = omit(payload, ["repeatPassword"]);
      const response = await apiClient.post("/auth/register", dataToSend);
      return response.data;
    },
  });
