import React, { Component } from "react";
import Homepage from "./Homepage";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import "./Contact.css";

export default class Contactpage extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      Nmail: "",
      Message: "",
      errors: {
        fullname: "",
        Nmail: "",
        Message: "",
      },
    };
  }
  Onsubmit = (e) => {
    const Namedata = document.getElementById("NameId").value;
    const Emaildata = document.getElementById("EmailId").value;
    const Messagedata = document.getElementById("MessageId").value;

    let Formdata = Namedata + "#" + Emaildata + "#" + Messagedata;
    console.log(Formdata);
    axios
      .post(
        "http://labourwebapi-dev.eba-mxwq2kj3.ap-south-1.elasticbeanstalk.com/WeatherForecast",
        { Formdata }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  Onchange = (e) => {
    e.preventDefault();
    const nameprop = e.target.name;
    const valueprop = e.target.value;
    const regexmail = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const alphabetsonly = RegExp(/[^a-z]/gi, "");
    // console.log(nameprop, valueprop);
    let errors1 = this.state.errors;
    switch (nameprop) {
      case "fullname":
        errors1.fullname = alphabetsonly.test(valueprop)
          ? " Please enter only alphabets"
          : "";

        break;
      case "Nmail":
        errors1.Nmail = regexmail.test(valueprop) ? " " : "Email is not valid";
        break;
      case "Message":
        errors1.Message =
          valueprop.length > 50 ? "you can't enter more than 70 words" : "";
        break;
      default:
        break;
    }
    this.setState({ errors1, [nameprop]: valueprop });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="MainContact">
        <div
          className="Homecomponent"
          style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        >
          <Homepage />
        </div>
        <div className="Contactpage">
          <div className="contact-details">
            <div class="headingContact">
              <h2 class="highlightedcontact">Contact Us</h2>
            </div>
            <div class="text-box">
              <h4 class="highlightedtouch">
                We would love to get in touch with you!
              </h4>
            </div>
            <div>
              <a
                href="https://goo.gl/maps/LrdsPRmCk4FPeedg7"
                id="location"
                className="d-flex"
                target="blank"
              >
                <LocationOnIcon
                  style={{ color: "rgb(92 168 8)", fontSize: "50px" }}
                />
                <text>B-3, Noida II, New Delhi 110024</text>
              </a>
            </div>
            <br />
            <div>
              <p>
                <PhoneIcon
                  style={{ color: "rgb(84, 84, 243)", fontSize: "50px" }}
                />
                <a href="tel:+918401-8401-42" target="blank">
                  +91 8401-8401-42
                </a>
              </p>
            </div>
            <div>
              <EmailIcon style={{ color: "#f7d022", fontSize: "50px" }} />
              <a href="##">support@Labourvale.com</a>
            </div>
            <div className="Contact_form">
              <h3 className="Form_Heading">Leave a Message</h3>
              <p>Feel free to drop your query , and we shall get back to you</p>
              <form onSubmit={onsubmit}>
                <input
                  className="Name"
                  type="text"
                  placeholder="Enter your Name"
                  name="fullname"
                  onChange={(e) => this.Onchange(e)}
                  value={this.state.Nname}
                  id="NameId"
                  maxLength="20"
                  onkeydown="return /[a-z]/i.test(event.key)"
                ></input>
                <br />
                {errors.fullname.length > 0 && (
                  <span style={{ color: "red" }}>{errors.fullname}</span>
                )}
                <br />
                <input
                  className="Name"
                  type="text"
                  placeholder="Enter your Email"
                  name="Nmail"
                  onChange={(e) => this.Onchange(e)}
                  value={this.state.Nmail}
                  id="EmailId"
                ></input>
                <br />
                {errors.Nmail.length > 0 && (
                  <span style={{ color: "red" }}>{errors.Nmail}</span>
                )}
                <br />
                <textarea
                  className="message"
                  type="text"
                  placeholder="Write your Message"
                  name="Message"
                  value={this.state.Message}
                  onChange={(e) => this.Onchange(e)}
                  id="MessageId"
                  maxLength="70"
                ></textarea>
                {errors.Message.length > 0 && (
                  <span style={{ color: "red" }}>{errors.Message}</span>
                )}
                <br />
                <button
                  className="Button"
                  type="button"
                  onClick={this.Onsubmit}
                  name="Submitbutton"
                >
                  Send Me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
