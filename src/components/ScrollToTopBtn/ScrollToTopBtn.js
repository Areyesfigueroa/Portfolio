import React from "react";
import classes from "./ScrollToTopBtn.module.css";
import ScrollLink from "../ScrollLink/ScrollLink";

const ScrollToTopBtn = (props) => {
  //Set the Fade In/Out Classes for toggling
  const fadeClass = props.show ? classes.fadeIn : classes.fadeOut;

  const scrollToTopBtnClasses = [classes.scrollToTopBtn, fadeClass];

  return (
    <ScrollLink classes={scrollToTopBtnClasses.join(" ")} to="header">
      <ion-icon name="ios-arrow-up"></ion-icon>
    </ScrollLink>
  );
};

export default ScrollToTopBtn;
