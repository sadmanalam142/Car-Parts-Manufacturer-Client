import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, PRError] = useSendPasswordResetEmail(
        auth
    );

    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;

    let from = location.state?.from?.pathname || "/";

    if (error) {
        errorMessage = error.message;
    }

    if (PRError) {
        errorMessage = 'Please enter your email first then click to reset';
    }

    if (loading || sending) {
        return <Loading></Loading>;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const handlePasswordReset = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
    }

    return (
        <div>
            <h1 className="text-2xl text-center text-primary">Please Login!!</h1>
            <div class="hero bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse w-2/4">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleSignIn}>
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
                                    <label class="label">
                                        <p><small>Forgot password? <button className='text-primary' onClick={handlePasswordReset} >click to reset</button></small></p>
                                    </label>
                                </div>
                                <p className='text-red-500'><small>{errorMessage}</small></p>
                                <div class="form-control mt-6">
                                    <input className='btn btn-primary' type="submit" value="Login" />
                                </div>
                                <p><small>New to Car Parts Manufacturer? <Link className='text-primary' to="/register">Create an Account</Link></small></p>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;