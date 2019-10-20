import React from 'react';
import classes from '../../containers/App.module.css';

const ProjectCardText = (props) => {
    
    const style = {
        display: 'none'
    }
    
    if(props.isActive){
        //display
        style.display = 'grid';
    } else {
        //hide
        style.display = 'none';
    }

    return (
        <div style={style} className={classes.projectCardText}>
            <p>{props.description}</p>
            <a href="www.google.com">See more</a>
        </div>
    );
};

export default ProjectCardText;