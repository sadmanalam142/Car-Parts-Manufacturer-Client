import React from 'react';

const Review = ({ review }) => {
    const { ratings, description } = review;
    return (
        <div>
            <div className='flex items-center justify-center'>
                <p className='text-2xl font-semibold mr-2'>{ratings}</p>
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-secondary" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-secondary" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-secondary" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-secondary" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-secondary" />
                </div>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default Review;