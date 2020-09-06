import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component{

    constructor(props){
        super(props);
        this.selected = props.selected;
    }

    render(){
        return (
            <div className="header">
                <li className="left start col-1">
                    <span className="name"> Rishi Nanthan </span>/
                    <span className="role"> SOFTWARE ENGINEERING STUDENT </span>
                </li>
                <div className="right">
                    <li className={ this.selected === "ABOUT ME" ? "selected": "" } >
                        <Link to="/">ABOUT ME</Link>
                    </li>
                    <li className={ this.selected === "SKILLS" ? "selected": "" } >
                        <Link to="/skills">SKILLS</Link>
                    </li>
                    <li className={ this.selected === "PROJECTS" ? "selected": "" } >
                        <Link to="projects">PROJECTS</Link>
                    </li>
                    <li className={ this.selected === "CONTACT" ? "selected end": "end" }>
                        <Link to="contact">CONTACT</Link>
                    </li>
                </div>
            </div>
        );
    }
}


export default Header;