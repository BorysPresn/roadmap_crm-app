import React from "react";

import { Icon, type NavIconName } from "@shared/UI";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

import cl from "./SideBar.module.scss";

interface SideBarLinkProps {
  iconName: NavIconName;
}
const SideBarLink: React.FC<SideBarLinkProps> = ({ iconName }) => (
  <NavLink
    to={`/${iconName}`}
    className={({ isActive }) => clsx(cl.navLink, isActive && cl.active)}
  >
    {({ isActive }) => <Icon name={isActive ? `${iconName}Bold` : iconName} />}
  </NavLink>
);

export default SideBarLink;
