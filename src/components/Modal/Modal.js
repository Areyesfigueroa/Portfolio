import React from 'react';
import classes from '../../containers/App.module.css';
import { Spring } from 'react-spring/renderprops';
import {Carousel} from 'react-bootstrap';

//TODO: Create animation for fadein modal. 

const Modal = (props) => {

    const myStyle = {
        visibility: 'hide',
    }

    if(props.modal.showModal) {
        myStyle.visibility = 'visible';
    }

    const carouselStyle = {
        position: 'absolute',
        width: "100%",
        height: 'auto'
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
                        {props.title}
                        <Carousel style={carouselStyle}>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={require('../../assets/carousel-imgs/stock_img1.jpg')}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={require('../../assets/carousel-imgs/stock_img2.jpg')}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={require('../../assets/carousel-imgs/stock_img3.jpg')}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            )}
        </Spring>
    );
};

export default Modal;