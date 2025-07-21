import React from "react";

import clsx from "clsx";

import cl from "./styles.module.scss";

export type ContentContainerSize = "small" | "medium" | "large";

interface ContentContainerProps {
  children: React.ReactNode;
  size?: ContentContainerSize;
}

export const ContentContainer = ({
  children,
  size = "large",
}: ContentContainerProps) => (
  <div className={clsx(cl.modal, cl[size])}>{children}</div>
);
