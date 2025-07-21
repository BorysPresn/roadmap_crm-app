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
