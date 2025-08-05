import { apiClient } from "@shared/api";
import type { AxiosResponse } from "axios";

import type { AuthSuccessResponse, LoginFormData } from "../model/types";

export const login = async (
  payload: LoginFormData,
): Promise<AxiosResponse<AuthSuccessResponse>> =>
  apiClient.post("/auth/login", payload);
