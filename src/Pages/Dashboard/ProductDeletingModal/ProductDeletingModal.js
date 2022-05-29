import React from 'react';
import { toast } from 'react-toastify';

const ProductDeletingModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
    const { _id, name } = deletingProduct;

    const handleDelete = id => {
        fetch(`https://fast-beyond-75941.herokuapp.com/part/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Successfully deleted: ${name}`);
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="product-deleting-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {name}!</h3>
                    <p class="py-4">Once you delete the product, the product will disapear from the website.</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn btn-error btn-xs">Delete</button>
                        <label for="product-deleting-modal" class="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductDeletingModal;