import React from 'react';

import img5 from '../../images/about/slider.jpg';

import './About.css'
import { Link } from 'react-router-dom';
import Home from '../Home/Home/Home';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
           <Header></Header>
            <div className="about-container">
                <div className="container">
                    <div className="row  d-flex align-items-center about">
                        <div className="col-lg-5 col-md-5 col-sm-6">
                            {/* about details  */}
                            <div className="about-info">
                                <h2 className="animate__animated animate__heartBeat fw-bold">Medical Services That You Can Trust.</h2>
                                <p>We offer unique services. Our goal is to offer you what it takes to stay healthy and independent.</p>
                                <div>
                                    <Link to="/appointment">
                                        <button className="btn read-btn px-3 py-2 shadow-sm">Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-6">
                            <div className="about-img">
                                <img src={img5} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* patient review  */}
                    <div className="row p-5 mt-5">
                        <div className="text-center pb-3">
                            <div className="services-title">
                                <h2>Patient Review</h2>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="patient-review">
                                <div className="patient-text">
                                    <h2 className="text-center">Rahman</h2>
                                    <p>I was Welcomed with friendly staff and they were very helpful. The wait was over 1 hr, but three days later I am feeling better. Thank my doctor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="patient-review">
                                <div className="patient-text">
                                    <h2 className="text-center">Milad</h2>
                                    <p>I received very good care, and the doctor took time to explain the medications he was prescribing and why.I am also thankful.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="patient-review">
                                <div className="patient-text">
                                    <h2 className="text-center">Shajed</h2>
                                    <p>I was Welcomed with friendly staff and they were very helpful. The wait was over 1 hr, but three days later I am feeling better. Thank my doctor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="patient-review">
                                <div className="patient-text">
                                    <h2 className="text-center">Kabir</h2>
                                    <p>I received very good care, and the doctor took time to explain the medications he was prescribing and why.I am also thankful.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;