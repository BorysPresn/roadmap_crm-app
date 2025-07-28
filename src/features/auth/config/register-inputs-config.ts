import type { RegisterFormData } from "@entities/user";
import type { InputProps } from "@shared/ui";
import type { RegisterOptions } from "react-hook-form";

interface InputFieldsConfig extends InputProps {
  name: keyof RegisterFormData;
  validation?: RegisterOptions<RegisterFormData, keyof RegisterFormData>;
}

export const registerInputFieldsConfig: InputFieldsConfig[] = [
  {
    name: "firstName",
    type: "text",
    label: "First name",
    validation: {
      required: "First name is required",
      pattern: {
        value: /^[a-zA-Z]+$/,
        message: "Only letters are allowed",
      },
    },
  },
  {
    name: "lastName",
    type: "text",
    label: "Last name",
    validation: {
      required: "Last name is required",
      pattern: {
        value: /^[a-zA-Z]+$/,
        message: "Only letters are allowed",
      },
    },
  },
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
    validation: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
    },
  },

  {
    name: "repeatPassword",
    type: "password",
    label: " Repeat password",
    validation: {
      required: "Repeat password is required",
      validate: (value, formValues) =>
        value === formValues.password || "Passwords do not match",
    },
  },
];
