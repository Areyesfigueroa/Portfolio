import React from "react";
// import ScrollableAnchor from "react-scrollable-anchor";
import { Element } from "react-scroll";
import { Waypoint } from "react-waypoint";
import SplashScreen from "../SplashScreen/SplashScreen";
import Navbar from "../Navbar/Navbar";
import alielLogo from "../../assets/aliel-logo.png";

const Header = (props) => {
  return (
    <Element name="header">
      <div>
        <Waypoint
          onEnter={() => props.showScrollBtn(false)}
          onLeave={() => props.showScrollBtn(true)}
          topOffset={"115px"}
        >
          <div>
            <Navbar img={alielLogo} />
            <SplashScreen
              title="Aliel Reyes"
              subtitle="Full Stack Developer"
              btnText="See Portfolio"
            />
          </div>
        </Waypoint>
      </div>
    </Element>
  );
};

export default Header;
