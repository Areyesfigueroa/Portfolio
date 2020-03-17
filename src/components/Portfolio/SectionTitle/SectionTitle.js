import React from 'react';
import classes from '../../containers/App.module.css';

const sectionTitle = (props) => {
    return (
    <div>
        <h2 className={classes.sectionTitle}>{props.children}</h2>
    </div>
    );
}

export default sectionTitle;