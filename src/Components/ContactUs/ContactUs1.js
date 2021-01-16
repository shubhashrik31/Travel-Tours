import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React,{Component} from 'react';
import '../Forms/Form.css'

var style = {
  width: "50%",
  height: "550px",
  margin:"auto",
  marginTop:"-2.5%",
  overflowX: "hidden",
  overflowY: "hidden"
 };
 var containerStyle = {
  width: "100%",
  height: "550px"
 };

 
export class ContactUs extends Component {


  render() {
    return (
    <div>

      <div className="contact_header">
      <h1 style={{color:'white'}}>Contact Us</h1>
      <h6 style={{color:'#61DFFB'}}>Feel free to drop us a line</h6>
      </div>
      <div className="contact_map_box">
             
           <div className="col-lg-7 contact-details-box1">
             <h4 style={{color:"#20232A",fontSize:"24px"}}>Best Travel</h4>
             <p className="contact_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             
            </div>

            <div className="col-lg-4 contact-details-box">
             <h4 style={{color:"#20232A",fontSize:"24px"}}>Get In touch:</h4>
             <p className="contact_text1">If you have any questions please eel free to contact us. We are happy to help you. Have a Wonderful Day..!!</p>
             <br/><p className="contact_text1">Address:</p> <p>A-4,Sai Complex, Sangli</p>
             <p className="contact_text1">EmailId:</p><p> toursindia@gmail.com</p>
             <p className="contact_text1">Contact Number:</p><p> +91 9876654341</p>
            </div>
   
      </div>

        <center className="mapStyle">
          <Map google={this.props.google} zoom={14} style={style} containerStyle={containerStyle}  >
 
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                   
          </Map>
          </center>
        </div>
 
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAqSakeyaA6RNzqC2A2rjv9HZfHME7kvqE")
})(ContactUs)