import React, { Component } from 'react';
import './comps.css';

class Header extends Component {
    render() {
        return (
            <div>
                <h2 className="welcome">Welcome to Pammi's Corner</h2>
                <h5>About Me</h5>
            </div>
        );
    }
}

export default Header;
