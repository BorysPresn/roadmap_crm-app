export interface LoginFormData {
  email: string;
  password: string;
}
export interface RegisterFormData extends LoginFormData {
  firstName: string;
  lastName: string;
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
