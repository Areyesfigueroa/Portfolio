import React from "react";
import classes from "../../containers/App.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
// import ScrollableAnchor from "react-scrollable-anchor";
// import { configureAnchors } from "react-scrollable-anchor";

const sectionWrapper = (props) => {
  //   configureAnchors({ offset: -80, scrollDuration: 700 });

  return (
    <div id={props.scrollID}>
      <section>
        <div className={classes.container}>
          <SectionTitle>{props.title}</SectionTitle>
          {props.children}
        </div>
      </section>
    </div>
  );
};

export default sectionWrapper;
