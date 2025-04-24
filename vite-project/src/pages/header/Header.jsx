
import { Link } from "react-router-dom"
import "./Header.css"
import { Navbar, Nav, Container } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">Employee Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Employee</Nav.Link>
            <Nav.Link as={Link} to="/employee" className="nav-link">Post Employee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header

