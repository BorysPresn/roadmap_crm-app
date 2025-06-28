import React from "react";

import clsx from "clsx";

import cl from "./Input.module.scss";

interface IInputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  inputId: string;
  error: string;
  ref?: React.Ref<HTMLInputElement>;
}
const Input: React.FC<IInputProps> = ({
  label,
  inputId,
  placeholder,
  type = "text",
  error,
  ref,
  ...rest
}) => (
  <div className={clsx(cl.inputContainer, error && cl.error)}>
    {label && (
      <label htmlFor={inputId} className={cl.label}>
        {label}
      </label>
    )}
    <input
      ref={ref}
      id={inputId}
      type={type}
      placeholder={placeholder}
      className={cl.input}
      {...rest}
    />
    <p className={clsx(cl.error, error && cl.errorVisible)}>{error}</p>
  </div>
);

export default Input;
