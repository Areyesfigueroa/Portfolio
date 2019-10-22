import React from 'react';
import classes from '../../containers/App.module.css';
import { Spring } from 'react-spring/renderprops';
import { NONAME } from 'dns';

//TODO: Create animation for fadein modal. 

const Modal = (props) => {

    const myStyle = {
        display: 'none'
    } 

    if(props.showModal){
        myStyle.display = 'flex';
    }

    return (
        <Spring
        from={{ opacity: props.showModal===true ? 0:1 }}
        to={{ opacity: props.showModal===true ? 1:0 }}
        config={{ duration: 200 }}
        >
            {style => (
                <div style={{...style, ...myStyle}} className={classes.modalShadow} onClick={props.clicked}>
                    <div className={classes.modal}>
                        {props.title}
                    </div>
                </div>
            )}
        </Spring>
    );
};

export default Modal;