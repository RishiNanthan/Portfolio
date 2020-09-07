import React, { Component } from 'react';
import Skill from './Skill';


class SkillSet extends Component{

    constructor(props){
        super(props);
        this.title = props.title;
        this.skills = props.skills;
        this.get_skills= this.get_skills.bind(this);
    }

    get_skills(){
        let skills = this.skills.map((skill, i) => {
            return <Skill key={ skill.name } name={ skill.name } percentage={ skill.percentage } />; 
        });
        return skills;
    }

    render(){
        return (
            <div className="skillset">
                <div className="skillset-title">
                    { this.title }
                    <hr />
                </div>
                <div className="skillset-skills">
                    { this.get_skills() }
                </div>
            </div>
        );
    }
}

export default SkillSet;