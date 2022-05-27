import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import User from '../User/User';

const Alluser = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Admin Control</th>
                        <th>Remove Control</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <User
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                        ></User>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Alluser;