import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {


    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState();
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError("");
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




    return (
        <div className="hero min-h-screen bg-base-200 mb-4">
            <form onSubmit={handelLogin} className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body" >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/register' href="#" className="label-text-alt link link-hover">Don't have an account? Please Register</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handelGoogleSignIn} type='submit' className="btn btn-primary">Google SignIn</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;