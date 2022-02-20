import React, { useState } from "react";
import "./Sellin.css";
import Socials from '../Socials/Socials'
import { Container, Form } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";

const Sellin = () => {
  const [postingTitle, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const options = [
    { label: "Category", value: "Category", id: 0 },
    { label: "Tires", value: "tires", id: 1 },
    { label: "Wheels", value: "wheels", id: 2 },
    { label: "Electronics", value: "electronics", id: 3 },
    { label: "Bodies", value: "bodies", id: 4 },
    { label: "Remotes", value: "remotes", id: 5 },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(postingTitle);
    console.log(price);
    console.log(description);
    console.log(category);

    if (category === '') {
      
    }

    const response = await fetch('http://localhost:3001/sellin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postingTitle,
        price,
        category,
        description,
      }),
    })

    const data = await response.json()
    console.log(data)


  };

  function hideForm() {
    const sellinContainer = document.getElementById('sellingCon')
    sellinContainer.classList.add('hide')
    const success = document.getElementById('successID')
    success.classList.remove('successMsg')

  }

  return (
    <>
      <Container id="sellingCon">
        <h1 className="sellinHeader">Item for sale</h1>
        <Form onSubmit={handleSubmit}>
          <div className="row mt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Posting Title"
                onChange={handleTitle}
                value={postingTitle}
                autoFocus={true}
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <CurrencyInput
                className="form-control"
                placeholder="Price"
                allowDecimals={false}
                onChange={handlePrice}
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <select
                className="form-control"
                onChange={handleCategory}
                value={category}
              >
                {options.map((option) => (
                  <option value={option.value} key={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Type your description here"
                onChange={handleDescription}
                value={description}
              ></textarea>
            </div>
            <div className="col-8 mt-2 mb-4 mx-auto">
              <button onClick={hideForm} variant="primary" type="submit" className="postBtn">
                Post listing
              </button>

            </div>
          </div>
        </Form>
      </Container>
      <div className="successMsg" id="successID">
        <h1 className="successStyleHeader">Success!</h1>
        <h1 className="successStyle">Thank you for posting your items on the swap and shop! Stay vigilant incase you get an offer!</h1>
        <h1 className="successStyle">If you would like to browse posts click <a href='/buyin' className="buyinLink">here</a></h1>
      </div>
      <Socials />
    </>
  );
};

export default Sellin;
