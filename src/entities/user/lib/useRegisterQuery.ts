import { useMutation } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";

import { register } from "../api/register";
import type {
  AuthErrorResponse,
  AuthSuccessResponse,
  RegisterFormData,
} from "../model/types";

export const useRegisterQuery = () =>
  useMutation<
    AuthSuccessResponse,
    AxiosResponse<AuthErrorResponse>,
    RegisterFormData
  >({
    mutationFn: async (payload: RegisterFormData) => {
      const response = await register(payload);
      return response.data;
    },
  });
