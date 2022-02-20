import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {

    const history = useHistory()

    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        })

        const data = await response.json()
        console.log(data);
        window.location.href = '/'
    

    if (data.status === 'ok') {
        history.push('/login')
        
    }
}

return (
    <Container className='signUpContainer'>
        <form className='signUpForm' onSubmit={registerUser}>
            <h3 className='signUpHeader'>Sign Up</h3>

            <div className="form-group">
                <label>Email address:</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    className="form-control text-center"
                />
            </div>

            <div className="form-group">
                <label>Username:</label>
                <input
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter desired username"
                    className="form-control text-center"
                />
            </div>

            <div className="form-group">
                <label>Password:</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter password"
                    className="form-control text-center"
                />
            </div>
            <h3 className='alreadyHaveAcc'>Already have an account? Click <Link to='/login' className='clickHere'>HERE</Link> to login</h3>
            <button type="submit" className="signUpBtn">Sign Me Up!</button>
        </form>
    </Container>
)
}

export default SignUp


// left off.... cant get database to show new registered user and also authenticate username, email and bcrypt or hash password