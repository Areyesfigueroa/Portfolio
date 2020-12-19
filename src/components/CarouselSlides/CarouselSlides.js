import React, { Component, Fragment } from 'react';
import classes from '../../containers/App.module.css';
import {Carousel} from 'react-bootstrap';

const carouselImgStyles=['d-block', classes.carouselImg]; //w-100

const carouselStyle = {
    width: "100%",
    height: "100%",
    overflow: 'hidden',
    borderBottom: '2px solid #000'
}

class CarouselSlides extends Component {
    render() {
        return (
            <Fragment>
                <Carousel style={carouselStyle} interval={null} touch={true}>
                    {this.props.slides.map((slide) => (
                    <Carousel.Item key={slide.alt}>
                        <div className={classes.carouselImgContainer}>
                            <button className={classes.carouselSlideBtn} onClick={() => this.props.clicked(slide)}></button>
                            <img 
                            className={carouselImgStyles.join(' ')}
                            src={slide.src}
                            alt={slide.alt}
                            />
                        </div>
                    </Carousel.Item>))}
                </Carousel>
            </Fragment>
            );
    }
};

export default CarouselSlides;