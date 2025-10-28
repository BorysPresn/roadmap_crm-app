import { Modal } from "@shared/ui";

import { ModalHeader } from "./ModalHeader/ModalHeader.tsx";
import { modalConfig } from "./modalConfig.tsx";
import type { ModalKey } from "./types";

interface ModalControllerProps {
  modalKey: ModalKey;
  onCloseModal: () => void;
  setActiveModal: (key: ModalKey | null) => void;
}
export const ModalController = ({
  modalKey,
  onCloseModal,
  setActiveModal,
}: ModalControllerProps) => {
  const cfg = modalConfig[modalKey];
  if (!cfg) return null;

  return (
    <Modal onClose={onCloseModal} size={cfg.size}>
      <ModalHeader
        modalSize={cfg.size}
        onClose={onCloseModal}
        headerAction={cfg.headerAction}
        setActiveModal={setActiveModal}
        title={cfg.title}
      />
      {cfg.renderBody({
        closeModal: onCloseModal,
        setActiveModal,
      })}
    </Modal>
  );
};
