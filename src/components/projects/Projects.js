import React, { Component } from 'react';
import Project from './Project';


const projects = [
    {
        'name': "BlockChain",
        'description': "A Crypto Currency System that would enable secure transactions of money without centralised authorisation",
        'technologies': ['Python', 'Flask', 'MongoDB'],
        'image': "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzlWkdol2hiSxrQ9f2ogM5dY48tg2rj62BQA&usqp=CAU",
        'url': "https://www.github.com/RishiNanthan/BlockChain",
    },
    {
        'name': "BlockChain",
        'description': "A Crypto Currency System that would enable secure transactions of money without centralised authorisation",
        'technologies': ['Python', 'Flask', 'MongoDB'],
        'image': "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSScBQvfDG6yQZwfqtkhBfvMBBWJx9tIhL3BQ&usqp=CAU",
        'url': "https://www.github.com/RishiNanthan/BlockChain",
    },
    {
        'name': "BlockChain",
        'description': "A Crypto Currency System that would enable secure transactions of money without centralised authorisation",
        'technologies': ['Python', 'Flask', 'MongoDB'],
        'image': "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSScBQvfDG6yQZwfqtkhBfvMBBWJx9tIhL3BQ&usqp=CAU",
        'url': "https://www.github.com/RishiNanthan/BlockChain",
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