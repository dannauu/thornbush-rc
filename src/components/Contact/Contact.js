import emailjs from "emailjs-com";
import React from "react";
import { Container } from "react-bootstrap";
import Socials from "../Socials/Socials";
import "./Contact.css";


export default function Contact() {



  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm
      ("contact_service",
      "template_e7jdu6r",
      e.target,
      "user_lhYmukc5TewcG70Ewlhez")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    
  }

  return (
    <Container id="contactID">
      <div>
        <h1 className="contactHeader">
          Have a question about the park or possibly a suggestion?
        </h1>
      </div>
      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Type your message here"
              name="message"
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input
              type="submit"
              className="sendMsg"
              value="Send Message"
            ></input>
          </div>
        </div>
      </form>
      <Socials/>
    </Container>
  );
}
