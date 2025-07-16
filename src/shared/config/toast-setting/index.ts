import { type ToastContainerProps, Zoom } from "react-toastify";

import cl from "./toast.module.scss";

export const toastSetting: ToastContainerProps = {
  transition: Zoom,
  closeButton: false,
  theme: "dark",
  hideProgressBar: true,
  toastClassName: cl.toast,
};
