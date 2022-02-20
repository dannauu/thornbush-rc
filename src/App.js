import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Logo from "./components/assets/img/logo.png";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Faq from "./components/Faq/Faq";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import About from './components/About/About'
import Shop from './components/Shop/Shop'
import SwapMeet from './components/SwapMeet/SwapMeet';
import Buyin from './components/Buyin/Buyin'
import Sellin from './components/Sellin/Sellin'
import ProtectedRoute from "react-protected-route-component";
import UserLoginSignup from './components/userLoginSignup'
import Profile from "./components/Profile/Profile";

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
              <Nav.Link href="/swapmeet">Swap Meet</Nav.Link>
            </Nav>
            <UserLoginSignup />
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
        <Route path="/signup" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/swapmeet" component={SwapMeet} />
        <Route path="/buyin" component={Buyin} />
        <Route path="/profile" component={Profile} />
        {/* <Route path="/sellin" component={Sellin} /> */}
        <ProtectedRoute
          path="/sellin"
          redirectRoute="/signup"
          guardFunction={() => {
            const token = localStorage.getItem('token');
            if (token) {
              return true;
            } else {
              return false;
            }
          }}
          component={Sellin}
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;


