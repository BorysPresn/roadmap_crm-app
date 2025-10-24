import React from "react";

import { Icon, type ToastIcons } from "../Icon";

import cl from "./Toast.module.scss";

interface IToastProps {
  message: string;
  icon: ToastIcons;
  closeToast?: () => void;
}
const Toast: React.FC<IToastProps> = ({ icon, message, closeToast }) => (
  <>
    <Icon name={icon} />
    <p>{message}</p>
    {closeToast && (
      <button
        className={cl.closeBtn}
        onClick={closeToast}
        aria-label="close-toast"
      >
        <Icon name="toastClose" />
      </button>
    )}
  </>
);

export default Toast;
