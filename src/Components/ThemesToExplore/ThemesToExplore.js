import React from "react";
import Beach from "../Beach/Beach";
import Historical from "../Historical/Historical";
import WildLife from "../WildLife/WildLife";
import "./ThemesToExplore.css";

function ThemesToExplore() {
  return (
    <div>
      <p className="heading" style={{ marginTop: "7%" }}>
        Beach
      </p>
      <Beach></Beach>
      <h1 className="heading">Historical</h1>
      <Historical></Historical>
      <h1 className="heading">WildLife</h1>
      <WildLife></WildLife>
    </div>
  );
}

export default ThemesToExplore;
