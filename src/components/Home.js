import React, { Component } from 'react';
import profile_pic from '../assets/profile.jpeg'


class Home extends Component{
    render(){
        return (
            <div className="home">
                <div className="home-col-1">

                </div>
                <div className="home-col-2">
                    
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

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;