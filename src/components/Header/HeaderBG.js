import React from 'react'

const headerBackground = (props) => {
    return (
        <div className={props.style}>
            <img src={props.img} alt="Header Background" />
        </div>
    );
}

export default headerBackground;