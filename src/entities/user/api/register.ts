import { apiClient } from "@shared/api";
import { omit } from "@shared/lib";
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
      const dataToSend = omit(payload, ["repeatPassword"]);
      const response = await apiClient.post("/auth/register", dataToSend);
      return response.data;
    },
  });
