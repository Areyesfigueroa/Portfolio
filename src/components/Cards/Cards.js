import React from 'react';
import Card from './Card/Card';
import classes from '../../containers/App.module.css';


const cards = (props) => {

    return props.cards.map((card) => {

        return (
            <div>
                <Card 
                key={card.id} 
                card={card}
                />
            </div>
        );

    });

}

export default cards;