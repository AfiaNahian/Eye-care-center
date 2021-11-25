import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import FAQ from '../FAQ/FAQ';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;