import React from 'react';

const sectionTitle = (props) => {
    return (
    <div>
        <h1 className={props.style}>{props.children}</h1>
    </div>
    );
}

export default sectionTitle;