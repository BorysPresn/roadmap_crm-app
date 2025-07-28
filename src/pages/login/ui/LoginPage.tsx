import { type LoginFormData } from "@entities/user";
import { useLogin } from "@entities/user/index.ts";
import {
  Button,
  ButtonContainer,
  ContentContainer,
  ContentHeader,
  FormContainer,
  Input,
  Overlay,
} from "@shared/ui";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { loginInputFieldsConfig } from "../model/index.ts";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const { login, errorMessage, isSubmitting } = useLogin();
  const navigate = useNavigate();

  const submit: SubmitHandler<LoginFormData> = async (data: LoginFormData) => {
    login(data);
  };

  return (
    <Overlay>
      <ContentContainer size="large">
        <ContentHeader headingLevel="h1" text="Login" />
        <FormContainer onSubmit={handleSubmit(submit)} noValidate>
          {loginInputFieldsConfig.map((field) => (
            <Input
              key={field.name}
              type={field.type}
              inputId={field.name}
              label={field.label}
              error={errors[field.name]?.message || errorMessage || ""}
              {...register(field.name, field.validation)}
            />
          ))}
          <ButtonContainer>
            <Button
              type="button"
              shape="pill"
              variant="white"
              onClick={() => navigate("/register")}
              disabled={isSubmitting}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
            >
              Sign up
            </Button>
            <Button
              shape="pill"
              variant="blue"
              type="submit"
              disabled={isSubmitting}
            >
              Sign in
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ContentContainer>
    </Overlay>
  );
};
