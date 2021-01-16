import React, { useState } from "react";
import "./SideDrawer.css";
import logo from "../../Assets/Logo.png";
import { Link, NavLink } from "react-router-dom";

function SideDrawer(props) {
  const [subMenuState, setSubMenuState] = useState(false);
  let classes = "SideDrawer Close";
  if (props.open) {
    classes = "SideDrawer Open";
  }
  const subMenuHandler = () => {
    setSubMenuState((prevState) => setSubMenuState(!prevState));
    console.log(subMenuState);
  };
  return (
    <div className={classes}>
      <div>
        <img
          style={{ height: "100px", width: "100px", marginBottom: "30px" }}
          src={logo}
          alt="Website Logo"
        />
      </div>
      <ul className="SideMenu">
        <li>
          <Link to="/" onClick={props.clicked}>
            Home
          </Link>
        </li>
        <li>
          <span to="/ThemesToExplore" onClick={subMenuHandler}>
            Themes to explore&nbsp;&nbsp;&nbsp;
            <i className="fa fa-caret-down"></i>
          </span>
        </li>
        <div className={subMenuState ? "SubMenu displaySubMenu" : "SubMenu"}>
          <NavLink to="/ThemesToExplore/Beach" onClick={props.clicked}>
            Beach
          </NavLink>
          <NavLink to="/ThemesToExplore/WildLife" onClick={props.clicked}>
            WildLife
          </NavLink>
          <NavLink to="/ThemesToExplore/WildLife" onClick={props.clicked}>
            Historical
          </NavLink>
        </div>
        <li>
          <Link to="/WeekendGateways" onClick={props.clicked}>
            Weekend Gateways
          </Link>
        </li>
        <li>
          <Link to="/ContactUs" onClick={props.clicked}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/Login" onClick={props.clicked}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;
