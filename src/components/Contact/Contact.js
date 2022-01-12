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
      // "gmail",
      // "template_bz1me1q",
      // e.target,
      // "user_KqZoKJsgDW9eoJcs43zPJ"
      ()
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <Container>
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
              placeholder="Subject and Phone Number"
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
              className="btn btn-dark sendMsg"
              value="Send Message"
            ></input>
          </div>
        </div>
      </form>
      <div className="coloredLine"></div>
      <div className="contact">
        <div className="row">
          <div className="col-md-12">
            <a
              href="https://github.com/dannauu"
              className="btn btn-social"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github github fa-7x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-nau-070441194/"
              className="btn btn-social"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin linkedIn fa-7x"></i>
            </a>
            <a
              href="https://www.facebook.com/webdevnau/"
              className="btn btn-social"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-facebook-square facebook fa-7x"></i>
            </a>
          </div>
        </div>
      </div>
      <Socials/>
    </Container>
  );
}

// figure out why there is margin on the bottom of the 3 icons
