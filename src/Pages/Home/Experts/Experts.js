import React from 'react';
import ex1 from '../../../images/expert/1.png'
import ex2 from '../../../images/expert/2.jpg'
import ex3 from '../../../images/expert/3.png'
import ex4 from '../../../images/expert/4.png'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: ex1,
        name: 'Dr. M. Zahirul Islam',
        education: 'MBBS, MS, (Eye), ICO (UK)',
        expertise: 'Lasic Specialist',
        institute: 'National Institute of Ophthalmology & Hospital'
    },
    {
        img: ex2,
        name: 'Dr. Siddiqur Rahman',
        education: 'MBBS, D-Ophth, FCPS (Eye)',
        expertise: 'Glaucoma Specialist',
        institute: 'Fellow Refractive & LASIK Surgery(Japan)'
    },
    {
        img: ex3,
        name: 'Dr. Md. Masudul Hasan',
        education: 'MBBS, FCPS, D-Opth, MCPS (Eye)',
        expertise: 'Fellowship in Cornea & Anterior Segment',
        institute: 'National Institute of Ophthalmology & Hospital'
    },
    {
        img: ex4,
        name: 'Dr. Md. Hasanuzzaman',
        education: 'MBBS. MCPS. FCPS (Eye)',
        expertise: 'Fellow orbit & Oculoplasty (NIO&H)',
        institute: 'Mugda Medical College, Dhaka'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="fw-bold text-primary my-5">Our Consultants</h2>
            <div className="row g-4">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >
                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;