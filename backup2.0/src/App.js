import React, { Component } from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";
import Home from "./Components/Home/Home";
import ThemesToExplore from "./Components/ThemesToExplore";
import WeekendGateways from "./Components/WeekendGateways";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
class App extends Component {
  render() {
    const routing = (
      <Router>
        <header>
          <Navbar></Navbar>
        </header>
        <div style={{ marginTop: "100px" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ThemesToExplore" exact component={ThemesToExplore} />
            <Route path="/WeekendGateways" component={WeekendGateways} />
            <Route path="/Login" component={Login} />
            <Route path="/ContactUs" component={ContactUs} />
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </Router>
    );
    return <div>{routing}</div>;
  }
}
export default App;
