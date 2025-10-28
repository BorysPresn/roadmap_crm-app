import React, { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import Header from "./Header/Header.tsx";
import { ModalController } from "./ModalController/ModalController.tsx";
import type { ModalKey } from "./ModalController/types";
import SideBar from "./SideBar/SideBar.tsx";

const MainPage: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);
  const handleOpenModal = (key: ModalKey) => {
    setActiveModal(key);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
    }
  });

  return (
    <>
      <Header openModal={() => handleOpenModal("addNew")} />
      <main>
        <SideBar />
        <Outlet />
      </main>
      {activeModal && (
        <ModalController
          modalKey={activeModal}
          onCloseModal={handleCloseModal}
          setActiveModal={setActiveModal}
        />
      )}
    </>
  );
};

export default MainPage;
