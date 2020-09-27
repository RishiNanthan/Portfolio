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
                    <div className="square"></div><span className="name"> Rishi Nanthan </span>/
                    <span className="role"> SOFTWARE ENGINEERING STUDENT </span>
                </li>
                <div className="right">
                    <li >
                        <Link className={ this.selected === "ABOUT ME" ? "selected": "" } to="/">ABOUT ME</Link>
                    </li>
                    <li  >
                        <Link className={ this.selected === "SKILLS" ? "selected": "" } to="/skills">SKILLS</Link>
                    </li>
                    <li  >
                        <Link className={ this.selected === "PROJECTS" ? "selected": "" } to="projects">PROJECTS</Link>
                    </li>
                    <li >
                        <Link className={ this.selected === "CONTACT" ? "selected end": "end" } to="contact">CONTACT</Link>
                    </li>
                </div>
            </div>
        );
    }
}


export default Header;