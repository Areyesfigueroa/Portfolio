import React from 'react';
import classes from '../../containers/App.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const sectionWrapper = (props) => {
    return (
        <section>
            <div className={classes.container}>
                <SectionTitle>{props.title}</SectionTitle>
                {props.children}
            </div>
        </section>
    );
};

export default sectionWrapper;