import React from "react";
import "./SwapMeet.css";
import { Container, Row, Col } from "react-bootstrap";
import Socials from "../Socials/Socials";
import { FaRegMoneyBillAlt, FaShoppingCart } from "react-icons/fa";

const SwapMeet = () => {
  return (
    <Container className="swapmeetContainer">
      <h1 className="swapMeetHeader kenburns-bottom">
        Thornbush RC Swap n' Meet
      </h1>
      <Row className="swapmeetRow">

        <Col className="btnColumn">
          <a href="/buyin" className="navButton">Buyin' &nbsp; <FaShoppingCart /></a>
        </Col>

        <div className="orColumn col-md-2">or</div>

        <Col className="btnColumn">
          <a href="/sellin" className="navButton">Sellin' &nbsp; <FaRegMoneyBillAlt /></a>
        </Col>

      </Row>
      <Socials />
    </Container>
  );
};

export default SwapMeet;
