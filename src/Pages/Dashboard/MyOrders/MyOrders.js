import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const { data: orders, isLoading } = useQuery(['order', user], () => fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        return res.json()
    }));

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.itemName}</td>
                            <td>{order.quantity} units</td>
                            <td>$<span className='font-semibold'>{order.price}</span></td>
                            <td>
                                {order.paid? <button className='btn btn-xs btn-success'>Paid</button> : <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;