import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "../Forms/Form.css";

import Registration from "./Registration";
import Signin from "./Signin";

export default function Control() {
  const style = {
    color: "#61DFFB",
    backgroundColor: "#20232A",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontWeight: "bolder",
  };
  return (
    <Router>
      <Redirect to="/SignIn" />
      <div className="container s1">
        <div className="row">
          <div className="col-50">
            {" "}
            <NavLink to="/SignUp" exact activeStyle={style}>
              Sign Up
            </NavLink>
          </div>
          <div className="col-50">
            <NavLink to="/SignIn" exact activeStyle={style}>
              Sign In
            </NavLink>
          </div>
        </div>
      </div>

      <div>
        <Route exact path="/SignUp" component={Registration} />
        <Route path="/SignIn" component={Signin} />
      </div>
    </Router>
  );
}
