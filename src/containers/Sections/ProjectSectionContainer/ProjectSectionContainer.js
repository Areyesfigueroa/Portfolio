import React, { useState } from 'react';
import ProjectSection from '../../../components/Sections/ProjectSection/ProjectSection';
import Modal from '../../../components/Modal/Modal';
import { getProjectCards } from '../../../services/ProjectSection/projectsCards';

const ProjectSectionContainer = (props) => {

    const [cards, setCards] = useState(getProjectCards());
    
    const cardTextHandler = (id, isActive) => {
        //Get the index
        const cardIndex = cards.findIndex((card) => card.id === id);

        //get a copy of the state card
        const card = { ...cards[cardIndex] };

        //Change the showText status.
        card.showText = isActive; 

        //get a copy of project cards and add the new changed card to it. 
        const newCards = [...cards];
        newCards[cardIndex] = card;

        //set the state
        setCards(newCards);
    }

    const modalHandler = () => {
        if(!props.modal.closeModal) {
            return(
              <Modal
              id={props.modal.id}
              card={cards[props.modal.cardID]}
              modal={props.modal} 
              clicked={(event) => props.closeModalHandler(event)}
              enableZoom={props.enableZoomHandler}
              />
            );
          }
    }    

    return (     
        <ProjectSection 
        cards={cards} 
        cardTextHandler={cardTextHandler}
        clicked={props.showModalHandler}
        modalHandler={modalHandler}/>
    );
};

export default ProjectSectionContainer;