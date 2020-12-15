import React from 'react';
import SectionWrapper from '../../SectionWrapper/SectionWrapper';
import ProjectCards from '../../ProjectCards/ProjectCards';

const ProjectSection = (props) => {

    return (
        <SectionWrapper title="Projects" scrollID={'projectsSection'}>
            <ProjectCards 
                projectCards={props.cards}
                hover={props.cardTextHandler} 
                hoverExit={props.cardTextHandler}
                clicked={props.clicked}
            />
          {props.modalHandler()}
        </SectionWrapper>
    );
};

export default ProjectSection;