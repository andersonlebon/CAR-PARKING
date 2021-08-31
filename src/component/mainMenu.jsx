import React from "react";
import MenuList from "./common/menu-list";
import { GiShop } from "react-icons/gi";
import { MdUsb } from "react-icons/md";

const MainMenu = (props) => {
  const { ShowMenu } = props;

  return (
    <div
      className={
        ShowMenu === 0
          ? "none"
          : ShowMenu === 1
          ? "main-menu scroll-bar show border"
          : ShowMenu === 2
          ? "main-menu scroll-bar show"
          : "main-menu scroll-bar show"
      }
    >
      <MenuList icon={<GiShop />} content="Dashboards" />
      <MenuList icon={<GiShop />} content="Dashboards" />
      <MenuList icon={<MdUsb />} content="Menu" />
      <MenuList icon={<GiShop />} content="Dashboards" />
      <MenuList icon={<MdUsb />} content="Menu" />
    </div>
  );
};

export default MainMenu;
