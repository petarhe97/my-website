import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "../stylesheets/navbar.css"
import { NavItem } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return(
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="/bios">Peter He</Navbar.Brand>
                <Nav fill variant="pills" defaultActiveKey="/bios" className="ml-auto">
                        <Nav.Link id="pagelink" href="/bios">Bios</Nav.Link>
                        <Nav.Link id="pagelink" eventKey="projects">Projects</Nav.Link>
                        <Nav.Link id="pagelink" eventKey="resume">Resume</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar