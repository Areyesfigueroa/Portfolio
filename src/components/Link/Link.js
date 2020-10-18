import React from 'react';
import classes from './Link.module.css';

const Link = props => {
    return (
        <a 
        className={`${classes.Link} ${props.variants}`} 
        href={props.link}>
            {props.children}
        </a>
    )
}

export default Link;