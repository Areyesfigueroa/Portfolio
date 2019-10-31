import React from 'react';
import classes from '../../containers/App.module.css';

const Footer = (props) => {
    return (
        <footer>
            <a href={'#'}>
                <img 
                src={require('../../assets/social-media/email-logo.png')} 
                alt={'Email logo'}
                className={classes.socialLink}/>
            </a>
            <a href={'#'}>
                <img 
                src={require('../../assets/social-media/github-logo.png')} 
                alt={'Github logo'}
                className={classes.socialLink}/>
            </a>
            <a href={'#'}>
                <img 
                src={require('../../assets/social-media/linkedin-logo.png')} 
                alt={'Linkedin logo'}
                className={classes.socialLink}/>
            </a>
        </footer>
    );
};

export default Footer;