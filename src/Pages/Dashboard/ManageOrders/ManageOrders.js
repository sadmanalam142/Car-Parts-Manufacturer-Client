import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import OrderDeletingModal from '../OrderDeletingModal/OrderDeletingModal';

const ManageOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://car-parts-manufacturer-85r7.onrender.com/order', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>;
    }

    const handleStatus = id => {
        fetch(`https://car-parts-manufacturer-85r7.onrender.com/order/${id}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.paid){
                    const shippingUpdate = {
                        status: 'Shipped'
                    }
                    fetch(`https://car-parts-manufacturer-85r7.onrender.com/order/${id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type' : 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(shippingUpdate)
                    })
                    .then(res => res.json())
                    .then(data => refetch())
                }
            })
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>User</th>
                        <th>Item Name</th>
                        <th>Order Condition</th>
                        <th>Order Control</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order.email}</td>
                            <td>{order.itemName}</td>
                            <td>
                                {
                                    order.paid ? <button className='btn btn-success btn-sm'>{order.status === 'Shipped' ? 'Shipped' : 'Pending' }</button> : <button className='btn btn-warning btn-sm'>Unpaid</button>
                                }
                            </td>
                            <td>
                                {
                                    order.paid ? <button onClick={() => handleStatus(order._id)} className='btn btn-primary btn-sm'>Update Status</button> : <label onClick={() => setDeletingOrder(order)} for="order-deleting-modal" class="btn modal-button btn-error"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            {
                deletingOrder && <OrderDeletingModal
                    deletingOrder={deletingOrder}
                    refetch={refetch}
                    setDeletingOrder={setDeletingOrder}
                ></OrderDeletingModal>
            }
        </div>
    );
};

export default ManageOrders;