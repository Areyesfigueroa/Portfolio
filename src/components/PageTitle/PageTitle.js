import React from 'react';
// import classes from '../../containers/App.module.css';
import classes from './PageTitle.module.css';
import Link from '../Link/Link';

const pageTitle = (props) => {
    return (
        <div className={classes.PageTitle}>
            <div>
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
                <Link link='#projectsSection' variants="button">{props.btnText}</Link>
            </div>
        </div>
    );
}

export default pageTitle;