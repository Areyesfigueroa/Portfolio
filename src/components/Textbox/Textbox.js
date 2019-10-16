import React from 'react'
import classes from '../../containers/App.module.css';

const textbox = (props) => {
    return (
        <div className={classes.textbox}>
            <p>{props.children}</p>
        </div>
    );
}

export default textbox;