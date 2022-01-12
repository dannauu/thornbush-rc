import React from "react";
import { Link } from 'react-router-dom'
import { Button, Container, Row } from "react-bootstrap";
import { FaTwitch } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import './Socials.css'


const Socials = () => {
  return (
    <Container>
      <Row className="mt-5">
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title text-center">Facebook</h5>
            <div className="text-center">
              <FaFacebookSquare size="5em" className="justify-content-center" color="blue"/>
            </div>
            <p className="card-text text-center">
              Join Thornbush facebook page for more info on events and upcoming
              competitions!
            </p>
            <div className="text-center">
              <Button onClick={()=> window.open("https://www.facebook.com/The-Thornbush-103395971586510", "_blank")} variant="dark">
                Visit Facebook
              </Button>
            </div>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title text-center">Twitch</h5>
            <div className="text-center">
            <FaTwitch size="5em" color="purple"/>
            </div>
            <p className="card-text text-center">
              Visit our twitch for live events, competitions, and building of the drift/crawler tracks!
            </p>
            <div className="text-center">
            <Button onClick={()=> window.open("https://www.twitch.tv/thornbushrc", "_blank")} variant="dark">
              Watch us LIVE
            </Button>
            </div>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title text-center">Tik Tok</h5>
            <div className="text-center">
            <FaTiktok size="5em" color="white"/>
            </div>
            <p className="card-text text-center">
              Visit our tik tok for tips, tricks, and fails!
            </p>
            <div className="text-center">
            <Button onClick={()=> window.open("https://www.tiktok.com/@thornbushrc", "_blank")} variant="dark">
              Visit TikTok
            </Button>
            </div>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title text-center">Instagram</h5>
            <div className="text-center">
            <FaInstagram size="5em" color="pink"/>
            </div>
            <p className="card-text text-center">
              Visit our instagram for pictures of all the things!
            </p>
            <div className="text-center">
            <Button onClick={()=> window.open("https://www.facebook.com/The-Thornbush-103395971586510", "_blank")} variant="dark">
              Visit Instagram
            </Button>
            </div>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title text-center">Youtube</h5>
            <div className="text-center">
            <FaYoutube size="5em" color="red"/>
            </div>
            <p className="card-text text-center">
              Tutorials, vlogs, and more!
            </p>
            <div className="text-center">
            <Button onClick={()=> window.open("https://www.youtube.com/user/mikebrisbin1", "_blank")} variant="dark">
              ThornbushRC Youtube
            </Button>
            </div>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title text-center">Discord</h5>
            <div className="text-center">
            <FaDiscord size="5em" color="white"/>
            </div>
            <p className="card-text text-center">
              Join our discord for free and communicate with other members of the Thornbush via text and voice channels!
            </p>
            <div className="text-center">
            <Button onClick={()=> window.open("https://discord.gg/bqaQu4Rv", "_blank")} variant="dark">
              Join our Discord
            </Button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Socials;
