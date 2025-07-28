import { type RegisterFormData, useRegister } from "@entities/user";
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

import { registerInputFieldsConfig } from "../model/index.ts";

export const RegisterPage = () => {
  const { registration, isSubmitting, errorMessage } = useRegister();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const navigate = useNavigate();
  // const password = watch("password");

  const submit: SubmitHandler<RegisterFormData> = async (
    data: RegisterFormData,
  ) => {
    registration(data);
  };

  return (
    <Overlay>
      <ContentContainer size="large">
        <ContentHeader headingLevel="h1" text="Register" />
        <FormContainer onSubmit={handleSubmit(submit)} noValidate>
          {registerInputFieldsConfig.map((field) => (
            <Input
              key={field.name}
              inputId={field.name}
              type={field.type}
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
              onClick={() => navigate("/login")}
              disabled={isSubmitting}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
            >
              Back
            </Button>
            <Button
              shape="pill"
              variant="blue"
              type="submit"
              disabled={isSubmitting}
            >
              Sign up
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ContentContainer>
    </Overlay>
  );
};
