import React, { Component } from "react";
import "./weekend.css";

import w1 from "../../Assets/Weekendgateways/delhi2ladakh.jpg";
import w2 from "../../Assets/Weekendgateways/kolhapur2goa.jpg";

export class WeekendGateways extends Component {
  data = [
    {
      imageSrc: w1,
      type: "Biking",
      location: "Ladakh",
      adultPrice: 6000,
      childPrice: 3000,
      departureDate: "1-5-2021",
      noOfDays: 4,
    },

    {
      imageSrc: w2,
      type: "Cycling",
      location: "Goa",
      adultPrice: 3000,
      childPrice: 1500,
      departureDate: "11-5-2021",
      noOfDays: 3,
    },
  ];

  bookNowHandler1 = () => {
    this.props.history.push({
      pathname:
        "/BookNow/" +
        this.data[0].adultPrice +
        "/" +
        this.data[0].childPrice +
        "/" +
        this.data[0].location +
        "/" +
        this.data[0].departureDate,
    });
  };
  bookNowHandler2 = () => {
    this.props.history.push({
      pathname:
        "/BookNow/" +
        this.data[1].adultPrice +
        "/" +
        this.data[1].childPrice +
        "/" +
        this.data[1].location +
        "/" +
        this.data[1].departureDate,
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="weekend_title" style={{ textAlign: "center" }}>
          Delhi to Ladakh
        </h3>
        <br />
        <div className="row">
          <img src={w1} className="col-lg-6" />
          <p className="col-lg-6 weekend_text">
            Day 1 - Delhi to Manali in Bus Reach the designated point for
            boarding your AC Semi sleeper bus to Manali Overnight in bus
            <br />
            Day 2 - Exploring Manali Upon arrival in Manali, you will be met by
            our representative, who will take you to the hotel You will be
            introduced to your bikes in the afternoon For the purpose of a test
            ride and adventure.
            <br />
            Day 3 - Start riding Get a filling breakfast and start your ride
            towards Jispa You will be crossing Rohtang Pass, Gulaba, and Marhi
            Koksar
            <br />
            Day 4 - Jispa to Sarchu You will get a briefing with the breakfast
            Start your ride to reach Sarchu Overnight in camps
            <br />
            Day 5 - Ride from Sarchu to Leh Take your breakfast and leave for
            the most exciting part of the journey Watch the landscape change as
            you continue riding You will be crossing wonders like Nakee La,
            Lachung La, and Gata loops Overnight at Leh hotel or guesthouse
          </p>
        </div>
        <br />
        <center>
          <button
            type="submit"
            className="bookNowButton btnBook"
            onClick={this.bookNowHandler1}
          >
            Book Now
          </button>
        </center>
        <br />
        <hr />
        <h3 className="weekend_title" style={{ textAlign: "center" }}>
          Kolhapur To Goa
        </h3>
        <br />
        <div className="row">
          <p className="col-lg-6 weekend_text">
            Day 1 - Delhi to Manali in Bus Reach the designated point for
            boarding your AC Semi sleeper bus to Manali Overnight in bus
            <br />
            Day 2 - Exploring Manali Upon arrival in Manali, you will be met by
            our representative, who will take you to the hotel You will be
            introduced to your bikes in the afternoon For the purpose of a test
            ride and adventure.
            <br />
            Day 3 - Start riding Get a filling breakfast and start your ride
            towards Jispa You will be crossing Rohtang Pass, Gulaba, and Marhi
            Koksar
            <br />
            Day 4 - Jispa to Sarchu You will get a briefing with the breakfast
            Start your ride to reach Sarchu Overnight in camps
            <br />
            Day 5 - Ride from Sarchu to Leh Take your breakfast and leave for
            the most exciting part of the journey Watch the landscape change as
            you continue riding You will be crossing wonders like Nakee La,
            Lachung La, and Gata loops Overnight at Leh hotel or guesthouse
          </p>

          <img src={w2} height="400px" className="col-lg-6" />
        </div>
        <br />
        <center>
          <button
            type="submit"
            className="bookNowButton btnBook"
            onClick={this.bookNowHandler2}
          >
            Book Now
          </button>
        </center>
      </div>
    );
  }
}

export default WeekendGateways;
