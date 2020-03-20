import React from 'react';
import classes from '../../../containers/App.module.css';
import { Spring } from 'react-spring/renderprops';

const ProjectCardText = (props) => {

    return (
        <Spring
        from={{opacity: props.isActive===true ? 0:1}}
        to={{opacity: props.isActive===true ? 1:0}}
        >
            {style => (
                <div style={style} className={classes.projectCardText}>
                    <p>{props.description}</p>
                    <a onClick={props.clicked} href={window.location.href}>See more</a>
                </div>
            )}
        </Spring>
    );
};

export default ProjectCardText;