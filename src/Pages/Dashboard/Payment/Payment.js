import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4ADvA2LqtSlNUd1jVzE0VW2RPnzQCzOqdnPyaLLEwv3ObaJi8Vrp3rHRLYloMUGpDx18u1cVzygxHnjGOQokDS00r882WXDV');

const Payment = () => {
    const { id } = useParams();

    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(`https://car-parts-manufacturer-85r7.onrender.com/order/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className='flex items-center flex-col mt-10 gap-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 class="card-title text-primary">Hello, {order.name}</h1>
                    <h2 class="text-xl text-secondary">Paying for {order.itemName}!</h2>
                    <p>Total Price: $<span className='font-semibold text-orange-400'>{order.price}</span> </p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;