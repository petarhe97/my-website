import React, { Component } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import resumePDF from '../assets/Resume_Peter_he.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ResumePage extends Component {

    render() {
        return(
            <Document file={resumePDF} renderMode="svg">
                <Page pageNumber={1} />
            </Document>
        )
    }
}

export default ResumePage