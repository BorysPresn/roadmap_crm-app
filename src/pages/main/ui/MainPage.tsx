import React, { useEffect, useState } from "react";

import { Modal } from "@shared/ui/index";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "./Header/Header.tsx";
import SideBar from "./SideBar/SideBar.tsx";

const MainPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
    }
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Header openModal={() => handleOpenModal()} />
      <main>
        <SideBar />
        <Outlet />
      </main>
      {isModalOpen && (
        <Modal size="small" title="Add New" onClose={() => handleCloseModal()}>
          hello World
        </Modal>
      )}
    </>
  );
};

export default MainPage;
