import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import ProductDeletingModal from '../ProductDeletingModal/ProductDeletingModal';
import ProductsTable from '../ProductsTable/ProductsTable';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const { data: products, isLoading, refetch } = useQuery('doctors', () => fetch('https://fast-beyond-75941.herokuapp.com/part', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h1 className='text-2xl text-center font-semibold my-5'>Delete a Product</h1>
            <div class="overflow-x-auto mt-5">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Delete Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductsTable
                                key={product._id}
                                product={product}
                                index={index}
                                setDeletingProduct={setDeletingProduct}
                            ></ProductsTable>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ProductDeletingModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
                ></ProductDeletingModal>
            }
        </div>
    );
};

export default ManageProducts;