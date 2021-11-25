import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/1.jpg';
import banner2 from '../../../images/Banner/2.png';
import banner3 from '../../../images/Banner/3.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <div className="container mb-5">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-success">We care for your vision</h3>
                        <p className="text-success">Get rid of heavy eye glasses !! We do Femtosecond Lasik (bladeless) and SMILE.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-success">We Provide you the best service</h3>
                        <p className="text-success">Painless, Stitch less, Scarless Laser procedure to re-establish tear drainage system of eye. This price is for One eye</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-success">We have the best technology</h3>
                        <p className="text-success">We have several packages of Phaco Surgery. Price varies depends on mainly Intra Ocular Lens type.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;