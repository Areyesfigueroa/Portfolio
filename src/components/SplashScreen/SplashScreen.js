import React from 'react';
import classes from './SplashScreen.module.css';
import PageTitle from '../PageTitle/PageTitle';
import ProfileImg from '../ProfileImg/ProfileImg';

const SplashScreen = (props) => {
    return (
        <div className={classes.SplashScreen}>
            <PageTitle
            title={props.title}
            subtitle={props.subtitle}
            btnText={props.btnText}
            />
            {/* Profile Img */}
            <ProfileImg />
        </div>
    );
};

export default SplashScreen;