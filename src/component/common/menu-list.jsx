import React from "react";
import { Link } from "react-router-dom";

const MenuList = (props) => {
  return (
    <Link to="#" className="menu-list">
      <span> {props.icon}</span>
      <p>{props.content}</p>
    </Link>
  );
};

export default MenuList;
