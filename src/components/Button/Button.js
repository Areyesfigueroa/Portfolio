import React from 'react'

const button = (props)=> {
    return (
        <div>
            <button>{props.children}</button>
        </div>
    );
}

export default button;