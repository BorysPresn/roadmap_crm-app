import { type LoginFormData } from "@entities/user";
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

import { useLogin } from "../lib/useLogin.ts";
import { inputFieldsConfig } from "../model/index.ts";

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
          {inputFieldsConfig.map((config) => (
            <Input
              key={config.inputId}
              type={config.type}
              inputId={config.inputId}
              label={config.label}
              error={errors[config.name]?.message || errorMessage || ""}
              {...register(config.name, config.validation)}
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
