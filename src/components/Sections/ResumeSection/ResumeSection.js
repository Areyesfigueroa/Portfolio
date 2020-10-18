import React from 'react';
import SectionWrapper from '../../SectionWrapper/SectionWrapper';
import PDFViewer from '../../PDFViewer/PDFViewer';
import Button from '../../Button/Button';

import resumeFile from "../../../assets/documents/20_06_15_AlielReyes_Resume.pdf";

const ResumeSection = () => {

    const downloadResume = () => {
        window.location.replace("https://drive.google.com/uc?export=download&id=1IbFn6ZGfzEb533h1BQ6B-2upLlh5NQiy");
    }

    return (
        <SectionWrapper title="Resume" scrollID={'resumeSection'}>
          <PDFViewer file={resumeFile} />
          <Button click={downloadResume}>Download Resume</Button>
        </SectionWrapper>
    );
};

export default ResumeSection;