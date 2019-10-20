import React from 'react';
import classes from '../../containers/App.module.css';

const ShadowBox = (props) => {
    
    const style = {
        display: 'none'
    }
    
    if(props.isActive){
        //display
        style.display = 'block';
    } else {
        //hide
        style.display = 'none';
    }

    return (
        <div style={style} className={classes.shadowBox}></div>
    );
};

export default ShadowBox;