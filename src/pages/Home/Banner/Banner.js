import React from 'react';
import { Carousel } from 'react-bootstrap';
//image
import slide1 from '../../../images/banner/pexels-karolina-grabowska-4386466.jpg';
import slide2 from '../../../images/banner/pexels-negative-space-48603.jpg';
import slide3 from '../../../images/banner/pexels-pixabay-40568.jpg';
//import css
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel className="carouselBg">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption className="text-black centertext txt">
                <h3>Entrust your health our doctors</h3>
                <p>Medical Services That You Can Trust</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
    />
    <Carousel.Caption className="text-black centertext txt">
             <h3 className="slider-title">Entrust your health our doctors</h3> 
             <p className="slider-text">Be Happy now i so simple.</p>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />
    <Carousel.Caption className="centertext text-black txt">
    <h3 className="slider-title">Entrust your health our doctors</h3>
    <p className="slider-text">Be attentive to your health</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>           
        </div>
    );
};

export default Banner;