import React from 'react';
import classes from "../../containers/App.module.css";
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = (props) => {

    const pageNum = 1;

    return (
        <div className={classes.resumeContainer}>
            <Document file={props.file}>
                <Page 
                pageNumber={pageNum}
                height={props.height}
                />
            </Document>
        </div>
    );
};

export default PDFViewer;