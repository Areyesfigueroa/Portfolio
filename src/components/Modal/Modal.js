import React from 'react';
import classes from '../../containers/App.module.css';
import { Spring } from 'react-spring/renderprops';
import {Carousel} from 'react-bootstrap';
import InfoBox from '../InfoBox/InfoBox';

//TODO: Create animation for fadein modal. 

const Modal = (props) => {

    const myStyle = {
        visibility: 'hide',
    }

    if(props.modal.showModal) {
        myStyle.visibility = 'visible';
    }

    const carouselStyle = {
        width: "100%",
        overflow: 'hidden',
        borderBottom: '2px solid #000'
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
                        <div className={classes.modalContent}>
                            <Carousel style={carouselStyle}>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    width='100%'
                                    height='450px'
                                    src={require('../../assets/carousel-imgs/stock_img1.jpg')}
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    width="100%"
                                    height='450px'
                                    src={require('../../assets/carousel-imgs/stock_img2.jpg')}
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    width='100%'
                                    height='450px'
                                    src={require('../../assets/carousel-imgs/stock_img3.jpg')}
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <InfoBox 
                            title= {props.card.title}
                            subtitle= {props.card.tech}
                            >
                            {props.card.longDesc}
                            </InfoBox>                            
                        </div>
                    </div>
                </div>
            )}
        </Spring>
    );
};

export default Modal;