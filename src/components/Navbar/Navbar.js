import React from 'react';
import classes from '../../containers/App.module.css';

const navbar = (props) => {

    let classList = [classes.navbar];

    if(props.stickyNav) {
        classList = [classes.navbar, classes.stickyNavbar];
    }

    return (
        <div className={classList.join(' ')}>
            <img src={props.img} alt='Aliel Logo'/>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
};

export default navbar;