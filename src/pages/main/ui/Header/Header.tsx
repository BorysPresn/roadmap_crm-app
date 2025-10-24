import { Button, Icon, PageTitle } from "@shared/ui";
import { Link, useLocation } from "react-router-dom";

import cl from "./Header.module.scss";

interface HeaderProps {
  openModal: () => void;
}

const Header = ({ openModal }: HeaderProps) => {
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
      <PageTitle variant="default">{location}</PageTitle>
      <div className={cl.options}>
        <Button
          icon="add"
          shape="pill"
          variant="blue"
          iconPosition="right"
          onClick={() => openModal()}
        >
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
