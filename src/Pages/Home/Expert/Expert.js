import React from 'react';
import { Card } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const { name, img, education, institute, expertise } = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <Card className="shadow" style={{ height: '480px' }}>
                <div>
                    <Card.Img style={{ height: '250px' }} variant="top" src={img} />
                </div>
                <div>
                    <Card.Body style={{ height: '230px' }} className="fw-bold">
                        <Card.Title className="text-secondary">{name}</Card.Title>
                        <p className="text-success">{education}</p>
                        <p className="text-success"> {expertise}</p>
                        <p className="text-success">{institute}</p>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default Expert;