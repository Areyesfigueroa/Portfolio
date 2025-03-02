import React from "react";
import classes from "./PageTitle.module.css";
import ScrollLink from "../ScrollLink/ScrollLink";

const pageTitle = ({ title, subtitle, scrollToSectionName, btnText }) => {
  return (
    <div className={classes.PageTitle}>
      <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <ScrollLink to={scrollToSectionName} variants="button">
          {btnText}
        </ScrollLink>
      </div>
    </div>
  );
};

export default pageTitle;
