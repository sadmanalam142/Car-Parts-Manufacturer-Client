import React from 'react';
import { toast } from 'react-toastify';

const OrderDeletingModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
    const {_id, itemName } = deletingOrder;

    const handleDelete = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Successfully deleted: ${itemName}`);
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="order-deleting-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {itemName}!</h3>
                    <p class="py-4">Once you delete the order, the order will disapear from the website.</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn btn-error btn-xs">Delete</button>
                        <label for="order-deleting-modal" class="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderDeletingModal;