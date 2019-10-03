import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './comps.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="bottom" className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/shop">Shop</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">About Me</Nav.Link>
                    </Nav.Item>
                </Navbar>
            </div>
        );
    }
}

export default Footer;
