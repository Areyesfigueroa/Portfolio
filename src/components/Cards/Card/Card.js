import React from 'react';
import classes from '../../../containers/App.module.css';

/**
 * 
 * IDEA:
 * For each children of the card create an li element.
 */

const card = (props) => {

    const listItems = props.card.items.map((item) => <li key={item.id}>{item.value}</li>);

    return (
        <div className={classes.card}>
            {/* <img src={props.imgSrc} alt='Card Image'/> */}
            <h1>{"</>"}</h1>
            <h2>{props.card.title}</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default card;