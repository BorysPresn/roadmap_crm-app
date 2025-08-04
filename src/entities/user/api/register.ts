import { apiClient } from "@shared/api";
import type { AxiosResponse } from "axios";

import type { AuthSuccessResponse, RegisterFormData } from "../model/types";

export const register = async (
  payload: RegisterFormData,
): Promise<AxiosResponse<AuthSuccessResponse>> => {
  const response = await apiClient.post("/auth/register", {
    first_name: payload.firstName,
    last_name: payload.lastName,
    email: payload.email,
    password: payload.password,
  });
  return response.data;
};
