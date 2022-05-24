import React from 'react';

const Part = ({ part }) => {
    const { name, minOrderQuantity, availableQuantity, price, description, img } = part;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>min order: {minOrderQuantity} units</p>
                <p>availableQuantity: {availableQuantity} units</p>
                <p className='font-bold'>price: ${price}</p>
                <p>{description}</p>
                <div class="card-actions">
                    <button class=" btn bg-gradient-to-r from-secondary to-primary ">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;