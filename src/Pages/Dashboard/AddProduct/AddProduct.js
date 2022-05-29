import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const imageStorageKey = '6e3132f0f3a6c9f1553842926178a238';

    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const part = {
                        name: data.name,
                        minOrderQuantity: data.minOrderQuantity,
                        availableQuantity: data.availableQuantity,
                        price: data.price,
                        description: data.description,
                        img: img
                    }
                    fetch('https://fast-beyond-75941.herokuapp.com/part', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(part)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Part added successfilly');
                                reset();
                            }
                            else {
                                toast.error('Failed to add a Part');
                            }
                        })
                }
            })
    };
    return (
        <div>
            <h1 className='text-2xl text-center font-semibold my-5'>Add a Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:w-2/4 mx-auto mt-10 shadow-md shadow-gray-400">
                <div className='pl-5'>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder='name' {...register("name", { required: true })} />

                    <label className="label">
                        <span className="label-text">Min Order Quantity</span>
                    </label>
                    <input type="number" placeholder='min order quantity' {...register("minOrderQuantity", { required: true })} />

                    <label className="label">
                        <span className="label-text">Avalable Quantity</span>
                    </label>
                    <input type="number" placeholder='available quantity' {...register("availableQuantity", { required: true })} />

                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" placeholder='price' {...register("price", { required: true })} />

                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea type="text" cols="45" rows="5" placeholder='description' {...register("description", { required: true })} />

                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} />

                    <input className='btn btn-primary mt-5 w-2/4 block mx-auto' type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;