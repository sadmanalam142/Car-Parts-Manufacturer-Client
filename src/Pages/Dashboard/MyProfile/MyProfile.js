import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className='w-2/4 mx-auto text-xl font-semibold mt-10'>
                <h1>Name: {user.displayName}</h1>
                <h1>Email: {user.email}</h1>
                <h1>Location: </h1>
                <h1>Number: </h1>
                <h1>LinkedIn: </h1>
            </div>
        </div>
    );
};

export default MyProfile;