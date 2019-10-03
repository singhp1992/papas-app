import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './comps.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg" fixed="bottom">
                    <Navbar.Brand href="#home">Pammi's Corner</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#shop">Shop</Nav.Link>
                            <Nav.Link href="#about">About Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Footer;
