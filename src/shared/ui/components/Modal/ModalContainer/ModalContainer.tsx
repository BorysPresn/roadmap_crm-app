import React from "react";

import clsx from "clsx";

import cl from "./styles.module.scss";

export type ModalContainerSize = "small" | "medium" | "large";

interface ModalContainerProps {
  size: string;
  children: React.ReactNode;
}

export const ModalContainer = ({ children, size }: ModalContainerProps) => (
  <div className={clsx(cl.container, cl[size])} role="dialog" aria-modal="true">
    {children}
  </div>
);
