import { apiClient } from "@shared/api";
import { omit } from "@shared/lib";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export interface ILoginFormData {
  email: string;
  password: string;
}
export interface IRegisterFormData extends ILoginFormData {
  first_name: string;
  last_name: string;
  repeatPassword: string;
}

export interface IAuthSuccessResponse {
  message: string;
  access_token: string;
  refresh_token: string;
}

export interface IAuthErrorResponse {
  message: string;
}

export const useLogin = () =>
  useMutation<
    IAuthSuccessResponse,
    AxiosError<IAuthErrorResponse>,
    ILoginFormData
  >({
    mutationFn: async (payload: ILoginFormData) => {
      const response = await apiClient.post<IAuthSuccessResponse>(
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

export const useRegister = () =>
  useMutation<
    IAuthSuccessResponse,
    AxiosError<IAuthErrorResponse>,
    IRegisterFormData
  >({
    mutationFn: async (payload: IRegisterFormData) => {
      const dataToSend = omit(payload, ["repeatPassword"]);
      const response = await apiClient.post("/auth/register", dataToSend);
      return response.data;
    },
  });
