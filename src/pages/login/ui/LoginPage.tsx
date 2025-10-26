import { LoginForm } from "@features/auth";
import { ModalContainer, Overlay, PageTitle } from "@shared/ui";

export const LoginPage = () => (
  <Overlay>
    <ModalContainer size="large">
      <PageTitle variant="auth">Login</PageTitle>
      <LoginForm />
    </ModalContainer>
  </Overlay>
);
