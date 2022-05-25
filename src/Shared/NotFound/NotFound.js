import React from 'react';
import notFound from '../../images/not-found.jpg'

const NotFound = () => {
    return (
        <div className='mt-16 font-bold flex justify-center'>
            <div>
                <h1 className='text-center text-2xl text-red-500 mb-5'>404 NOT FOUND</h1>
                <img src={notFound} alt="notfound" />
            </div>
        </div>
    );
};

export default NotFound;