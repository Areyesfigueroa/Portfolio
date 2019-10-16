import React from 'react';
import classes from '../../containers/App.module.css';

const pageTitle = (props) => {
    return (
        <div className={classes.pageTitle}>
            <div>
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
                <button>{props.btnText}</button>
            </div>
        </div>
    );
}

export default pageTitle;