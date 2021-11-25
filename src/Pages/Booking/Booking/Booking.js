import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './Booking.css'

const Booking = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([])
    const [singleService, setSingle] = useState({})
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    useEffect(() => {
        const ser = services.find(service => service.id === +serviceId)
        setSingle(ser);
    }, [services])
    const history = useHistory();
    const handleClick = () => {
        history.push('/Home#services');
    }

    return (
        <div className="container">
            <h2 className="text-success fw-bold">Book your service</h2>
            <img src={singleService?.img} alt="" />
            <h2 className="text-success">{singleService?.name}</h2>
            <h2 className="text-success">Consultant : {singleService?.doctor}</h2>
            <h3 className="text-success">Reason for this disease</h3>
            <p>{singleService?.reason}</p>
            <h3 className="text-success">Recommended Treatment</h3>
            <p>{singleService?.treatment}</p>
            <h3 className="text-success">Surgery Details</h3>
            <p>{singleService?.surgery}</p>
            <button className="btn" onClick={handleClick}>See All services</button>
        </div>
    );
};
export default Booking;