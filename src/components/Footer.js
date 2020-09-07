import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <li className="footer-content">
                    Made by Rishi Nanthan using React JS
                </li>
                <div className="footer-links">
                    <Link to="/" className="link" > About Me </Link>
                    <Link to="/skills" className="link" > Skills </Link>
                    <Link to="/projects" className="link" > Projects </Link>
                    <Link to="/contact" className="link" > Contact </Link>
                </div>
            </div>
        );
    }
}

export default Footer;