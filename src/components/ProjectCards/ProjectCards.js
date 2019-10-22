import React from 'react';
import classes from '../../containers/App.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

const ProjectCards = (props) => {
    return (props.projectCards.map((card, index) => (
        <ProjectCard 
        key={card.id}
        title={card.title}
        description={card.description}
        showText={card.showText} 
        banner={card.banner}
        backgroundImg={card.background}
        hover={() => props.hover(index, true)}
        hoverExit={() => props.hoverExit(index, false)}
        clicked={ (event) => props.clicked(event, card.id, true) }
        />
    )));
};

export default ProjectCards;