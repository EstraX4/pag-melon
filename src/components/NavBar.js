import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" className="brands">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Nav.Link
                href="#descubre"
                className={
                  activeLink === "descubre" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("descubre")}
              >
                Descubre
              </Nav.Link>
              <Nav.Link
                href="#sobreNosotros"
                className={
                  activeLink === "sobreNosotros" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("sobreNosotros")}
              >
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link
                href="#contactanos"
                className={
                  activeLink === "contactanos"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contactanos")}
              >
                Contactanos
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/juan-david-estrada-carvajal-691732251/"
                  target="_BLANK"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/EstraX4" target="_BLANK">
                  <img src={navIcon2} alt="" />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
