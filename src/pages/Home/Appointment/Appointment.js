import React from 'react';
import './Appointment.css';

//image
import img1 from '../../../images/about/dp1.jpg';
import img2 from '../../../images/about/dp2.jpg';
import img3 from '../../../images/about/dp3.jpg';
import img4 from '../../../images/about/dp4.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Appointment = () => {
    return (
   
         
        <div className="appointment mt-5">            
            <div className="container">
                <div>
                    <h2 className="text-center fw-bold">Welcome to Appointment</h2>
                    <div className="row p-5">
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="demo p-3">
                                <div className="image-cart pt-2">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="info">
                                    <h3>Dr Mahmudur Rocky</h3>
                                    <div>
                                        <button className="btn btn-success px-3 py-2"> Appointment</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="demo p-3">
                                <div className="image-cart pt-2">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="info">
                                    <h3>Dr Kamal Hossain </h3>
                                </div>
                                <button className="btn btn-success px-3 py-2"> Appointment</button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="demo p-3">
                                <div className="image-cart pt-2">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="info">
                                    <h3>Dr MD Shazeeb</h3>
                                </div>
                                <button className="btn btn-success px-3 py-2"> Appointment</button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="demo p-3">
                                <div className="image-cart pt-2">
                                    <img src={img4} alt="" />
                                </div>
                                <div className="info">
                                    <h3>Dr Jahanghir Ahmed</h3>
                                </div>
                                <button className="btn btn-success px-3 py-2"> Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Header></Header>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;