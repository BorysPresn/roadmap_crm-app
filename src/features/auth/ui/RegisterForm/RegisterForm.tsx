import { type RegisterFormData, useRegister } from "@entities/user";
import { registerInputFieldsConfig } from "@features/auth/config/register-inputs-config";
import { Button, ButtonContainer, FormContainer, Input } from "@shared/ui";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const { registration, isSubmitting, errorMessage } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const submit: SubmitHandler<RegisterFormData> = async (
    data: RegisterFormData,
  ) => {
    registration(data);
  };
  return (
    <FormContainer onSubmit={handleSubmit(submit)} noValidate>
      {registerInputFieldsConfig.map((field) => (
        <Input
          key={field.name}
          inputId={field.name}
          type={field.type}
          label={field.label}
          error={
            field.name === "email"
              ? errors[field.name]?.message || errorMessage || ""
              : errors[field.name]?.message || ""
          }
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
  );
};
