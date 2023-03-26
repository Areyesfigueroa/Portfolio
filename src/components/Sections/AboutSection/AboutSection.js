import React from "react";
import SectionWrapper from "../../SectionWrapper/SectionWrapper";
import Textbox from "../../Textbox/Textbox";
import Image from "react-bootstrap/Image";

import aboutIcon from "../../../assets/icons/about-icon.png";

const AboutSection = () => {
  return (
    <SectionWrapper title="About" scrollID={"aboutSection"}>
      <Textbox>
        <p>
          <Image src={aboutIcon} fluid />
        </p>
        <p>
          I am an experienced software developer passionate about creating
          robust and scalable web applications that help solve problems and
          drive business value. My specialty lies in React, with a knowledgeable
          background in creating full-stack web applications. I am known for
          having strong project management skills, a collaborative work ethic,
          and a passion for personal development.
        </p>
        <p>
          I utilize my degree in video game engineering to create web
          applications with user experience as the primary focus. I take pride
          in my charismatic personality, reliable work ethic, and honest
          perspective.
        </p>
        <p>
          Please take a look around my site and explore some of my projects.
          Feel free to reach out to me. I look forward to talking with you.
        </p>
      </Textbox>
    </SectionWrapper>
  );
};

export default AboutSection;
