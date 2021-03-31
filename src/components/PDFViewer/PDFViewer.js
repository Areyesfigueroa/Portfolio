import React, { Component } from 'react';
import classes from './PDFViewer.module.css';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PDFViewer extends Component {

    state={
        numPages: 1,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    onNextPage = () => {
       let currPage =  this.state.pageNumber;
       currPage++;

       if(currPage > this.state.numPages) return;
       this.setState({ pageNumber: currPage });
    }

    onPrevPage = () => {
       let currPage = this.state.pageNumber;
       currPage--;

       if(currPage <= 0) return;
       this.setState({ pageNumber: currPage });
    }

    render() {        
        
        const { pageNumber, numPages } = this.state;
        return (
            <div className={classes.PDFViewer}>
                <div className={classes.pagination}>
                    <p>Page {pageNumber} of {numPages}</p>
                    {/* <Button click={this.onPrevPage}>Prev</Button>
                    <Button click={this.onNextPage}>Next</Button> */}
                </div>
                <Document file={this.props.file} onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page 
                    pageNumber={pageNumber}
                    width={900}
                    />
                </Document>
            </div>
        );
    }
};

export default PDFViewer;