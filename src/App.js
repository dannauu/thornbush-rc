import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Logo from "./components/assets/img/logo.png";
import { FiLogIn } from "react-icons/fi";
import Home from "./components/Home/Home";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Gallery from "./components/Gallery/Gallery";
import Faq from "./components/Faq/Faq";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Navbar expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} className="logo" alt="React Bootstrap logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">
                Login <FiLogIn size="20px" />{" "}
              </Nav.Link>
              <Nav.Link href="/signup">
                Sign Up <BsFillPersonPlusFill size="20px" />{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/faq" component={Faq} />
        <Route path="/events" component={Events} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
