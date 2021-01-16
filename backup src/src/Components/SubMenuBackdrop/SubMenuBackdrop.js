import React from "react";
import "./SubMenuBackdrop.css";
function SubMenuBackdrop(props) {
  return props.show ? (
    <div className="SubMenuBackdrop" onClick={props.clicked}></div>
  ) : null;
}

export default SubMenuBackdrop;
