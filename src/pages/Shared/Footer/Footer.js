import React from 'react';

import './Footer.css'

import footerLogo from '../../../images/logo.jpg';

const Footer = () => {
    return (
        <div className="footer-container text-white mt-5" fixed="bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col">
                        <div className="footer-menu">
                            <div>
                                <h4>Our Services</h4>
                                <ul>
                                    <li><a href="/home" className="menu">Medicine</a></li>
                                    <li><a href="/home" className="menu">Covid Unit</a></li>
                                    <li><a href="/home" className="menu">Surgical Service</a></li>
                                    <li><a href="/home" className="menu">Cardiology</a></li>
                                    <li><a href="/home" className="menu">Orthopedics</a></li>
                                    <li><a href="/home" className="menu">Neurology</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col">
                        <div className="footer-menu">
                            <h4>Contact Us</h4>
                            <div className="contact-info">
                                <h6>Open 24 Hours.</h6>
                                <p><small>We provide full time service our patient</small></p>
                                <p>Phone: +012345657</p>
                                <p>Email: <strong>medicare21@gmail.com</strong></p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 col">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="/home" className="menu">Home</a></li>
                                <li><a href="/home" className="menu">About</a></li>
                                <li><a href="/home" className="menu">Services</a></li>
                                <li><a href="/home" className="menu">Profession</a></li>
                                <li><a href="/home" className="menu">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col">
                        <div className="footer-details mt-5">
                            <div className="footer-logo mb-2">
                                <img src={footerLogo} alt="" />
                            </div>
                            <div>
                                <h2 className="footer-title">MediCare</h2>
                                <p>
                                    “ We offer unique services. Our goal is to offer you what it takes to stay healthy and independent. ”
                                </p>
                            </div>
                            <div>
                                <button className="btn btn-warning px-3 py-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center">Copyright &copy; All Right Reserved, 2021</p>
            </div>
        </div>
    );
};

export default Footer;