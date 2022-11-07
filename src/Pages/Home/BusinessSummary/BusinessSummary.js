import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faChartLine, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const BussinessSummary = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-secondary text-center mt-48 mb-12">Trusted Business</h1>
            <div className='flex justify-around'>
                <div className='text-center'>
                    <span className='text-6xl text-secondary'><FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon></span>
                    <div className='mt-5'>
                        <p className='text-3xl lg:text-6xl font-bold mb-2'>500+</p>
                        <h1 className='font-bold text-secondary'>Customers</h1>
                    </div>
                </div>
                <div className='text-center'>
                    <span className='text-6xl text-secondary'><FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon></span>
                    <div className='mt-5'>
                        <p className='text-3xl lg:text-6xl font-bold mb-2'>100M+</p>
                        <h1 className='font-bold text-secondary'>Anual Revenue</h1>
                    </div>
                </div>
                <div className='text-center'>
                    <span className='text-6xl text-secondary'><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></span>
                    <div className='mt-5'>
                        <p className='text-3xl lg:text-6xl font-bold mb-2'>300+</p>
                        <h1 className='font-bold text-secondary'>Feedback</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BussinessSummary;