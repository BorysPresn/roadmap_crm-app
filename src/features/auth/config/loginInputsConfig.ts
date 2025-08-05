import type { LoginFormData } from "@entities/user";
import type { InputProps } from "@shared/ui";
import type { RegisterOptions } from "react-hook-form";

interface InputFieldsConfig extends InputProps {
  name: keyof LoginFormData;
  validation?: RegisterOptions<LoginFormData, keyof LoginFormData>;
}

export const loginInputFieldsConfig: InputFieldsConfig[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Wrong email format",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validation: { required: "Password is required" },
  },
];
