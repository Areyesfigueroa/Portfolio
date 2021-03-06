import React from 'react';
// import classes from '../../../containers/App.module.css';
import classes from './ProjectCard.module.css';

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
                <img className={classes.projectCardIcon} src={props.icon} alt="Project Card Img"/>
                <h4>{props.title}</h4>
            </div>
            
            <div className={classes.projectCardBG}>
                <img src={props.backgroundImg} alt="Background"/>
                
                <ProjectCardText 
                isActive={props.showText}
                description={props.description}
                clicked={props.clicked}/>
            </div>
        </div>
    );
};

export default projectCard;