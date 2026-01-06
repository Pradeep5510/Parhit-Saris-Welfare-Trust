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
    const hashPath = `/${page}`;

    // If already on the correct page
    if (location.pathname === hashPath) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // HashRouter-safe navigation
      navigate(hashPath);

      // Wait for page render, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/")}></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>

            {/* About Us Dropdown */}
            <NavDropdown
              title="About Us"
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
              show={openDropdown === "involved"}
              onMouseEnter={() => setOpenDropdown("involved")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavDropdown.Item onClick={() => handleScrollToSection("involved", "volunteer")}>Volunteer</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("involved", "partner")}>Partner with Us</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("involved", "fundraise")}>Fundraise</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollToSection("involved", "donate")}>Donate</NavDropdown.Item>
            </NavDropdown>

            {/* Correct HashRouter links */}
            <Nav.Link onClick={() => navigate("/media")}>Media</Nav.Link>
            <Nav.Link onClick={() => navigate("/contact")}>Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;
