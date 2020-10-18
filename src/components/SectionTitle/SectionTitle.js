import React from 'react';
import classes from './SectionTitle.module.css';

const sectionTitle = (props) => {
    return (
    <div>
        <h2 className={classes.SectionTitle}>{props.children}</h2>
    </div>
    );
}

export default sectionTitle;