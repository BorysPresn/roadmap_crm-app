import { LoginForm } from "@features/auth";
import { ContentContainer, ContentHeader, Overlay } from "@shared/ui";

export const LoginPage = () => (
  <Overlay>
    <ContentContainer size="large">
      <ContentHeader headingLevel="h1" text="Login" />
      <LoginForm />
    </ContentContainer>
  </Overlay>
);
