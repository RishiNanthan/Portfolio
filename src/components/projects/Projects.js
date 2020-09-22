import React, { Component } from 'react';


class Projects extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return (
            <div className="projects">
                <center><div><div className="square"></div> Projects</div></center>
            </div>
        );
    }
}

export default Projects;