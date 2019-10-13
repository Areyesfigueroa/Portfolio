import React from 'react'

const pageTitle = (props) => {
    return (
        <div className={props.style}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <button>{props.btnText}</button>
        </div>
    );
}

export default pageTitle;