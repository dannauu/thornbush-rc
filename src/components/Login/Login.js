import React from 'react'
import { Container } from 'react-bootstrap'
import './Login.css'

const Login = () => {
    return (
        <Container className='loginContainer'>
            <form className='loginForm'>
                <h3 className='loginHeader'>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control text-center" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control text-center" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </Container>
        
    )
}

export default Login
