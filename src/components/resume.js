import React, { Component } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import resumePDF from '../assets/Resume_Peter_he.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ResumePage extends Component {

    state = { windowWidth : window.innerWidth }

    updateWidth = () => {
        this.setState({ windowWidth : window.innerWidth })
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWidth)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth)
    }

    render() {
        let widthValue = Math.floor(this.state.windowWidth / 3 * 2);
        if (widthValue < 800) {
            widthValue = this.state.windowWidth
        }
        
        return(
            <Document file={resumePDF}>
                <Page pageNumber={1} width={widthValue}/>
            </Document>
        )
    }
}

export default ResumePage