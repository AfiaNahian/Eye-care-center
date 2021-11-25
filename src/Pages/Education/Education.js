import React from 'react';
import { Accordion } from 'react-bootstrap';

const Education = () => {
    return (
        <div>
            <h1>FellowShip and Further Degrees</h1>
            <section className="container py-3 mb-5">
                <h1 className="fw-bold py-5">We need more doctors to serve</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Comprehensive Ophthalmology fellowship</Accordion.Header>
                        <Accordion.Body>
                            <h4>Diagnostic facilities:</h4>
                            <h4>The diagnostic evaluations we perform include:</h4>
                            <ul>
                                <li>Mastering the skills of using slit lamp biomicroscopy </li>
                                <li>Interpretation of ultrasonography (USG)</li>
                                <li>Diagnosis of glaucoma under supervision</li>
                                <li>Diagnosis of uveitis under supervision of uvea specialist.</li>
                                <li>Diagnosis of ocular surface disorders under supervisio</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Cornea and Anterior Segment Fellowship</Accordion.Header>
                        <Accordion.Body>
                            <h4>Diagnostic facilities:</h4>
                            <h4>The diagnostic evaluations we perform include:</h4>
                            <ul>
                                <li>Visual acuity</li>
                                <li>Refraction</li>
                                <li>Slit-lamp evaluation</li>
                                <li>keratometry</li>
                                <li>A-B scan ultrasonography</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Glaucoma Cataract Fellowship</Accordion.Header>
                        <Accordion.Body>
                            <h4>Diagnostic facilities:</h4>
                            <h4>The diagnostic evaluations we perform include:</h4>
                            <ul>
                                <li>Applanation tonometry and Optic nerve analyzer (HRT)</li>
                                <li>Optic nerve photography</li>
                                <li>Gonioscopy</li>
                                <li>Visual field test with Humphrey visual field analyzer</li>
                                <li>Central Corneal Thickness (CCT)</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Clinical Cataract Fellowship</Accordion.Header>
                        <Accordion.Body>
                            <h4>Diagnostic facilities:</h4>
                            <h4>The diagnostic evaluations we perform include:</h4>
                            <ul>
                                <li>Slit-lamp evaluation</li>
                                <li>Confocal microscopy and Pachymetry</li>
                                <li>Corneal Topography (Topolyzer)</li>
                                <li>Analyzer for spherical aberration</li>
                                <li>Specular microscopy</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </div>
    );
};

export default Education;