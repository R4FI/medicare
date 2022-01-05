import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Sanitizer.css';
import single from "../../images/banner/single02.png";
import handwash from "../../images/banner/hand wash.png";
import handrub from "../../images/banner/hand rub.png";
import surfacedry from "../../images/banner/surface dry.png";
const Sanitizer = () => {
    return (
        <div >
           <Container className="mt-5 p-5">
           <h1 className="sanitizefont text-center">Use Sanitizer</h1>
            <div className="mt-5">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={6} xs={12}>
                        <img src={single} alt="" className="img-fluid"/>
                    </Col>


                    <Col md={6} xs={12} className="m-auto">
                       <div className="process">
                        <img src={handwash} alt=""   className="imghand"/>
                        <h5>Apply Alcohol Spray</h5>
                        <p>Sed perspiciatis unde omnis iste natuerror sit voluptatem accusantiu oloremque laudan tium 
                        totam rem aperiam wayse</p>
                        <img src={handrub} alt=""    className="imghand mt-2" />
                        <h5>Rub Hands Together</h5>
                        <p>Sed perspiciatis unde omnis iste natuerror sit voluptatem accusantiu oloremque laudan tium 
                        totam rem aperiam wayse</p>
                        <img src={surfacedry} alt="" className="imghand mt-2" /> 
                        <h5>Surface Unity Dry</h5>
                        <p>Sed perspiciatis unde omnis iste natuerror sit voluptatem accusantiu oloremque laudan tium 
                        totam rem aperiam wayse</p>
                       </div>
                    </Col>

                </Row>
                
            </div>
           </Container>
        </div>
    );
};

export default Sanitizer;