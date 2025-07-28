import { RegisterForm } from "@features/auth";
import { ContentContainer, ContentHeader, Overlay } from "@shared/ui";

export const RegisterPage = () => (
  <Overlay>
    <ContentContainer size="large">
      <ContentHeader headingLevel="h1" text="Register" />
      <RegisterForm />
    </ContentContainer>
  </Overlay>
);
