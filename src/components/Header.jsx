import React, { Component } from 'react';
import './comps.css';

class Header extends Component {
    render() {
        return (
            <div>
                <h2 className="welcome">Welcome to Pammi's Corner</h2>
                <ul className="header-right"> 
                    <li className="welcome">Welcome to Pammi's Corner</li>
                    <li>About Me</li>
                </ul>
            </div>
        );
    }
}

export default Header;
