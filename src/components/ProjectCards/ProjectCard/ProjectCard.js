import React from 'react';
import classes from '../../../containers/App.module.css';

import ShadowBox from '../../ShadowBox/ShadowBox';
import ProjectCardText from '../ProjectCardText/ProjectCardText'

const projectCard = (props) => {

    let card = [
        classes.cardBase, 
        classes.projectCard
    ];

    return (

        <div onMouseLeave={props.hoverExit} onMouseEnter={props.hover} className={card.join(' ')}>
            <ShadowBox isActive={props.showText}/>
            
            <div className={classes.cardHeader}>
                <img src={props.banner} alt="Card banner"/>
                <h1>{props.title}</h1>
            </div>
            
            <div className={classes.projectCardBG}>
                <img src={props.backgroundImg} alt="Background"/>
                
                <ProjectCardText 
                isActive={props.showText}
                description={props.description}/>
            </div>
        </div>
    );
};

export default projectCard;