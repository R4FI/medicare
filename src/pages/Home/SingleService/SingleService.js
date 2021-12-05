import React from 'react';
//Link from react router dom
import { Link } from 'react-router-dom';
//import css
import './SingleService.css'

const SingleService = ({ service }) => {
    const { id, name, img, description } = service;
    return (
        <div className="col-lg-4 col-md-4 col-12">
            <div className="service-card">
                <div className="p-3">
                    <div className="service-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="service-info pt-3">
                        <h4><span className="service-title fw-bold">{name}</span></h4>
                        <p><span className="text"><strong>About <small>{name}: </small></strong></span> {description}</p>

                    </div>
                    <Link to={`/sitbooking/${id}`}>
                        <button className="btn px-3 py-2 details">Details</button>
                    </Link>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;