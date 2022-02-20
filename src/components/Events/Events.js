import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Events.css";
import Socials from "../Socials/Socials";
import { SiGooglemaps, SiGooglecalendar } from "react-icons/si";
import DriftVideo from '../assets/img/DJI_0727.mp4';


const Events = () => {
  return (
    <Container className="eventsContainer">
      <video autoPlay loop muted id="bgVid">
        <source src={DriftVideo} type="video/mp4" />
      </video>
      <Row>
        <h1 className="eventHeader">
          Driftin' at the Thornbush!
        </h1>
      </Row>
      <Row>
        <h1 className="eventSubHeader">
          Register for the event on our facebook!
        </h1>
      </Row>
      <Row>
        <Col className="saveTheDate">
          <h1 className="eventh1">Save the date!</h1>
          <h2 className="eventh2">Saturday Febuary 26th, 2022 10:00 a.m.-3:00 p.m.</h2>
        </Col>
        <Col className="where">
          <h1 className="eventh1">Where</h1>
          <h2 className="eventh2">604 SW 5th St Oak Grove MO 64075</h2>
          <a target='_blank' href="https://www.google.com/maps/place/604+SW+5th+St,+Oak+Grove,+MO+64075/@39.013331,-94.1407477,17z/data=!3m1!4b1!4m5!3m4!1s0x87c113eed583e8e9:0x6565ebd3f32219ae!8m2!3d39.013331!4d-94.138559">Get Directions</a>
        </Col>
      </Row>
      <Socials />
    </Container>
  );
};

export default Events;
