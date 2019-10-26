import React from 'react';
import classes from '../../../containers/App.module.css';

/**
 * 
 * IDEA:
 * For each children of the card create an li element.
 */

const card = (props) => {

    let classList = [
        classes.cardBase, 
        classes.techCard
    ];

    const listItems = props.card.items.map((item) => <li key={item.id}>{item.value}</li>);

    return (
        <div className={classList.join(' ')}>
            {/* <img src={props.imgSrc} alt='Card Image'/> */}
            <h1>{"</>"}</h1>
            <h4>{props.card.title}</h4>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default card;