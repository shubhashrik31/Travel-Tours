import React from "react";
import "../Forms/Form.css";
import {useEffect} from 'react';
import axios from 'axios';

export default function BookingSuccess(props) {
  useEffect(()=>{
    const data=props.location.state;
    console.log("Mail"+data.email)
    axios.post('/sendMail',{
      email:data.email,
      place:data.place,
      adults:data.adults,
      children:data.children,
      departureDate:data.departureDate,
      departureVenue:data.departureVenue
    }).
    then(response=>{
      console.log(response);
    })
  },[])
  const homeHandler = () => {
    props.history.push("/");
  };


  const { place, adults, children, departureDate, departureVenue ,email} = props.location.state;

  return (
    <div className="booking-success-box">
      <h1 style={{ color: "green" }}>Enjoy Tour With Your Loved Ones..!!</h1>
      <div className="booking-datails">
        <h3 className="booking-datails-text">Booking Details</h3>
        <p>Destination : {place}</p>
        <p>
          Seats Reserved : {children}-Kids{" "}
          {adults}-Adults
        </p>
        <p>Date of Departure: {departureDate}</p>
        <p>Departure Venue: {departureVenue}</p>
        <h6>
          <b>
            <i>
              <span style={{ color: "green" }}>H</span>
              <span style={{ color: "red" }}>A</span>
              <span style={{ color: "darkmagenta" }}>P</span>
              <span style={{ color: "blue" }}>P</span>
              <span style={{ color: "green" }}>Y</span>
              <span style={{ color: "green" }}> </span>
              <span style={{ color: "red" }}>J</span>
              <span style={{ color: "darkmagenta" }}>O</span>
              <span style={{ color: "blue" }}>U</span>
              <span style={{ color: "orange" }}>R</span>
              <span style={{ color: "sienna" }}>N</span>
              <span style={{ color: "blue" }}>E</span>
              <span style={{ color: "green" }}>Y</span>
              <span style={{ color: "blue" }}> !!</span>
            </i>
          </b>
          <span style={{ color: "green" }}>
            <span className="emoji">☺</span>
          </span>
        </h6>
        <button onClick={homeHandler} className="button button1">
          {" "}
          Back To Home
        </button>
      </div>
    </div>
  );
}
