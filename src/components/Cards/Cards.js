import React from 'react';
import classes from './Cards.module.css';

import Card from './Card/Card';

const Cards = (props) => {

    return (
        <div className={classes.Cards}>
            {props.cards.map((card) => (
                <Card 
                    key={card.id}
                    card={card}
                />
            ))}
        </div>
    );
}

export default Cards;