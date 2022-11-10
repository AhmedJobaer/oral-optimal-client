import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Register = () => {

    const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState();
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handelRegister = (event) => {
        console.log('hfdgjkfdh');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        //const url = form.url.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError("");
                handelUpdateUserProfile(name);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            })

    }

    const handelGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            })
    }



    const handelUpdateUserProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(() => { })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handelRegister} className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/login' href="#" className="label-text-alt link link-hover">Already have an account? Please Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;