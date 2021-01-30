import React from 'react';
import SectionWrapper from '../../SectionWrapper/SectionWrapper';
import PDFViewer from '../../PDFViewer/PDFViewer';
import Button from '../../Button/Button';

import resumeFile from "../../../assets/documents/AlielReyesResume.pdf";

const ResumeSection = () => {

    const downloadResume = () => {
        window.location.replace("https://docs.google.com/uc?export=download&id=1yikP5s6kbIilKvF7rMLTSJJwSyjTyDAY");
    }

    return (
        <SectionWrapper title="Resume" scrollID={'resumeSection'}>
          <PDFViewer file={resumeFile} />
          <Button click={downloadResume}>Download Resume</Button>
        </SectionWrapper>
    );
};

export default ResumeSection;