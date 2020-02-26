import React, {useState} from 'react';
import { Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {

    const [numPages, setNumPages] = useState(1);
    const [pageNum, setPageNum] = useState(1);
    const [status, setStatus] = useState("Pending");

    const onDocumentLoadSuccess = (numPages) => {
        setNumPages(numPages);
        setStatus("Success");
    }
    // require("../../assets/documents/AlielReyesResume-2020.pdf")
    // https://drive.google.com/uc?export=view&id=1FzkRnVOwaer8NLJXFFCxQWSBc5_r9A5s
    return (
        <div>
            <p>File Status: {status}</p>
            <Document 
            file={"./AlielReyesResume-2020.pdf"}
            OnLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNum={pageNum} />
            </Document>
            <p>Page {pageNum} of {numPages}</p>
        </div>
    );
};

export default Resume;