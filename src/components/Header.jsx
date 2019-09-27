import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './comps.css';

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
        );
    }
}

export default Header;

// make columns for the header
// grid