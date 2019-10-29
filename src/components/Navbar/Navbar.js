import React from 'react';
import classes from '../../containers/App.module.css';
import { goToTop } from 'react-scrollable-anchor';

const navbar = (props) => {

    let classList = [classes.navbar];

    if(props.stickyNav) {
        classList = [classes.navbar, classes.stickyNavbar];
    }

    return (
        <div className={classList.join(' ')}>
            <a className={classes.homeBtn} href='#header'><img src={props.img} alt='Aliel Logo'/></a>
            <ul>
                <li><a href="#aboutSection">About</a></li>
                <li><a href="#technologiesSection">Technologies</a></li>
                <li><a href="#projectsSection">Projects</a></li>
                <li><a href="#contactSection">Contact</a></li>
            </ul>
        </div>
    );
};

export default navbar;