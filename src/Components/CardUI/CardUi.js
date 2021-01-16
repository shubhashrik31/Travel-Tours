import React from "react";
import { NavLink } from "react-router-dom";

import "./CardUi.css";
const Card = (props) => {
  return (
    <div>
      <div className="card text-center">
        <div className="overflow">
          <img
            src={props.imgsrc}
            alt="Goa image1"
            className="card-img-top"
          />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-seconadary">{props.info}</p>
          <NavLink to={"/View/" + props.index} className="btn btn-dark viewBtn">
            Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
