import React from 'react';
import Blogs from '../../Blogs/Blogs';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
//


const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Blogs></Blogs>
            <Footer></Footer>  
        </div>
    );
};

export default Home;