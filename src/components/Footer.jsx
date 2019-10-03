import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './comps.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" fixed="bottom" className="justify-content-center">
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/shop">Shop</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/about">About Me</Nav.Link>
                    </Nav>
                    <Nav> 
                        &copy; Copyright 2019
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Footer;
