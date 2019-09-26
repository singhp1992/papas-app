import React, { Component } from 'react';
import './comps.css';

class Header extends Component {
    render() {
        return (
            <div>
                <h2 className="welcome">Welcome to Pammi's Corner</h2>
                <ul className="header-right"> 
                    <li>About Me</li>
                </ul>
            </div>
        );
    }
}

export default Header;

// make columns for the header