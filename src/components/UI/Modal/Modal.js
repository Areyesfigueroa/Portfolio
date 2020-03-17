import React from 'react';
import classes from '../../containers/App.module.css';
import { Spring } from 'react-spring/renderprops';
import InfoBox from '../InfoBox/InfoBox';
import CarouselSlides from '../CarouselSlides/CarouselSlides';

const Modal = (props) => {

    const myStyle = {
        visibility: 'hide'
    }

    if(props.modal.showModal) {
        myStyle.visibility = 'visible';
    }

    //Open URL Page on new tab
    const openURL = (url) => {
        //If url is blank exit.
        if(!url){
            return;
        }

        const win = window.open(url, '_blank');
        if(win != null) {
            win.focus();
        }
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
                        <a id={props.id} onClick={props.clicked} href={window.location.href} className={classes.closeBtn}>X</a>
                        <div className={classes.modalContent}>
                            <CarouselSlides 
                            slides={props.card.images.slides}
                            />
                            <InfoBox 
                            title= {props.card.title}
                            subtitle= {props.card.shortDesc}
                            >
                            {`Description:\n${props.card.longDesc}\n\nTechnology:\n${props.card.techDesc}`}
                            </InfoBox>
                            <div className={classes.modalBtns}>
                                <button onClick={()=>openURL(props.card.links.demoURL)} className={classes.modalBtn}>Demo</button>
                                <button onClick={()=>openURL(props.card.links.websiteURL)} className={classes.modalBtn}>Website</button>
                                <button onClick={()=>openURL(props.card.links.githubURL)} className={classes.modalBtn}>Github</button>
                            </div>  
                        </div>
 
                    </div>
                </div>
            )}
        </Spring>
    );
};

export default Modal;