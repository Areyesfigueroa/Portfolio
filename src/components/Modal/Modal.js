import React from 'react';
import classes from '../../containers/App.module.css';
import { Spring } from 'react-spring/renderprops';
import InfoBox from '../InfoBox/InfoBox';
import CarouselSlides from '../CarouselSlides/CarouselSlides';

//TODO: Create animation for fadein modal. 

const Modal = (props) => {

    const myStyle = {
        visibility: 'hide'
    }

    if(props.modal.showModal) {
        myStyle.visibility = 'visible';
    }

    return (
        <Spring
        from={{ opacity: props.modal.showModal===true ? 0:1}}
        to={{ opacity: props.modal.showModal===true ? 1:0 }}
        config={{ duration: props.modal.animDuration }}
        >
            {style => (
                <div id={props.id} style={{...style, ...myStyle}} className={classes.modalShadow} onClick={props.clicked}>
                    <div className={classes.modal}>
                        <a id={props.id} onClick={props.clicked} className={classes.closeBtn}>X</a>
                        <div className={classes.modalContent}>
                            <CarouselSlides 
                            slides={props.card.images.slides}
                            />
                            <InfoBox 
                            title= {props.card.title}
                            subtitle= {props.card.shortDesc}
                            >
                            {props.card.longDesc}
                            </InfoBox>
                        </div>
                        <div className={classes.modalBtns}>
                            <button className={classes.modalBtn}>Demo</button>
                            <button className={classes.modalBtn}>Website</button>
                            <button className={classes.modalBtn}>Github</button>
                        </div>   
                    </div>
                </div>
            )}
        </Spring>
    );
};

export default Modal;