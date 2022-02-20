import React from "react";
import { Carousel, Image, Container } from "react-bootstrap";
import "./Merch.css";
import Shirt2 from "../assets/img/shirt2.jfif";
import Shirt4 from "../assets/img/shirt4.jfif";

const Merch = () => {
  return (
    <div className="merchDiv">
      <h1 className="text-center mt-4 display-5 merchHeading">New Merch!</h1>
      <h4 className="text-center merchSubHeading">Winter Sale <a href="/shop">CLICK HERE</a></h4>
      <Container className="carouselContainer">
        <div className="carouselDiv">
          <Carousel>
            <Carousel.Item>
              <Image
                thumbnail
                className="d-block"
                src={Shirt4}
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>Thornbush 2022 Hoodie</h1>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image
                thumbnail
                className="d-block"
                src={Shirt2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h1>Thornbush 2022 T-Shirt</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Merch;
