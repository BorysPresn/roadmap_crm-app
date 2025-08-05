import React, { type FormHTMLAttributes } from "react";

import cl from "./styles.module.scss";

export const FormContainer: React.FC<FormHTMLAttributes<HTMLFormElement>> = ({
  children,
  ...rest
}) => (
  <form className={cl.form} {...rest}>
    {children}
  </form>
);
