import { useState } from 'react'
import { Container } from 'react-bootstrap'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('https://frozen-hamlet-78562.herokuapp.com/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
	}

    return (
        <Container className='loginContainer'>
            <form className='loginForm' onSubmit={loginUser}>
                <h3 className='loginHeader'>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
                    className="form-control text-center"
				/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
                    className="form-control text-center"

				/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="submitBtn">Submit</button>
                {/* <p className="forgot-password text-right">
                    Forgot <a>password?</a>
                </p> */}
            </form>
        </Container>
        
    )
}

export default Login
