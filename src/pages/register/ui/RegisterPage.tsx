import { RegisterForm } from "@features/auth";
import { ModalContainer, Overlay, PageTitle } from "@shared/ui";

export const RegisterPage = () => (
  <Overlay>
    <ModalContainer size="large">
      <PageTitle variant="auth">Registration</PageTitle>
      <RegisterForm />
    </ModalContainer>
  </Overlay>
);
