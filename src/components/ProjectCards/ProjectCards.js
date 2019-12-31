import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';

const ProjectCards = (props) => {
    return (props.projectCards.map((card, index) => (
        <ProjectCard 
        key={card.id}
        title={card.title}
        description={card.shortDesc}
        showText={card.showText} 
        banner={card.banner}
        backgroundImg={card.background}
        hover={() => props.hover(index, true)}
        hoverExit={() => props.hoverExit(index, false)}
        clicked={ () => props.clicked(card.id) }
        />
    )));
};

export default ProjectCards;