import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
} from "react-router-dom";
import "../Forms/Form.css";
import axios from "axios";

var styles = {
  color: "red",
  fontSize: 15,
  fontWeight: "lighter",
  marginLeft: "27%",
};

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      roll_no: null,
      errormessage: "",
      errormessage1: "",
      errormessage2: "",
      errormessage3: "",
      password: "",
      password1: "",
      signUpFailed: false
    };
  }

  handleClick() {
    alert("Registration Succesful");
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ handleOnSubmit: true });

    axios
      .post(
        "/signup",
        {
          userName: this.state.username,
          email: this.state.email,
          password: this.state.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if(response.data.error){
            this.setState({...this.state, signUpFailed: true});
        }else{
          localStorage.setItem('authToken', response.data.token);
          this.props.history.push('/');
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  myChangeHandler = (event) => {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";

    if (nam === "username") {
      if (val == "") {
        err = <strong>⚠Name Should not be blank</strong>;
      }
    }
    this.setState({...this.state, signUpFailed: false});
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
  };

  mailChangeHandler = (event) => {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";

    if (nam === "email") {
      const re = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
      const isOk = re.test(val);
      if (!isOk) {
        err = <strong>⚠Enter Valid mail id</strong>;
      }
    }
    this.setState({ errormessage1: err });

    this.setState({ [nam]: val });
  };
  passChangeHandler = (event) => {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";

    if (nam === "password") {
      const re = new RegExp(
        "^(?=.*[0-9])" +
          "(?=.*[a-z])(?=.*[A-Z])" +
          "(?=.*[@#$%^&+=])" +
          "(?=\\S+$).{8,20}$"
      );
      const isOk = re.test(val);
      if (!isOk) {
        err = <strong>⚠Enter Strong Password</strong>;
      }
    }
    this.setState({ errormessage2: err });

    this.setState({ [nam]: val });
  };

  pass1ChangeHandler = (event) => {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    this.setState({ [nam]: val });

    const password1 = val;
    const { password } = this.state;
    // perform all neccassary validations
    if (password !== password1) {
      err = <strong>⚠Passwords don't match</strong>;
    }
    this.setState({ errormessage3: err });
  };

  render() {
    return (
      <div className="container s1">
        <center>
          <form>
            <div className="row form_submit">
              <div className="col-lg-3 simple">
                <label className="label_text" htmlFor="username">
                  <b>Username</b>
                </label>
              </div>
              <div className="col-lg-9">
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  placeholder="Enter your username"
                  onChange={this.myChangeHandler}
                />
              </div>

              <div style={styles}>{this.state.errormessage}</div>
            </div>
            <div className="row form_submit">
              <div className="col-lg-3 simple">
                <label class="label_text" htmlFor="email">
                  <b>Mail</b>
                </label>
              </div>
              <div className="col-lg-9">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  onChange={this.mailChangeHandler}
                  placeholder="Enter your Email"
                />
              </div>
              <div style={styles}>{this.state.errormessage1}</div>
            </div>

            <div className="row form_submit">
              <div className="col-lg-3 simple">
                <label class="label_text" htmlFor="password">
                  <b>Password</b>
                </label>
              </div>
              <div className="col-lg-9">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  onChange={this.passChangeHandler}
                  placeholder="Enter your Password"/>
                  </div>
              <div style={styles}>{this.state.errormessage2}</div>
            </div>
            <div className="row form_submit">
              <div className="col-lg-3 simple">
                <label class="label_text" htmlFor="password1">
                  <b>Confirm Password</b>
                </label>
              </div>
              <div className="col-lg-9">
                <input
                  required
                  type="password"
                  name="password1"
                  id="password1"
                  onChange={this.pass1ChangeHandler}
                  placeholder="Confirm Password"/>
              </div>
              <div style={styles}>{this.state.errormessage3}</div>
            </div>

            <button
              type="submit"
              className="button button1"
              onClick={this.handleOnSubmit}
            >
              Submit
            </button>
          </form>
          { this.state.signUpFailed ? <p className="sign-up-failed">This username already exists.</p>: null }
        </center>
      </div>
    );
  }
}

export default Registration;
