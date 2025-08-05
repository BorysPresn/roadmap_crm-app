import { LoginForm } from "@features/auth";
import { Overlay, PageContainer, PageTitle } from "@shared/ui";

export const LoginPage = () => (
  <Overlay>
    <PageContainer size="large">
      <PageTitle variant="auth">Login</PageTitle>
      <LoginForm />
    </PageContainer>
  </Overlay>
);
