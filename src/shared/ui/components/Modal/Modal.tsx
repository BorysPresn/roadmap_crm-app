import { Link } from "react-router-dom";

import { Button } from "../Button";
import { Icon } from "../Icon";
import { PageContainer } from "../PageContainer";
import { PageTitle } from "../PageTitle";
import { ModalOverlay } from "./ModalOverlay/ModalOverlay.tsx";

import cl from "./styles.module.scss";

interface Modalprops {
  onClose: () => void;
}
export const Modal = ({ onClose }: Modalprops) => (
  <ModalOverlay onClose={onClose}>
    <PageContainer size="small">
      <div className={cl.modalrow}>
        <PageTitle variant="modal">Add New</PageTitle>
        <Button
          icon="modalClose"
          shape="modal"
          variant="white"
          onClick={onClose}
        />
      </div>
      <div className={cl.modalrow}>
        <Icon name="deals" />
        <p>Deal</p>
        <Link to={"/"}>
          {" "}
          <Icon name="arrowRightBlue" />
        </Link>
      </div>
      <div className={cl.modalrow}>
        <Icon name="customers" />
        <p>Customer</p>
        <Link to={"/"}>
          {" "}
          <Icon name="arrowRightBlue" />
        </Link>
      </div>
    </PageContainer>
  </ModalOverlay>
);
