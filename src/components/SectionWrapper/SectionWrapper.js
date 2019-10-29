import React from 'react';
import classes from '../../containers/App.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import ScrollableAnchor from 'react-scrollable-anchor'

const sectionWrapper = (props) => {
    return (
        <ScrollableAnchor id={props.scrollID}>
            <section>
                <div className={classes.container}>
                    <SectionTitle>{props.title}</SectionTitle>
                    {props.children}
                </div>
            </section>
        </ScrollableAnchor>
    );
};

export default sectionWrapper;