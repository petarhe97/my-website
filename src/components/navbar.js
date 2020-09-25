import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "../stylesheets/navbar.css"

class NavBar extends Component {

    handleSelect = (eventKey) => {
        this.props.onViewChange(eventKey)
    }

    render() {
        return(
            <Navbar sticky="top" bg="dark" variant="dark">
                <Navbar.Brand href="/">Peter He</Navbar.Brand>
                <Nav fill variant="pills" defaultActiveKey="bios" activeKey={this.props.displayType} className="ml-auto" onSelect={this.handleSelect}>
                        <Nav.Link id="pagelink" eventKey="bios">Bios</Nav.Link>
                        <Nav.Link id="pagelink" eventKey="projects">Projects</Nav.Link>
                        <Nav.Link id="pagelink" eventKey="resume">Resume</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar