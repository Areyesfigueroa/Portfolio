import React from 'react';

/**
 * 
 * IDEA:
 * For each children of the card create an li element.
 */

const cards = (props) => {
    return (
        <div className={props.style}>
            <img src={props.imgSrc} alt='Card Image'/>
            <h1>{props.title}</h1>
            <ul>
                <li>Tech 1</li>
                <li>Tech 2</li>
                <li>Tech 3</li>
                <li>Tech 4</li>
            </ul>
        </div>
    );
}

export default cards;