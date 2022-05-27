import React, { useRef } from 'react';

const AddAReview = () => {
    const ratingsRef = useRef();
    const descriptionRef = useRef();


    const handleRatings = event => {
        event.preventDefault();

        const rating = {
            ratings: ratingsRef.current.value,
            description: descriptionRef.current.value
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rating)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='w-2/4 mx-auto mt-5'>
            <form onSubmit={handleRatings}>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Ratings</span>
                    </label>
                    <input ref={ratingsRef} type="number" placeholder="Ratings" class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <textarea ref={descriptionRef} name="" id="" cols="30" rows="10" placeholder='description'></textarea>
                </div>
                <div class="form-control mt-6">
                    <input className='btn btn-primary w-2/4 mx-auto' type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddAReview;