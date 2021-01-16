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
import ThemesToExplore from "./Components/ThemesToExplore/ThemesToExplore";
import ContactUs from "./Components/ContactUs/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
import Beach from "./Components/Beach/Beach";
import Historical from "./Components/Historical/Historical";
import WildLife from "./Components/WildLife/WildLife";
import ViewDetails from "./Components/ViewDetails/ViewDetails";
import Booking from "./Components/Forms/Booking/Booking";
import BookingSuccess from "./Components/Booking Success/BookingSuccess";
import Control from "./Components/LoginAndSignUp/Control";
import Footer from "./Components/Footer/FooterComp";
import WeekendGateways from "./Components/WeekendGateway/WeekendGateways";
import Payment from './Components/Payment/Payment'
class App extends Component {
  render() {
    const routing = (
      <Router>
        <header>
          <Navbar></Navbar>
        </header>
        <main style={{ marginTop: "70px", marginBottom: "20px" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ThemesToExplore" exact component={ThemesToExplore} />
            <Route path="/ThemesToExplore/Beach" exact component={Beach} />
            <Route
              path="/ThemesToExplore/Historical"
              exact
              component={Historical}
            />
            <Route
              path="/ThemesToExplore/WildLife"
              exact
              component={WildLife}
            />
            <Route path="/WeekendGateways" component={WeekendGateways} />
            <Route path="/Login" component={Control} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/View/:id" exact component={ViewDetails} />
            <Route
              path="/BookNow/:chargeAdult/:chargeChildren/:location/:date"
              exact
              component={Booking}
            />
            <Route
              path="/SuccessMessage"
              exact
              component={BookingSuccess}
            />
            <Route
              path="/Payment"
              exact
              component={Payment}
            />
            <Redirect to="/"></Redirect>
          </Switch>
        </main>
        <Footer />
      </Router>
    );
    return <div>{routing}</div>;
  }
}
export default App;
