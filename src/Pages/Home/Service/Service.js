import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, img, name, reason, doctor } = service;

    return (
        <div>
            <Col>
                <Card className="shadow" style={{ height: '480px' }}>
                    <div>
                        <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                    </div>
                    <div>
                        <Card.Body style={{ height: '230px' }} className="fw-bold">
                            <Card.Title className="text-secondary">{name}</Card.Title>
                            <p className="text-success">{reason}</p>
                            <p className="text-success">Consultant :{doctor}</p>
                        </Card.Body>
                        <Link to={`/booking/${id}`}>
                            <Button variant="success">More Details</Button>
                        </Link>
                    </div>
                </Card>
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{reason}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Tk {price}</ListGroupItem>
                    </ListGroup>

                </Card> */}
            </Col>
        </div>
    );
};

export default Service;