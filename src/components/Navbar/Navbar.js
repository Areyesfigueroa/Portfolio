import React from 'react';
import classes from '../../containers/App.module.css';

/** Waypoint Component */
import { Waypoint } from 'react-waypoint';


const navbar = (props) => {

    const classList = [classes.navbar];

    return (
        <Waypoint onLeave={props.scrolled}>
            <div className={classList.join(' ')}>
                <img src={props.img} alt='Aliel Logo'/>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </Waypoint>
    );
};

export default navbar;