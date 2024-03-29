import React, { useEffect, useState } from 'react';
import Part from '../Part/Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('https://car-parts-manufacturer-85r7.onrender.com/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h1 className="text-4xl text-center mt-28 mb-12 font-bold text-secondary">Available Parts</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;