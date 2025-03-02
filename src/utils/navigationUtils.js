import { scroller } from "react-scroll";

export const scrollToSection = (section) => {
  scroller.scrollTo(section, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};
