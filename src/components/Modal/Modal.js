import React from "react";
import classes from "../../containers/App.module.css";
import { Spring } from "react-spring/renderprops";
import InfoBox from "../InfoBox/InfoBox";
import CarouselSlides from "../CarouselSlides/CarouselSlides";
import DescriptionBox from "../DesciptionBox/DescriptionBox";
import ModalButtons from "../Modal/ModalButtons/ModalButtons";

const Modal = (props) => {
  const myStyle = {
    visibility: "hide",
  };

  if (props.modal.showModal) {
    myStyle.visibility = "visible";
  }

  return (
    <Spring
      from={{ opacity: props.modal.showModal === true ? 0 : 1 }}
      to={{ opacity: props.modal.showModal === true ? 1 : 0 }}
      config={{ duration: props.modal.animDuration }}
    >
      {(style) => (
        <div
          id={props.id}
          style={{ ...style, ...myStyle }}
          className={classes.modalShadow}
          onClick={props.clicked}
        >
          <div className={classes.modal}>
            <a
              id={props.id}
              onClick={props.clicked}
              href={window.location.href}
              className={classes.closeBtn}
            >
              X
            </a>
            <div className={classes.modalContent}>
              <CarouselSlides
                slides={props.card.images.slides}
                clicked={props.enableZoom}
              />
              <InfoBox title={props.card.title} subtitle={props.card.shortDesc}>
                <DescriptionBox
                  company={props.card.company}
                  position={props.card.position}
                  longDesc={props.card.longDesc}
                  techDesc={props.card.techDesc}
                />
              </InfoBox>
              <ModalButtons
                websiteURL={props.card?.links?.websiteURL}
                githubURL={props.card?.links?.githubURL}
              />
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default Modal;
