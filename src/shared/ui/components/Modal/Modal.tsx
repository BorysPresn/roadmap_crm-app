import React, { useEffect } from "react";

import { Overlay } from "../Overlay";
import { ModalContainer, type ModalContainerSize } from "./ModalContainer";
import ModalHeader from "./ModalHeader/ModalHeader.tsx";

import cl from "./styles.module.scss";

interface Modalprops {
  title: string;
  size: ModalContainerSize;
  children: React.ReactNode;
  onClose: () => void;
}
export const Modal = ({ title, size, children, onClose }: Modalprops) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <Overlay>
      <div
        className={cl.backdrop}
        onClick={handleOverlayClick}
        aria-hidden="true"
      >
        <ModalContainer size={size}>
          <ModalHeader title={title} onClose={onClose} />
          {children}
        </ModalContainer>
      </div>
    </Overlay>
  );
};
