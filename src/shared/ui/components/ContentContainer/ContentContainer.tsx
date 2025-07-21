import type { WithChildren } from "@shared/lib";
import clsx from "clsx";

import cl from "./styles.module.scss";

export type ContentContainerSize = "small" | "medium" | "large";

interface ContentContainerProps extends WithChildren {
  size?: ContentContainerSize;
}

export const ContentContainer = ({
  children,
  size = "large",
}: ContentContainerProps) => (
  <div className={clsx(cl.container, cl[size])}>{children}</div>
);
