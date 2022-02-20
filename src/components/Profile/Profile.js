import React from 'react'
import { Container } from 'react-bootstrap'
import './Profile.css'
import jwt_decode from 'jwt-decode'



const Profile = () => {

    var token = localStorage.getItem('token')
    var decoded = jwt_decode(token)
    
    return (
        <Container className='profileContainer'>
            <h1 className='profileH1'><span className='labels'>Welcome, </span>{decoded.username}</h1>
            <h1 className='profileH1'><span className='labels'>Registed Email: </span>{decoded.email}</h1>
        </Container>
    )
}

export default Profile