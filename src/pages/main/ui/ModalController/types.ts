import type { JSX } from "react";

import type { ModalContainerSize } from "@shared/ui";

export type ModalKey =
  | "addNew"
  | "createDeal"
  | "createCustomer"
  | "selectCustomer";

export interface ModalHeaderAction {
  label: string;
  onClick: (setActiveModal: (key: ModalKey | null) => void) => void;
}

export interface ModalRenderBodyCtx {
  closeModal: () => void;
  setActiveModal: (key: ModalKey | null) => void;
}

export type ModalConfig = {
  title: string;
  size: ModalContainerSize;
  headerAction?: ModalHeaderAction;
  renderBody: (ctx: ModalRenderBodyCtx) => JSX.Element;
};
