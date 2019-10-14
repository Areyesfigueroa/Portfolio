import React from 'react'

const textbox = (props) => {
    return (
        <div className={props.style}>
            <p>{props.children}</p>
        </div>
    );
}

export default textbox;