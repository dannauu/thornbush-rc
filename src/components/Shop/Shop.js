import React from "react";
import product_card from "./ProductData";
import { Container, Image } from "react-bootstrap";
import "./Shop.css";

const Shop = () => {

  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <Image src={item.thumb} alt="" />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price"> {item.price} <span>{item.currency}</span></p>
      </div>
    </div>
  ));

    
  return (
    <>
      <Container><h1 className="shopHeader">Thornbush RC's Shop</h1></Container>
      <Container className="main_content">{listItems}</Container>
    </>
  );
};
export default Shop;
