import React from "react";
import "./SideDrawer.css";
import logo from "../../Assets/Logo.png";
import { Link } from "react-router-dom";

function SideDrawer(props) {
  let classes = "SideDrawer Close";
  if (props.open) {
    classes = "SideDrawer Open";
  }
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
          <Link to="/ThemesToExplore">Themes to explore</Link>
        </li>
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
