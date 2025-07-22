import React, { type InputHTMLAttributes, useId } from "react";

import clsx from "clsx";

import cl from "./Input.module.scss";

type AllowedInputType = "text" | "password" | "email";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: AllowedInputType;
  label?: string;
  inputId?: string;
  error?: string;
  ref?: React.Ref<HTMLInputElement>;
}
export const Input: React.FC<InputProps> = ({
  label,
  inputId,
  placeholder,
  type,
  error,
  ref,
  ...rest
}) => {
  const uniqueId = useId();
  const inpId = inputId || uniqueId;

  return (
    <div className={clsx(cl.inputContainer, error && cl.error)}>
      {label && (
        <label htmlFor={inpId} className={cl.label}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inpId}
        type={type}
        placeholder={placeholder}
        className={cl.input}
        {...rest}
      />
      <p className={clsx(cl.error, error && cl.showError)}>{error}</p>
    </div>
  );
};
