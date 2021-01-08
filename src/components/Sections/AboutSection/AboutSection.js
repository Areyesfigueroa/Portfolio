import React from 'react';
import SectionWrapper from '../../SectionWrapper/SectionWrapper';
import Textbox from '../../Textbox/Textbox';
import Image from 'react-bootstrap/Image';

import aboutIcon from '../../../assets/icons/about-icon.png';

const AboutSection = () => {
    return (
        <SectionWrapper title="About" scrollID={'aboutSection'}>
          <Textbox>
            <p><Image src={aboutIcon} fluid/></p>
            <p>Hello, my name is Aliel Reyes. I am a Software Developer based out of the bay area.</p>
            <p>I consider myself a flexible engineer that loves to explore new technologies. 
            I am currently working for a company creating Javascript tools that 
            facilitate data management.</p>
            <p>Currently, my passion is in creating web applications as a Full Stack Developer.</p>
            <p>Please take a look around my site and explore some of my projects.
              Feel free to reach out to me. I look forward to talking with you.</p>
          </Textbox>
        </SectionWrapper>
    );
};

export default AboutSection;