import React, { Component } from 'react';
import classes from "../../containers/App.module.css";
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PDFViewer extends Component {

    state={
        numPages: 2,
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
            <div className={classes.pdfWrapper}>
                <div className={classes.pagination}>
                    <p>Page {pageNumber} of {numPages}</p>
                    <button className={classes.button} onClick={this.onPrevPage}>Prev</button>
                    <button className={classes.button} onClick={this.onNextPage}>Next</button>
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