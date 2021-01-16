import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import BackDrop from "../Backdrop/BackDrop";
import MenuButton from "../MenuButton/MenuButton.js";
import SideDrawer from "../SideDrawer/SideDrawer";
import SubMenuBackdrop from "../SubMenuBackdrop/SubMenuBackdrop";
import "./Navbar.css";

function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const [hoverFlag, setHoverFlag] = useState(false);
  const menuClickHandler = () => {
    setMenuState(true);
  };
  const sideDrawerHandler = () => {
    setMenuState(false);
    setHoverFlag(false);
  };
  const onHoverHandler = () => {
    setHoverFlag(true);
  };
  const closeDropDown = () => {
    setHoverFlag(false);
  };

  return (
    <div>
      <SideDrawer open={menuState} clicked={sideDrawerHandler}></SideDrawer>
      <BackDrop show={menuState} clicked={sideDrawerHandler}></BackDrop>
      <SubMenuBackdrop show={hoverFlag} clicked={closeDropDown} />
      <div id="headingAndMenu">
        <div id="menu">
          <MenuButton click={menuClickHandler}></MenuButton>

          <div>
            <img src={logo} alt="Website Logo" />
          </div>
          <nav className="nav DesktopOnly">
            <li className="NavigationItem">
              <NavLink
                exact
                to="/"
                activeStyle={{
                  borderBottom: "2px solid white",
                  backgroundColor: "rgb(3, 33, 63)",
                }}
              >
                Home
              </NavLink>
            </li>
            <div>
              <li className="NavigationItem">
                <NavLink
                  onMouseEnter={onHoverHandler}
                  to="/ThemesToExplore"
                  activeStyle={{
                    borderBottom: "2px solid white",
                    backgroundColor: "rgb(3, 33, 63)",
                  }}
                >
                  Themes to explore&nbsp;&nbsp;&nbsp;
                  <i className="fa fa-caret-down"></i>
                </NavLink>
              </li>
              <div
                onMouseEnter={onHoverHandler}
                className={hoverFlag ? "theme themeDisplay" : "theme"}
              >
                <NavLink to="/ThemesToExplore/Beach">Beach</NavLink>
                <NavLink to="/ThemesToExplore/WildLife">WildLife</NavLink>
                <NavLink to="/ThemesToExplore/Mountains">Mountains</NavLink>
                <NavLink to="/ThemesToExplore/Heritage">Heritage</NavLink>
                <NavLink to="/ThemesToExplore/Pilgrimage">Pilgrimage</NavLink>
              </div>
            </div>
            <li className="NavigationItem">
              <NavLink
                to="/WeekendGateways"
                activeStyle={{
                  borderBottom: "2px solid white",
                  backgroundColor: "rgb(3, 33, 63)",
                }}
              >
                Weekend Gateways
              </NavLink>
            </li>
            <li className="NavigationItem">
              <NavLink
                to="/ContactUs"
                activeStyle={{
                  borderBottom: "2px solid white",
                  backgroundColor: "rgb(3, 33, 63)",
                }}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="NavigationItem">
              <NavLink
                to="/Login"
                activeStyle={{
                  borderBottom: "2px solid white",
                  backgroundColor: "rgb(3, 33, 63)",
                }}
              >
                Login
              </NavLink>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
