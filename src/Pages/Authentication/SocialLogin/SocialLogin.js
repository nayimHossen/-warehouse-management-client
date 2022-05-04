import React from 'react';
import './SocialLogin.css';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let showLoading;
    if (loading) {
        showLoading = <p>Loading...</p>;
    }

    let showError;
    if (error) {
        showError = <p className='text-danger'>Error: {error.message}</p>
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div>
                {showLoading}
                <button onClick={() => signInWithGoogle()} className='w-100 social-button p-2 fw-bold'><FcGoogle className='me-2' />Google signIn</button>
            </div>
            {showError}
            <div className='d-flex align-items-center'>
                <div className='or-style'></div>
                <p className='mt-2 m-2'>OR</p>
                <div className='or-style'></div>
            </div>
        </div>
    );
};

export default SocialLogin;