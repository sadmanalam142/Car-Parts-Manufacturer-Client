import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Purchase = () => {
    const addressRef = useRef();
    const numberRef = useRef();
    const quantityRef = useRef();
    const { id } = useParams();
    const [user] = useAuthState(auth);

    const {data: items, isLoading, refetch} = useQuery('parts', () => fetch(`https://fast-beyond-75941.herokuapp.com/part/${id}`).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>;
    }

    const handleOrder = event => {
        event.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            address: addressRef.current.value,
            number: numberRef.current.value,
            itemName: items.name,
            quantity: quantityRef.current.value,
            price: quantityRef.current.value * items.price
        };
        fetch('https://fast-beyond-75941.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success('Order Added in Dashboard')
                }
            })

        const quantity = items.availableQuantity - quantityRef.current.value;
        const updatedQuantity = { quantity };
        const url = `https://fast-beyond-75941.herokuapp.com/part/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => refetch())
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
            <div>
                <h1 className='text-center text-secondary text-2xl font-semibold'>Item Details</h1>
                <div className='flex justify-center'>
                    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={items.img} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{items.name}</h2>
                            <p>min order: {items.minOrderQuantity} units</p>
                            <p>availableQuantity: {items.availableQuantity} units</p>
                            <p className='font-bold'>price: ${items.price}</p>
                            <p>{items.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-3/4 mx-auto'>
                <h1 className='text-center text-secondary text-2xl font-semibold'>Place Order</h1>
                <div>
                    <form onSubmit={handleOrder}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input value={user.displayName} disabled type="text" class="input input-bordered font-semibold mb-1" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input value={user.email} disabled type="email" class="input input-bordered font-semibold mb-1" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input ref={addressRef} type="text" placeholder="address" class="input input-bordered font-semibold mb-1" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Number</span>
                            </label>
                            <input ref={numberRef} type="number" placeholder="number" class="input input-bordered font-semibold mb-1" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Item Name</span>
                            </label>
                            <input value={items.name} disabled type="text" class="input input-bordered font-semibold mb-1" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Quantity</span>
                            </label>
                            <input ref={quantityRef} type="number" placeholder="add quantity" class="input input-bordered font-semibold mb-1" required />
                        </div>
                        <div class="form-control mt-6">
                            <input className='btn btn-primary w-2/4 mx-auto' type="submit" value="Order" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;