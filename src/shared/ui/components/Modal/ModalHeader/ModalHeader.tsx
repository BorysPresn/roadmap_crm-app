import { Button } from "@shared/ui";

import cl from "./styles.module.scss";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}
const ModalHeader = ({ title, onClose }: ModalHeaderProps) => (
  <div>
    <p className={cl.title}>{title}</p>
    <Button icon="modalClose" shape="round" variant="white" onClick={onClose} />
  </div>
);

export default ModalHeader;
