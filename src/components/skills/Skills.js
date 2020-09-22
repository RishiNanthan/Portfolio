import React, { Component } from 'react';
import SkillSet from './SkillSet';


class Skillset{
    constructor(title, skills){
        this.title = title;
        this.skills = skills;
    }
}


var skillsets = [
                               // Domains
    new Skillset("Domain Knowledge", [
        {
            name: "Web Appliation Development",
            percentage: 90,
        },
        {
            name: "BlockChain Development",
            percentage: 80,
        },
        {
            name: "Deep Learning",
            percentage: 70,
        },
        {
            name: "Mobile Application Development",
            percentage: 60,
        },
    ]),

    new Skillset("Technologies and Frameworks", [
        {
            name: "React JS",
            percentage: 70,
        },
        {
            name: "Flask-Python",
            percentage: 80,
        },
        {
            name: "Flutter-Dart",
            percentage: 60,
        },
        {
            name: "Django",
            percentage: 60,
        },
        {
            name: "Express JS",
            percentage: 60,
        },
    ]),

    new Skillset("Programming Languages", [
        {
            name: "Python",
            percentage: 95,
        },
        {
            name: "JavaScript",
            percentage: 85,
        },
        {
            name: "Java",
            percentage: 80,
        },
        {
            name: "C++ / C",
            percentage: 70,
        },
        {
            name: "Dart",
            percentage: 65,
        },
        {
            name: "Kotlin",
            percentage: 60,
        },
        {
            name: "SQL",
            percentage: 75,
        },
        {
            name: "HTML",
            percentage: 90,
        },
        {
            name: "CSS",
            percentage: 70,
        },
    ]),

    new Skillset("Operating Systems", [
        {
            name: "Windows 7, 8, 10",
            percentage: 85,
        },
        {
            name: "Linux / Unix",
            percentage: 60,
        }
    ])
];



class Skills extends Component{

    constructor(props){
        super(props);
        
        this.get_skillsets = this.get_skillsets.bind(this);
    }

    get_skillsets(){
        let arr = skillsets.map((skillset, i) => {
            return <SkillSet key={ skillset.title } title={ skillset.title } skills={ skillset.skills } />;
        });
        return arr;
    }

    render(){
        return (
            <div className="skills">
                <div className="title">
                    <center><div className="square"></div>&nbsp;Skills</center>
                </div>
                <div className="skillsets">
                    { this.get_skillsets() }
                </div>
            </div>
        );
    }
}

export default Skills;
