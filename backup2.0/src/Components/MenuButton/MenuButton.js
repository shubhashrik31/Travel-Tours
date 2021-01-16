import React from "react";
import "./MenuButton.css";

function MenuButton(props) {
  return (
    <div className="MenuButton" onClick={props.click}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default MenuButton;
