import React from "react";

import { Overlay } from "../../Overlay";

import cl from "./styles.module.scss";

interface ModalOverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}
export const ModalOverlay = ({ children, onClose }: ModalOverlayProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <Overlay>
      <div
        id="modal-overlay"
        className={cl.modalOverlay}
        onClick={handleClick}
        aria-hidden="true"
      >
        {children}
      </div>
    </Overlay>
  );
};
