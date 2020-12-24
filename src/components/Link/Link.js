import React from 'react';

const Link = props => {
    return (
        <a 
        className={`${props.classes} ${props.variants}`} 
        href={props.link}>
            {props.children}
        </a>
    )
}

export default Link;