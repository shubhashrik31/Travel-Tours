import React from "react";
import "./FooterComp.css";
import { MdEmail, MdContactPhone, MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
function FooterComp() {
  return (
    <div>
      <footer class="bg-primary text-white text-center text-lg-start">
        <div class="footercontainer p-4">
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">About Us</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br></br>
                Iste atque ea quis molestias. Fugiat pariatur maxime quis
                <br></br>
                culpa corporis vitae repudiandae aliquam <br></br>
                voluptatem veniam, est atque cumque eum delectus sint!
              </p>
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Contact us</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <MdLocationOn
                    size="3em"
                    color="#61DAFB"
                    style={{ marginLeft: "0px" }}
                  />
                  Address : A-4,Sai Complex, Sangli
                </li>
                <br></br>
                <li>
                  <MdContactPhone size="3em" color="#61DAFB" /> Phone Number :
                  +91 9876654341
                </li>
                <br></br>
                <li>
                  <MdEmail size="3em" color="#61DAFB" />
                  Email Id : toursindia@gmail.com
                </li>
                <br></br>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">Connect with us</h5>

              <ul class="list-unstyled">
                <a href="https://www.instagram.com" target="_blank">
                  <FaInstagram
                    size="2em"
                    color="#61DAFB"
                    style={{ margin: "10px", marginLeft: "0px" }}
                  />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <FaTwitter
                    size="2em"
                    color="#61DAFB"
                    style={{ margin: "10px" }}
                  />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <FaFacebook
                    size="2em"
                    color="#61DAFB"
                    style={{ margin: "10px" }}
                  />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <FaLinkedin
                    size="2em"
                    color="#61DAFB"
                    style={{ margin: "10px" }}
                  />
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center p-3" style={{ backgroundColor: "#20232A" }}>
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">
            BestTravel Agency
          </a>
        </div>
      </footer>
    </div>
  );
}

export default FooterComp;
