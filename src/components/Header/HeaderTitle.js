import React from 'react'

const headerTitle = (props) => {
    return (
        <div className={props.style}>
            <div>

            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <button>{props.btnText}</button>
            </div>
        </div>
    );
}

export default headerTitle;