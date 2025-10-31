import React, { type ButtonHTMLAttributes } from "react";

import clsx from "clsx";

import { Icon } from "../Icon";
import { type IconName } from "../Icon/Icon.tsx";

import cl from "./Button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: "pill" | "round" | "modal";
  variant?: "white" | "blue" | "pink";
  border?: "grey";
  children?: React.ReactNode;
  icon?: IconName;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}
export const Button: React.FC<IButtonProps> = ({
  shape,
  variant,
  border,
  children,
  icon,
  iconPosition = "left",
  ...rest
}) => {
  const classNames = clsx(
    cl.button,
    shape && cl[`button--${shape}`],
    variant && cl[`button--${variant}`],
    border && cl[`border--${border}`],
    iconPosition && cl[`button--icon-${iconPosition}`],
  );

  return (
    <button className={classNames} {...rest}>
      {icon && iconPosition === "left" && <Icon name={icon} />}
      {children}
      {icon && iconPosition === "right" && <Icon name={icon} />}
    </button>
  );
};
