import React from 'react';
import SectionWrapper from '../../SectionWrapper/SectionWrapper';
import PDFViewer from '../../PDFViewer/PDFViewer';
import Button from '../../Button/Button';

import resumeFile from "../../../assets/documents/AlielReyesResume.pdf";

const DOWNLOAD_BASE_URL = "https://docs.google.com/uc?export=download"

const ResumeSection = () => {
    const documentId = "1VnoX2W0pUDSE6Cft32SbXWk5RTkOjhwd"

    const downloadResume = () => {
        if (!window) return
        window.location.replace(`${DOWNLOAD_BASE_URL}&id=${documentId}`);
    }

    return (
        <SectionWrapper title="Resume" scrollID={'resumeSection'}>
          <PDFViewer file={resumeFile} />
          <Button click={downloadResume}>Download Resume</Button>
        </SectionWrapper>
    );
};

export default ResumeSection;