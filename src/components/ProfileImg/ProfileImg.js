import React from 'react';
import Image from 'react-bootstrap/Image';
import classes from './ProfileImg.module.css';
import profileImg from '../../assets/profile-pic.jpeg';

const ProfileImg = (props) => {
    return (
        <div className={classes.ProfileImg}>
            <Image src={profileImg} roundedCircle />
        </div>
    );
};

export default ProfileImg;