import React,{ Component } from 'react';


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
                        ABOUT ME
                    </li>
                    <li className={ this.selected === "SKILLS" ? "selected": "" } >
                        SKILLS
                    </li>
                    <li className={ this.selected === "PROJECTS" ? "selected": "" } >
                        PROJECTS
                    </li>
                    <li className={ this.selected === "CONTACT" ? "selected end": "end" }>
                        CONTACT
                    </li>
                </div>
            </div>
        );
    }
}


export default Header;