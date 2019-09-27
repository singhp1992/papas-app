import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './comps.css';

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Welcome to Pammi's Corner</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
        );
    }
}

export default Header;
