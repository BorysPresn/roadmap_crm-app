import React from "react";

import { Button, Icon } from "@shared/UI";
import { Link, useLocation } from "react-router-dom";

import cl from "./Header.module.scss";

const Header: React.FC = () => {
  const location = useLocation().pathname.slice(1);

  return (
    <header className={cl.header}>
      <div className={cl.logoContainer}>
        <Link to={"/dashboard"}>
          <div className={cl.logo}>
            <Icon name="logo" />
          </div>
        </Link>
      </div>
      <div className={cl.title}>
        <h3>{location}</h3>
      </div>
      <div className={cl.options}>
        <Button icon="add" shape="pill" variant="blue" iconPosition="right">
          Add new
        </Button>
        <Button shape="round" variant="white" icon="search" border="grey" />
        {/* TODO: make avatar */}
        <div className={cl.avatar}></div>
      </div>
    </header>
  );
};

export default Header;
