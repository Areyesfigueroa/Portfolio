import React from 'react';
import classes from '../../containers/App.module.css';

const sectionTitle = (props) => {
    return (
    <div>
        <h1 className={classes.sectionTitle}>{props.children}</h1>
    </div>
    );
}

export default sectionTitle;