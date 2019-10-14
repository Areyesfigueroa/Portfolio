import React from 'react';
import Button from '../Button/Button';

const pageTitle = (props) => {
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

export default pageTitle;