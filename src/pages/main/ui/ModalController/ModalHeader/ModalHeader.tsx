import type { ModalKey } from "@pages/main/ui/ModalController/types";
import { Button, type ModalContainerSize } from "@shared/ui";
import clsx from "clsx";

import cl from "./styles.module.scss";

interface ModalHeaderProps {
  modalSize: ModalContainerSize;
  title: string;
  onClose: () => void;
  headerAction?: {
    label: string;
    onClick: (setActiveModal: (key: ModalKey | null) => void) => void;
  };
  setActiveModal: (key: ModalKey | null) => void;
}
const ModalHeader = ({
  modalSize,
  title,
  onClose,
  headerAction,
  setActiveModal,
}: ModalHeaderProps) => {
  const handleHeaderActionClick = () => {
    if (headerAction) {
      headerAction.onClick(setActiveModal);
    }
  };

  const headerClass = clsx(
    cl.header,
    modalSize === "small" && cl["header--small"],
  );

  return (
    <div className={headerClass}>
      <p className={cl.title}>{title}</p>
      {headerAction && (
        <button
          type="button"
          className={cl.headerAction}
          onClick={handleHeaderActionClick}
        >
          {headerAction?.label}
        </button>
      )}
      <Button
        icon="modalClose"
        shape="modal"
        variant="white"
        onClick={onClose}
      />
    </div>
  );
};

export default ModalHeader;
