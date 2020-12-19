import React from 'react';
import classes from './InfoBox.module.css';

const InfoBox = (props) => {
    return (
        <div className={classes.InfoBox}>
            <h4>{props.title}</h4>
            <h5>{props.subtitle}</h5>
            <hr />
            <div className={classes.textArea}>
                {props.children}
            </div>
        </div>
    );
};

export default InfoBox;