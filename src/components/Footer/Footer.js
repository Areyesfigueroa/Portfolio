import React from 'react';
import classes from '../../containers/App.module.css';

const Footer = (props) => {
    return (
        <footer>
            <a href={'#'} 
            className={classes.socialLink}>
                <ion-icon name="mail"></ion-icon>
            </a>
            <a href={'#'} 
            className={classes.socialLink}>
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href={'#'}
            className={classes.socialLink}>
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
        </footer>
    );
};

export default Footer;