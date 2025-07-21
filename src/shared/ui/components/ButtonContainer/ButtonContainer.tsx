import type { WithChildren } from "@shared/lib";

import cl from "./styles.module.scss";

export const ButtonContainer = ({ children }: WithChildren) => (
  <div className={cl.buttons}>{children}</div>
);
