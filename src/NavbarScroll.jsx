import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarScroll() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"></Nav.Link>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Who We Are</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Our Impact</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Our Partners</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Testimonials</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Careers</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Our Initiatives" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Educational Initiatives</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Health and Hygiene</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Social Empowerment</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Social Welfare</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Upcoming Initiatives</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Get Involved" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Volunteer</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Partner with Us</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Fundraise</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Donate</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Media</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;