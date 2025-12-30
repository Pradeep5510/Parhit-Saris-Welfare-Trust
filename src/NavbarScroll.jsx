import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function NavbarScroll() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (page, sectionId) => {
    if (location.pathname === `/${page}`) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${page}#${sectionId}`);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            
            {/* About Us Dropdown */}
            <NavDropdown
              title="About Us"
              id="about-dropdown"
              show={openDropdown === "about"}
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavDropdown.Item onClick={() => handleScrollToSection("about", "whoWeAre")}>Who We Are</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("about", "ourTeam")}>Our Team</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("about", "ourImpact")}>Our Impact</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("about", "partners")}>Our Partners</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("about", "testimonials")}>Testimonials</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("about", "careers")}>Careers</NavDropdown.Item>
            </NavDropdown>

            {/* Initiatives Dropdown */}
            <NavDropdown
              title="Our Initiatives"
              id="initiatives-dropdown"
              show={openDropdown === "initiatives"}
              onMouseEnter={() => setOpenDropdown("initiatives")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavDropdown.Item onClick={() => handleScrollToSection("initiatives", "educational")}>Educational Initiatives</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("initiatives", "health")}>Health and Hygiene</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("initiatives", "empowerment")}>Social Empowerment</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("initiatives", "welfare")}>Social Welfare</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("initiatives", "upcoming")}>Upcoming Initiatives</NavDropdown.Item>
            </NavDropdown>

            {/* Get Involved Dropdown */}
            <NavDropdown
              title="Get Involved"
              id="involved-dropdown"
              show={openDropdown === "involved"}
              onMouseEnter={() => setOpenDropdown("involved")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavDropdown.Item onClick={() => handleScrollToSection("involved", "volunteer")}>Volunteer</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("involved", "partner")}>Partner with Us</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("involved", "fundraise")}>Fundraise</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("involved", "donate")}>Donate</NavDropdown.Item>
            </NavDropdown>

            {/* Other pages (just links) */}
            <Nav.Link href="/media">Media</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;
