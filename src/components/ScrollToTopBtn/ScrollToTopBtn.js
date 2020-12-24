import React from 'react';
import classes from './ScrollToTopBtn.module.css';
import Link from '../Link/Link';

const ScrollToTopBtn = (props) => {
    //Set the Fade In/Out Classes for toggling
    const fadeClass = props.show ? classes.fadeIn : classes.fadeOut;

    const scrollToTopBtnClasses = [classes.scrollToTopBtn, fadeClass];

    return (
        <Link classes={scrollToTopBtnClasses.join(" ")} link={"#header"}>
            <ion-icon name="ios-arrow-up"></ion-icon>
        </Link>
    );
};

export default ScrollToTopBtn;