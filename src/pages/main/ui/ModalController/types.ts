import type { JSX } from "react";

import type { ModalContainerSize } from "@shared/ui";

export type ModalKey =
  | "addNew"
  | "createDeal"
  | "createCustomer"
  | "selectCustomer";

export type ModalConfig = {
  title: string;
  size: ModalContainerSize;
  headerAction?: {
    label: string;
    onClick: (setActiveModal: (key: ModalKey | null) => void) => void;
  };
  renderBody: (ctx: {
    closeModal: () => void;
    setActiveModal: (key: ModalKey | null) => void;
  }) => JSX.Element;
};
