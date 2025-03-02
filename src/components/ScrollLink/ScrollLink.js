import React from "react";
import { Link } from "react-scroll";

const ScrollLink = (props) => {
  return (
    <Link
      className={`${props.classes} ${props.variants}`}
      to={props.to}
      duration={props?.duration || 500}
      smooth
    >
      {props.children}
    </Link>
  );
};

export default ScrollLink;
