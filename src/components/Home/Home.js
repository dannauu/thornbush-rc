import React from "react";
import "./Home.css";
import { Col, Row, Container } from "react-bootstrap";
import Merch from "../Merch/Merch";
import Socials from "../Socials/Socials";
import Welcome from "../Welcome/Welcome";
import Twitch from "../Twitch/Twitch";
import Youtube from "../Youtube/Youtube";

const Home = () => {
  return (
    <div>
      <Welcome />
      <Container>
        <Row>
          <Col>
            <Merch />
          </Col>
          <Col>
            <Twitch />
          </Col>
        </Row>
        <Row>
          <Col>
            <Youtube />
          </Col>
        </Row>
      </Container>

      <Socials />
    </div>
  );
};

export default Home;
