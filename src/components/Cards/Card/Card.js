import React from 'react';
import classes from './Card.module.css';

const card = (props) => {

    const listItems = props.card.items.map((item) => <li key={item.id}>{item.value}</li>);

    return (
        <div className={classes.Card}>
            <img src={props.card.icon} alt='Card'/>
            <h4>{props.card.title}</h4>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default card;