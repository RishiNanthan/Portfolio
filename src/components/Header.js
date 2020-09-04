import React,{ Component } from 'react';


class Header extends Component{

    constructor(props){
        super();
    }

    render(){
        return (
            <div className="header">
                <li className="left start col-1">
                    <span className="name"> Rishi Nanthan </span>/
                    <span className="role"> SOFTWARE ENGINEERING STUDENT </span>
                </li>
                <div className="right">
                    <li className="selected">
                        ABOUT ME
                    </li>
                    <li>
                        SKILLS
                    </li>
                    <li>
                        PROJECTS
                    </li>
                    <li className="end">
                        CONTACT
                    </li>
                </div>
            </div>
        );
    }
}


export default Header;