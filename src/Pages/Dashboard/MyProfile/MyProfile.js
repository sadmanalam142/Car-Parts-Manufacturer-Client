import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const { data: users, isLoading, refetch } = useQuery(['users', user.email], () => fetch(`http://localhost:5000/user/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>;
    }

    const onSubmit = data => {
        const profile = {
            location: data.location,
            number: data.number,
            linkedIn: data.linkedIn
        }
        fetch(`http://localhost:5000/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    toast.success('Profile Updated');
                    refetch();
                    reset();
                }
            })
    }
    return (
        <div>
            <div className='w-2/4 mx-auto text-xl font-semibold mt-10'>
                <h1>Name: {user.displayName}</h1>
                <h1>Email: {user.email}</h1>
                <h1>Location: {users.location}</h1>
                <h1>Number: {users.number}</h1>
                <h1>LinkedIn: <a target="_blank" href={users.linkedIn}>{users.linkedIn}</a></h1>
            </div>
            <div>
                <h1 className='text-2xl text-center text-primary mt-10'>Update Profile</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/4 mx-auto mt-10 shadow-md shadow-gray-400">
                    <div className='pl-5'>
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" placeholder='location' {...register("location", { required: true })} />

                        <label className="label">
                            <span className="label-text">Number</span>
                        </label>
                        <input type="number" placeholder='number' {...register("number", { required: true })} />

                        <label className="label">
                            <span className="label-text">LinkedIn</span>
                        </label>
                        <input type="url" placeholder='url' {...register("linkedIn", { required: true })} />

                        <input className='btn btn-primary mt-5 w-2/4 block mx-auto' type="submit" value="Add" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;