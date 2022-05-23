import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const Registration = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, UPError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    let errorMessage;

    if(error || UPError){
        errorMessage = error.message || UPError.message;
    }

    if(loading || updating){
        return <Loading></Loading>;
    }

    if (user) {
        navigate('/');
    }

    const handleRegistration = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }
    return (
        <div>
            <h1 className="text-2xl text-center text-primary">Please Register!!</h1>
            <div class="hero bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse w-2/4">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleRegistration}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input ref={nameRef} type="text" placeholder="name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input ref={emailRef} type="email" placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input ref={passwordRef} type="password" placeholder="password" class="input input-bordered" />
                                </div>
                                <p className='text-red-500'><small>{errorMessage}</small></p>
                                <div class="form-control mt-6">
                                    <input className='btn btn-primary' type="submit" value="Register" />
                                </div>
                                <p><small>Already have an Account? <Link className='text-primary' to="/login">Please Login</Link></small></p>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;