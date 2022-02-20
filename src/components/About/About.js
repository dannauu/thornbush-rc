import React from "react";
import { Container, Image } from "react-bootstrap";
import AboutMePic from "../assets/img/aboutpic.jpg";
import "./About.css";
import Socials from '../Socials/Socials'

const About = () => {
  return (
    <Container className="aboutMeContainer">
      <h1 className="aboutHeader">Meet Michael Brisbin</h1>
      <Image src={AboutMePic} className="aboutMePic" />
      <p className="aboutMeParagraph">
        Owner and brains behind Thornbush RC park. His passion for tinkering met
        RC cars in 2005 with a gas powered traxxis. Fast forward to 2017 when he
        rediscovered his passion for RC cars the camaradarie that comes with the
        people! His FREE entry course is that way because he wanted a place for
        like-minded folks like you to relax and have fun just like the good ole'
        days. So come on out and hone in your crawling or drifting skills and
        enjoy the occasional competitions with music, games, and BBQ!
      </p>
      <Socials/>
    </Container>
  );
};

export default About;
