import React from "react";

import clsx from "clsx";

import { ButtonIcon } from "../icons/ButtonIcon.tsx";

import cl from "./RoundButton.module.scss";

interface IButtonProps {
  shape?: "pill" | "round";
  variant?: "white" | "blue" | "pink";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick: () => void;
}
export const Button: React.FC<IButtonProps> = ({
  shape,
  variant,
  children,
  icon,
  iconPosition,
  onClick,
}) => {
  const classNames = clsx(
    cl.button,
    shape ? cl[`button--${shape}`] : "",
    variant ? cl[`button--${variant}`] : "",
    iconPosition === "left"
      ? cl[`button--icon-left`]
      : cl[`button--icon-right`],
  );

  return (
    <button className={classNames} onClick={onClick}>
      {icon && iconPosition === "left" && <ButtonIcon name="add" />}
      {children}
      {icon && iconPosition === "right" && <ButtonIcon name="add" />}
    </button>
  );
};
