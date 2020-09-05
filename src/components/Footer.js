import React, { Component } from 'react';


class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <li className="footer-content">
                    Made by Rishi Nanthan using React JS
                </li>
                <div>
                    <li className="links">Contact</li>
                    <li className="links">Projects</li>
                    <li className="links">Skills</li>
                    <li className="links">About Me</li>
                </div>
            </div>
        );
    }
}

export default Footer;