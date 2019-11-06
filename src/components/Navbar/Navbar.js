import React from 'react';
import classes from '../../containers/App.module.css';
import SlideToggle from "react-slide-toggle";

//Bootstrap Navbar
import { Navbar, Nav} from 'react-bootstrap';

const navbar = (props) => {

    let classList = [classes.navbar, classes.stickyNav];
    let navClassList = [classes.navlinks]

    if(props.stickyNav) {
        classList = [classes.navbar, classes.stickyNavbar];
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg='none' className={classList.join(' ')}>
                <Navbar.Brand href="#header" className={classes.homeBtn}><img src={props.img} alt='Aliel Logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className={classes.navbarMobileBtn}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={navClassList.join(' ')}>
                        <Nav.Link href="#aboutSection">About</Nav.Link>
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