import classes from './DescriptionBox.module.css';
import React from 'react';

const DescriptionBox = (props) => {
    return (
        <div className={classes.DescriptionBox}>
            <strong>Description:</strong>
            <br />
            {props.longDesc}
            <br/><br/>
            <strong>Tech Stack</strong>
            <br />
            <ul>
                {props.techDesc.map((el, idx) => <li key={`${idx}-${el}`}>{`- ${el}`}</li>)}
            </ul>
        </div>
    );
};

export default DescriptionBox;