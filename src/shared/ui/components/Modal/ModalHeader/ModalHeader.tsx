import { Button } from "../../Button";

import cl from "./styles.module.scss";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}
const ModalHeader = ({ title, onClose }: ModalHeaderProps) => (
  <div className={cl.header}>
    <p className={cl.title}>{title}</p>
    <Button icon="modalClose" shape="modal" variant="white" onClick={onClose} />
  </div>
);

export default ModalHeader;
