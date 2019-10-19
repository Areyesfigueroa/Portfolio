import React from 'react';
import classes from '../../containers/App.module.css';

const projectCard = (props) => {

    let card = [
        classes.cardBase, 
        classes.projectCard
    ];

    return (

            <div className={card.join(' ')}>
                <div className={classes.shadowBox}></div>
                <div className={classes.cardHeader}>
                    <img src={props.banner} alt="Card banner"/>
                    <h1>{props.title}</h1>
                </div>
                <div className={classes.projectCardBG}>
                    <img src={props.backgroundImg} alt="Background"/>

                    <div className={classes.projectCardText}>
                        <p>{props.description}</p>
                        <a href="www.google.com">See more</a>
                    </div>
                </div>
            </div>
    );
};

export default projectCard;