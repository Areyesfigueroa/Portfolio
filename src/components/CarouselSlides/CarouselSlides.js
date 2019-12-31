import React from 'react';
import classes from '../../containers/App.module.css';
import {Carousel} from 'react-bootstrap';

const carouselImgStyles=['d-block', 'w-100', classes.carouselImg];

const carouselStyle = {
    width: "100%",
    overflow: 'hidden',
    borderBottom: '2px solid #000'
}

const carouselSlides = (props) => {
    return (
        <Carousel style={carouselStyle}>
            {props.slides.map((slide) => (
            <Carousel.Item key={slide.alt}>
                <img 
                className={carouselImgStyles.join(' ')}
                src={slide.src}
                alt={slide.alt}
                />
            </Carousel.Item>))}
        </Carousel>
        );
};

export default carouselSlides;