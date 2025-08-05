import { useMutation } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";

import { login } from "../api/login";
import {
  type AuthErrorResponse,
  type AuthSuccessResponse,
  type LoginFormData,
} from "../model/types";

export const useLoginQuery = () =>
  useMutation<
    AuthSuccessResponse,
    AxiosResponse<AuthErrorResponse>,
    LoginFormData
  >({
    mutationFn: async (payload: LoginFormData) => {
      const response = await login(payload);
      return response.data;
    },
    onSuccess: (data) => {
      sessionStorage.setItem("access_token", data.access_token);
      sessionStorage.setItem("refresh_token", data.refresh_token);
    },
  });
