import React from 'react';
import classes from '../../containers/App.module.css';

const InfoBox = (props) => {
    return (
        <div className={classes.infoBox}>
            <h4>{props.title}</h4>
            <h5>{props.subtitle}</h5>
            <hr />
            <p>{props.children}</p>
        </div>
    );
};

export default InfoBox;