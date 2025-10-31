import React, { useEffect } from "react";

import { Overlay } from "../Overlay";
import {
  ModalContainer,
  type ModalContainerSize,
} from "./ModalContainer/ModalContainer.tsx";

import cl from "./styles.module.scss";

interface Modalprops {
  size: ModalContainerSize;
  children: React.ReactNode;
  onClose: () => void;
}
export const Modal = ({ size, children, onClose }: Modalprops) => {
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
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      >
        <ModalContainer size={size}>{children}</ModalContainer>
      </div>
    </Overlay>
  );
};
