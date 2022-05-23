import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;

    let from = location.state?.from?.pathname || "/";

    if(error){
        errorMessage = error.message;
    }

    if(loading){
        return <Loading></Loading>;
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <p className='text-red-500'><small>{errorMessage}</small></p>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
            </div>
            <button onClick={() => signInWithGoogle()} className="btn btn-primary w-full">Sign in with Google</button>
        </div>
    );
};

export default SocialLogin;