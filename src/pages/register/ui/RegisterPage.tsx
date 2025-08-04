import { RegisterForm } from "@features/auth";
import { Overlay, PageContainer, PageTitle } from "@shared/ui";

export const RegisterPage = () => (
  <Overlay>
    <PageContainer size="large">
      <PageTitle variant="auth">Registration</PageTitle>
      <RegisterForm />
    </PageContainer>
  </Overlay>
);
