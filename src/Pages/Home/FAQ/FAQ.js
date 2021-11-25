import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div id="FAQ">
            <section className="container py-3 my-5">
                <h1 className="fw-bold py-5">Frequently asked questions</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> How Often should I need to test my eyes?</Accordion.Header>
                        <Accordion.Body>
                            As per the American Optometric Association adults who wear glasses or contact lenses and adults who are over 60 years should visit their eye care specialist every year or as suggested by the doctor.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header> Do I need surgery for Cataract? How would I know that?</Accordion.Header>
                        <Accordion.Body>
                            Yes, you need to undergo surgery for removing the cataract from your eye. You have to consult an eye doctor first. He or she will conduct various tests, review your complete medical history for determining whether you need a vision correctional surgery or not.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header> My eyes are fine, then why do I need to visit the doctor regularly?</Accordion.Header>
                        <Accordion.Body>
                            This is because through regular and thorough examination the doctor can diagnose silent diseases such as glaucoma, diabetic retinopathy, and other eye conditions in its early stage. These conditions do not have any initial symptoms and are impossible to diagnose without thorough check up.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </div>
    );
};

export default FAQ;