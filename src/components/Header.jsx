import React, { Component } from 'react';
import './comps.css';

class Header extends Component {
    render() {
        return (
            <div>
                <ul className="header-right"> 
                    <li className="welcome">Welcome to Pammi's Corner</li>
                    <li>About Me</li>
                </ul>
            </div>
        );
    }
}

export default Header;
