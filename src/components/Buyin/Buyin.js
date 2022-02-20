import { useState } from 'react'
import { Container, Row } from "react-bootstrap";
import Socials from "../Socials/Socials";
import './Buyin.css'

const Buyin = () => {

  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch("http://localhost:3001/buyin")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPosts(data)
        const main_content = document.getElementById('mainContent')
        main_content.classList.remove('hide')
      })
  }

  function success() {
    const main_content = document.getElementById('mainContent')
    main_content.classList.remove('hide')
  }

  return (
    <>
      <Container>
        <Row>
          <h1 className="buyinHeader">Click below to view posts!</h1>
          <h2 className='buyinSubHeader'>If you find something you like, click the contact seller button to message on them on facebook!</h2>
        </Row>
        <Row className="fetchPosts">
          <button onClick={fetchPosts} className='browseBtn'>Browse the market</button>
        </Row>
        <Row>
          <Container className="main_content hide" id='mainContent'>
            {posts.map(post => (
              <div className="card" key={post._id}>
                <div className="card_header">
                  <h2><span className='titleSpan'>Title: </span>{post.postingTitle}</h2>
                  <p><span className='descSpan'>Description: </span>{post.description}</p>
                  <p className="price">  <span>Price:</span>{post.price}</p>
                  <button onClick={success}>Contact Seller</button>
                </div>
              </div>
            ))}


          </Container>
        </Row>
      </Container>
      <Socials />
    </>
  );
};

export default Buyin;
