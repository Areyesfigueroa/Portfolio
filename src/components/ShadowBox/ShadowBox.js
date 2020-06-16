import React from 'react';
import classes from '../../containers/App.module.css';
import {Spring} from 'react-spring/renderprops'


const ShadowBox = (props) => {

    return (

        <Spring
        from={{opacity: props.isActive===true ? 0:1}}
        to={{opacity: props.isActive===true ? 1:0}}
        config={{ duration: 300 }}
        >
        {props => (
            <div style={props} className={classes.shadowBox}></div>
        )}
        </Spring>

    );
};

export default ShadowBox;