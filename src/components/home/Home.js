import React, { Component } from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

import profile_pic from './assets/profile.jpeg'



class Home extends Component{
    render(){
        return (
            <div className="home">
                <div className="home-row-1">
                    <div className="home-col-1">
                        
                    </div>
                    <div className="home-col-2">
                        <div className="content">
                            <div className="start">
                                Hi,
                            </div>
                            <div className="intro">
                                I'm Rishi Nanthan, Software Engineering Student.
                            </div>
                            <div className="buttons">
                            <Link to="/skills"><button className="button">SKILLS</button></Link>
                            <Link to="/projects"><button className="button">PROJECTS</button></Link>
                            </div>
                            <div className="content-body">
                                &nbsp;&nbsp;&nbsp;&nbsp;I'm pursuing final year of Bachelor's degree in Computer Science and
                                Engineering at Institute of Road and Transport Technology, TamilNadu.
                                I'm a passionate programmer and a continuous learner of new modern 
                                technologies and frameworks. I have broad understanding on topics like Blockchain,
                                Machine Learning, Deep Learning, Web Application Development, Mobile Application Development 
                                and deep understanding on computer science fundamentals.
                            </div>
                            <div className="tail">
                                &nbsp;&nbsp;&nbsp;&nbsp;Feel free to contact me for working on your projects, freelancing or 
                                any queries. I would love to work with any passionate minds.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-col-3">
                    <center><img src={profile_pic} alt="Profile"/></center>
                    <div className="name">
                        Rishi
                    </div>
                    <div className="name">
                        Nanthan
                    </div>
                    <center>
                        <div className="line">
                        </div>
                    </center>
                    <div className="designation">SOFTWARE ENGINEERING STUDENT</div>
                    <div className="icons">
                        <a href="https://www.facebook.com/rishi.nanthan.7"><i className="fa fa-facebook icon"></i></a>
                        <a href="https://www.instagram.com/rishi_nanthan_/"><i className="fa fa-instagram icon"></i></a>
                        <a href="https://www.linkedin.com/in/rishi-nanthan-66402617b/"><i className="fa fa-linkedin icon"></i></a>
                    </div>
                </div>
                <div className="home-row-2">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;