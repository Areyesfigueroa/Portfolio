import React from 'react';
import SectionWrapper from '../../SectionWrapper/SectionWrapper';
import PDFViewer from '../../PDFViewer/PDFViewer';
import Button from '../../Button/Button';

import resumeFile from "../../../assets/documents/AlielReyesResume.pdf";

const ResumeSection = () => {

    const downloadResume = () => {
        window.location.replace("https://drive.google.com/uc?export=download&id=1BNyOYh8eFhxuD0V7JeH4_edGI7eX6ZJT");
    }

    return (
        <SectionWrapper title="Resume" scrollID={'resumeSection'}>
          <PDFViewer file={resumeFile} />
          <Button click={downloadResume}>Download Resume</Button>
        </SectionWrapper>
    );
};

export default ResumeSection;