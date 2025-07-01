import React from "react";

import { Outlet } from "react-router-dom";

import Header from "./Header/Header.tsx";
import SideBar from "./SideBar/SideBar.tsx";

const MainPage: React.FC = () => (
  <>
    <Header />
    <main>
      <SideBar />
      <Outlet />
    </main>
  </>
);

export default MainPage;
