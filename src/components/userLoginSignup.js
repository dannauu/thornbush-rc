import React from 'react'
import { Nav } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { ImProfile } from "react-icons/im";

const userLoginSignup = () => {
    function logout() {
        localStorage.clear('token')
        window.location.reload(true)
    }
    const token = localStorage.getItem('token')
    if (token) {
        return <><Nav.Link href='/profile'> <ImProfile /> My Profile</Nav.Link>
            <Nav.Link onClick={logout}><FiLogOut />Logout</Nav.Link></>

    } else {
        return <Nav>

            <Nav.Link href="/login">
                Login <FiLogIn size="20px" />
            </Nav.Link>
            <Nav.Link href="/signup">
                Sign Up <BsFillPersonPlusFill size="20px" />
            </Nav.Link>
        </Nav>
    }
}

export default userLoginSignup;