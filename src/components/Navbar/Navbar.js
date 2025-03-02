import React from "react";
import classes from "./Navbar.module.css";
import { scrollToSection } from "../../utils/navigationUtils";
// import { useNavigate } from "react-router-dom";

//Bootstrap Navbar
import { Navbar, Nav } from "react-bootstrap";

const navbar = (props) => {
  //   const navigate = useNavigate();

  const handleScrollAndUpdateUrl = (section) => {
    // Change the URL without navigating
    // navigate("/projects", { replace: true });

    // Smoothly scroll to the section
    scrollToSection(section);
  };

  return (
    <div className={[classes.navbar, classes.stickyNavbar].join(" ")}>
      <Navbar collapseOnSelect expand="md" bg="none">
        <Navbar.Brand href="#header" className={classes.homeBtn}>
          <img src={props.img} alt="Aliel Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={classes.navbarMobileBtn}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={classes.navlinks}>
            <Nav.Link href="#aboutSection">About</Nav.Link>
            <Nav.Link href="#technologiesSection">Technologies</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("projectsSection")}>
              Projects
            </Nav.Link>
            <Nav.Link href="#resumeSection">Resume</Nav.Link>
            <Nav.Link href="#contactSection">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default navbar;
