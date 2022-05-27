import React from 'react';
import { toast } from 'react-toastify';

const ProductsTable = ({ product, index, setDeletingProduct }) => {
    const { name, img } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} for="my-modal-6" class="btn modal-button btn-square btn-error"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
            </td>
        </tr>
    );
};

export default ProductsTable;