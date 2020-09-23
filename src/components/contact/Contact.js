import React, { Component } from 'react';


class Contact extends Component{


    render(){
        return (
            <div className="contact">
                <center><div className="title"><div className="square"></div> Contact </div></center>
                <center>
                    <div className="contact-content">
                        <hr />
                        <div className="name">
                            RISHI NANTHAN
                        </div>
                        <hr />
                        <div className="address">
                            <p>
                                Veyilal House,
                            </p>
                            <p>
                                1<sup>st</sup> street, near Murugan temple,
                            </p>
                            <p>
                                Malayanithan Kudiyirupu, Puthalam
                            </p>
                            <p>
                                Nagercoil - 629002,
                            </p>
                            <p>
                                TamilNadu, India.
                            </p>
                        </div>
                        <hr />
                        <div className="mail">
                            Mail : rishinanthan344@gmail.com
                        </div>
                        <hr />
                        <div className="icons">
                            <a href="/"><i className="fa fa-facebook icon"></i></a>
                            <a href="/"><i className="fa fa-instagram icon"></i></a>
                            <a href="/"><i className="fa fa-linkedin icon"></i></a>
                        </div>
                        <hr />
                    </div>
                </center>
            </div>
        )
    }
}

export default Contact;