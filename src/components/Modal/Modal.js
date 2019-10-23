import React from 'react';
import classes from '../../containers/App.module.css';
import { Spring } from 'react-spring/renderprops';

//TODO: Create animation for fadein modal. 

const Modal = (props) => {

    const myStyle = {
        visibility: 'hide',
    }

    if(props.modal.showModal) {
        myStyle.visibility = 'visible';
    }

    return (
        <Spring
        from={{ opacity: props.modal.showModal===true ? 0:1}}
        to={{ opacity: props.modal.showModal===true ? 1:0 }}
        config={{ duration: props.modal.animDuration }}
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