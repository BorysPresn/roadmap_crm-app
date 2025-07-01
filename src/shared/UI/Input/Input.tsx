import React, { type InputHTMLAttributes, useId } from "react";

import clsx from "clsx";

import cl from "./Input.module.scss";

type AllowedInputType = "text" | "password" | "email";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: AllowedInputType;
  label?: string;
  inputId?: string;
  error?: string;
  ref?: React.Ref<HTMLInputElement>;
}
const Input: React.FC<IInputProps> = ({
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
      <p className={clsx(cl.error, error && cl.errorVisible)}>{error}</p>
    </div>
  );
};

export default Input;
