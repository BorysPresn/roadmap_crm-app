import React from "react";

import type { NavIconName } from "@shared/UI/index.ts";

import SideBarLink from "./SideBarLink.tsx";

import cl from "./SideBar.module.scss";

const SideBar: React.FC = () => {
  const pages: NavIconName[] = [
    "dashboard",
    "deals",
    "customers",
    "tasks",
    "calendar",
    "notifications",
    "settings",
  ];
  return (
    <aside className={cl.sidebar}>
      <nav>
        <ul className={cl.navList}>
          {pages.map((page) => (
            <li key={page}>
              <SideBarLink iconName={page} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
