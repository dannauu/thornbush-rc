import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Events.css";
import Socials from "../Socials/Socials";
import { SiGooglemaps, SiGooglecalendar } from "react-icons/si";

const Events = () => {
  return (
    <Container className="eventsContainer">
      <Row>
        <h1 className="eventHeader">
          Coffee and Crawl on Saturday 25, 2021 at 8:00 AM
        </h1>
      </Row>
      <Row>
        <h1 className="eventSubHeader">
          Register for the event on our facebook!
        </h1>
      </Row>
      <Row>
        <Col className="saveTheDate">
          <h1>Save the date!</h1>
          <h2>Saturday 25, 2021 at 8:00am</h2>
          <Button variant="light" size='lg' className="mb-3">Save on my google calendar <SiGooglecalendar/></Button>
        </Col>
        <Col className="where">
          <h1>Where</h1>
          <h2>604 SW 5th St Oak Grove MO 64075</h2>
          <Button variant="outline-light" size='lg' className="mb-3">Get Directions <SiGooglemaps/></Button>
        </Col>
      </Row>
      <Socials />
    </Container>
  );
};

export default Events;
