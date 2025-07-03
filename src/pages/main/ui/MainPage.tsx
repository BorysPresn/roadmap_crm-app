import React, { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import Header from "./Header/Header.tsx";
import SideBar from "./SideBar/SideBar.tsx";

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/auth");
    }
  });

  return (
    <>
      <Header />
      <main>
        <SideBar />
        <Outlet />
      </main>
    </>
  );
};

export default MainPage;
