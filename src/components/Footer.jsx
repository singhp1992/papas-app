import React, { Component } from 'react';
import './comps.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg" fixed="bottom">
                    <Navbar.Brand href="#home">Welcome to Pammi's Corner</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#shop">Shop</Nav.Link>
                            <NavDropdown title="About Me" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Medical Background</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">How I started</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Hobbies</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Footer;
