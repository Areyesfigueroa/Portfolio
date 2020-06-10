import React from 'react';
import classes from '../../containers/App.module.css';

const MagnifyImg = (props) => {
    return (
        <div className={`${classes.magnifyImg} ${classes.shadowBox}`} onClick={props.clicked}>
            <img src={props.src} alt={props.alt} />
        </div>
    );
};

export default MagnifyImg;