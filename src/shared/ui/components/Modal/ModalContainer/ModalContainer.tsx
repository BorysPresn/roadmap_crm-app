import type { WithChildren } from "@shared/lib";
import clsx from "clsx";

import cl from "./styles.module.scss";

export type ModalContainerSize = "small" | "medium" | "large";

interface ModalContainerProps extends WithChildren {
  size?: ModalContainerSize;
}

export const ModalContainer = ({
  children,
  size = "large",
}: ModalContainerProps) => (
  <div className={clsx(cl.container, cl[size])}>{children}</div>
);
