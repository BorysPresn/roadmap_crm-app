import React from "react";

import cl from "./styles.module.scss";

type HeaderVariant = "default" | "auth" | "modal";

interface PageHeaderProps {
  variant: HeaderVariant;
  children: React.ReactNode;
}

const variantConfig = {
  default: { heading: "h3", class: cl.default },
  auth: { heading: "h1", class: cl.auth },
  modal: { heading: "h5", class: cl.modal },
};
export const PageTitle = ({ variant, children }: PageHeaderProps) => {
  const config = variantConfig[variant];
  const HeadingElem = config.heading as keyof React.JSX.IntrinsicElements;
  return (
    <div className={config.class}>
      <HeadingElem>{children}</HeadingElem>
    </div>
  );
};
