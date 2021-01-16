import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarItem.css";

function NavbarItem(props) {
  return (
    <div>
      <NavLink
        to={props.link}
        activeStyle={{
          backgroundColor: "#8F5C2C",
          borderBottom: "4px solid #40A4C8",
          color: "white",
        }}
        className="nav-item"
      >
        {props.children}
      </NavLink>
    </div>
  );
}

export default NavbarItem;
