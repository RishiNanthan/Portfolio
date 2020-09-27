import React, { Component } from 'react';
import Project from './Project';


const projects = [
    {
        name: "BlockChain",
        description: "A Crypto Currency System that would enable secure transactions of money without centralised authorisation.",
        technologies: ['Python', 'MongoDB'],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzlWkdol2hiSxrQ9f2ogM5dY48tg2rj62BQA&usqp=CAU",
        url: "https://www.github.com/RishiNanthan/BlockChain",
    },
    {
        name: "Portfolio",
        description: "A Personal Portfolio application  that would display introduction about my career moves.",
        technologies: ['JavaScript', 'React JS', 'CSS'],
        image: "https://github.com/RishiNanthan/Portfolio/blob/master/portfolio.jpg?raw=true",
        url: "https://github.com/RishiNanthan/Portfolio",
    },
    {
        name: "IRTT",
        description: "A Mobile application developed in purpose to help my collegues get regular updates on college related activities.",
        technologies: ['Flutter', 'Dart', 'Firebase - Cloud Firestore'],
        image: "https://github.com/RishiNanthan/IRTT/blob/master/irtt.jpg?raw=true",
        url: "https://github.com/RishiNanthan/IRTT",
    },
    {
        name: "Home Work Writer",
        description: "An application that would help me write my college online assignments in my handwriting.",
        technologies: ['Python', 'OpenCV', 'NumPy'],
        image: "https://github.com/RishiNanthan/Home-Work-Writer/raw/master/0.jpg?raw=true",
        url: "https://github.com/RishiNanthan/Home-Work-Writer",
    },
    {
        name: "Border Security System",
        description: "A Deep Learning based application that would find intruders in crowded gateways based on face recognition",
        technologies: ['Python', 'OpenCV', 'Keras'],
        image: "https://github.com/RishiNanthan/Border_Security_System/blob/master/border.jpg?raw=true",
        url: "https://github.com/RishiNanthan/Border_Security_System",
    },
    {
        name: "Exam Registration",
        description: "A web application that would help students register to exams online and download their hall tickets.",
        technologies: ['Python', 'Flask', 'SQL', 'CSS', 'HTML', 'BOOTSTRAP'],
        image: "https://github.com/RishiNanthan/Exam-Registration/blob/master/static/images/images.jpg?raw=true",
        url: "https://github.com/RishiNanthan/Exam-Registration",
    },
    {
        name: "TypeWriter",
        description: "An application developed for myself to practice touch typing",
        technologies: ['JavaScript', 'React JS', 'CSS'],
        image: "https://github.com/RishiNanthan/TypeWriter/blob/master/typewriter.jpg?raw=true",
        url: "https://github.com/RishiNanthan/TypeWriter",
    },
    {
        name: "Quiz",
        description: "A desktop application created for women's day celebration quiz competition conducted in our college.",
        technologies: ['Python', 'OpenCV'],
        image: "https://github.com/RishiNanthan/Quiz/raw/master/quiz%20output.png?raw=true",
        url: "https://github.com/RishiNanthan/Quiz",
    },
];

class Projects extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    create_project(project){
        return <Project name={project.name} description={project.description} technologies={project.technologies}
                image={project.image} url={project.url} key={project.name} />;
    }

    render(){
        return (
            <div className="projects">
                <center><div className="title"><div className="square"></div> Projects </div></center><hr />
                <div className="projects-grid">
                    {
                        projects.map((project) => {
                            return this.create_project(project);
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Projects;