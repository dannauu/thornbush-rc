import React from "react";
import { Container, Row, Navbar, Nav } from "react-bootstrap";
import { FaTwitch } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "./Socials.css";

const Socials = () => {
  return (
    <Container>
      <Row>
        <div className="text-center col mb-5 mt-5">
          <h1>Facebook</h1>
          <FaFacebookSquare
            className="socialLogos"
            size="4em"
            color="blue"
            onClick={() =>
              window.open(
                "https://www.facebook.com/The-Thornbush-103395971586510",
                "_blank"
              )
            }
          />
        </div>

        <div className="text-center col mb-5 mt-5">
          <h1>Twitch</h1>
          <FaTwitch
            size="4em"
            color="purple"
            onClick={() =>
              window.open("https://www.twitch.tv/thornbushrc", "_blank")
            }
          />
        </div>

        <div className=" text-center col mb-5 mt-5">
        <h1>TikTok</h1>
          <FaTiktok
            size="4em"
            color="white"
            onClick={() =>
              window.open("https://www.tiktok.com/@thornbushrc", "_blank")
            }
          />
        </div>

        <div className="text-center col mb-5 mt-5">
        <h1>Youtube</h1>
          <FaYoutube
            size="4em"
            color="red"
            onClick={() =>
              window.open("https://www.youtube.com/user/mikebrisbin1", "_blank")
            }
          />
        </div>

        <div className="text-center col mb-5 mt-5">
        <h1>Instagram</h1>
          <FaInstagram
            size="4em"
            color="pink"
            onClick={() =>
              window.open("https://www.youtube.com/user/mikebrisbin1", "_blank")
            }
          />
        </div>

        <div className="text-center col mb-5 mt-5">
        <h1>Discord</h1>
          <FaDiscord
            size="4em"
            color="white"
            onClick={() => window.open("https://discord.gg/bqaQu4Rv", "_blank")}
          />
        </div>
      </Row>
    </Container>
  );
};

export default Socials;
