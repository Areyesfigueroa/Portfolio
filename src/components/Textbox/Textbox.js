import React from 'react'
import classes from '../../containers/App.module.css';

const textbox = (props) => {
    return (
        <div className={classes.textbox}>
            {props.children}
        </div>
    );
}

export default textbox;