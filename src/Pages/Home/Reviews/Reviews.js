import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://car-parts-manufacturer-85r7.onrender.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className="text-4xl font-bold text-secondary text-center my-10">Reviews</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 ml-2'>
                {
                    reviews.map((review, index) => <Review
                    key={index}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;