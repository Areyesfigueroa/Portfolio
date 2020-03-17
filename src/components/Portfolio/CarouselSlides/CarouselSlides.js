import React from 'react';
import classes from '../../containers/App.module.css';
import {Carousel} from 'react-bootstrap';

const carouselImgStyles=['d-block', classes.carouselImg]; //w-100

const carouselStyle = {
    width: "100%",
    overflow: 'hidden',
    borderBottom: '2px solid #000'
}

const carouselSlides = (props) => {
    return (
        <Carousel style={carouselStyle} interval={null} touch={true}>
            {props.slides.map((slide) => (
            <Carousel.Item key={slide.alt}>
                <div className={classes.carouselImgContainer}>
                    <img 
                    className={carouselImgStyles.join(' ')}
                    src={slide.src}
                    alt={slide.alt}
                    />
                </div>
            </Carousel.Item>))}
        </Carousel>
        );
};

export default carouselSlides;