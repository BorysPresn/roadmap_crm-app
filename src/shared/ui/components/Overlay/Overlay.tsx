import React from "react";

import cl from "./styles.module.scss";

interface OverlayProps {
  children: React.ReactNode;
}

export const Overlay = ({ children }: OverlayProps) => {
  return <div className={cl.overlay}>{children}</div>;
};
