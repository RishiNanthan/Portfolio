import React, { Component } from 'react';


class Contact extends Component{


    render(){
        return (
            <div className="contact">
                <center><div className="title"><div className="square"></div> Contact </div></center>
                <center>
                    <div className="contact-content">
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
                            <a href="mailto:rishinanthan344@gmail.com">Mail : rishinanthan344@gmail.com</a>
                        </div>
                        <hr />
                        <div className="icons">
                            <a href="https://www.facebook.com/rishi.nanthan.7"><i className="fa fa-facebook icon"></i></a>
                            <a href="https://www.instagram.com/rishi_nanthan_/"><i className="fa fa-instagram icon"></i></a>
                            <a href="https://www.linkedin.com/in/rishi-nanthan-66402617b/"><i className="fa fa-linkedin icon"></i></a>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}

export default Contact;