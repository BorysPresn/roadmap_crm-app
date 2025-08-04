import type { WithChildren } from "@shared/lib";
import clsx from "clsx";

import cl from "./styles.module.scss";

export type PageContainerSize = "small" | "medium" | "large";

interface PageContainerProps extends WithChildren {
  size?: PageContainerSize;
}

export const PageContainer = ({
  children,
  size = "large",
}: PageContainerProps) => (
  <div className={clsx(cl.container, cl[size])}>{children}</div>
);
