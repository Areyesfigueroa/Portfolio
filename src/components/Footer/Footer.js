import React from 'react';
import classes from '../../containers/App.module.css';

const Footer = () => {
    return (
        <footer>
            <a href={'mailto:alielreyes@gmail.com'} 
            target={'_blank'}
            className={classes.socialLink}>
                <ion-icon name="mail"></ion-icon>
            </a>
            <a href={'https://github.com/Areyesfigueroa'} 
            target={'_blank'}
            className={classes.socialLink}>
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href={'https://www.linkedin.com/in/aliel-reyes-7a216ab5/'}
            target={'_blank'}
            className={classes.socialLink}>
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
        </footer>
    );
};

export default Footer;