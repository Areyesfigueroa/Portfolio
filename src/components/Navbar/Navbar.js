import React from 'react';
import classes from "./Navbar.module.css";

//Bootstrap Navbar
import { Navbar, Nav} from 'react-bootstrap';

const navbar = (props) => {

    return (
        <div className={classes.Navbar} className={classes.stickyNavbar}>
            <Navbar collapseOnSelect expand="md" bg='none'>
                <Navbar.Brand href="#header" className={classes.homeBtn}><img src={props.img} alt='Aliel Logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className={classes.navbarMobileBtn}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={classes.navlinks}>
                        <Nav.Link href="#aboutSection">About</Nav.Link>
                        <Nav.Link href="#resumeSection">Resume</Nav.Link>
                        <Nav.Link href="#technologiesSection">Technologies</Nav.Link>
                        <Nav.Link href="#projectsSection">Projects</Nav.Link>
                        <Nav.Link href="#contactSection">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </div>
    );
};

export default navbar;