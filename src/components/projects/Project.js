import React, { Component } from 'react';

export default class Project extends Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.description = props.description;
        this.url = props.url;
        this.technologies = props.technologies;
        this.image = props.image;
    }

    render(){
        return (
            <div className="project" onClick={ () => window.location=this.url }>
                <h3 className="project-title">{ this.name }</h3><hr />
                { this.image && <center><img className="project-image" src={this.image} alt={this.name} /></center> }
                <p className="project-description"> &nbsp; &nbsp;{ this.description }</p>
                <hr />
                <div className="project-technologies">
                    { this.technologies.map((tech, index) => {
                        return <span className="project-technology" key={index}>{ tech }</span>
                    })}
                </div>
            </div>
        );
    }
}