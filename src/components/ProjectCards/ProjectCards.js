import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import classes from './ProjectCards.module.css';

const ProjectCards = (props) => {
    return (props.projectCards.map((card, index) => (
        <div className={classes.ProjectCards} key={card.id}>
            <ProjectCard 
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.shortDesc}
            showText={card.showText} 
            backgroundImg={card.background}

            hover={() => props.hover(index, true)}
            hoverExit={() => props.hoverExit(index, false)}
            clicked={ () => props.clicked(card.id) }
            />
        </div>
    )));
};

export default ProjectCards;