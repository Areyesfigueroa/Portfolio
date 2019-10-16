import React from 'react';
import Card from './Card/Card';

const cards = (props) => {

    return props.cards.map((card) => {
        return (
                <Card 
                key={card.id} 
                card={card}
                />
        );

    });

}

export default cards;