import { useState } from 'react';

const useModal = () => {
    const [modal, setModal] = useState({
        id: 0,
        showModal: false,
        closeModal: true,
        animDuration: 200,
        cardID: 0,
        zoomedIn: false,
        currentSlide: null //should be null
    });

    const showModalHandler = (cardID) => {
        const newModal = { ...modal }
        newModal.showModal= true;
        newModal.closeModal= false;
        newModal.cardID= cardID;

        setModal(newModal);
    }

    const closeModalHandler = (event) => {

        //If I click on the modal's shadow.
        if(parseInt(event.target.id) === modal.id) {
            const newModal = { ...modal };
            newModal.showModal = false;
            setModal(newModal);

            setTimeout(() => {
                const newModal = { ...modal };
                newModal.closeModal = true;

                setModal(newModal);
            }, modal.animDuration);
        }
    }

    const enableZoomHandler = (slideData) => {
        if(modal.zoomedIn) return;
        console.log("Enable Zoom");
    
        const newModal = {...modal};
        newModal.zoomedIn = true;
        newModal.currentSlide = slideData.src;
        
        setModal(newModal);
    }

    //REQUIRES Manigify IMG
    const disableZoomHandler = () => {
        console.log("disable", modal.zoomedIn);
        if(modal.zoomedIn === false) return;
        console.log("Disable Zoom", modal.zoomedIn);
        
        const newModal = { ...modal };
        newModal.zoomedIn = false;
    
        setModal(newModal);
    }

    return [
        modal,
        showModalHandler,
        closeModalHandler,
        enableZoomHandler,
        disableZoomHandler
    ]; 
};

export default useModal;