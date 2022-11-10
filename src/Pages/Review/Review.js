import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Review = () => {
    const user = useLoaderData();
    const u = useContext(AuthContext);

    const handelReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const review = form.rev.value;

        const addReview = {
            serviceId: user._id,
            customer: name,
            email: u.user.email,
            photoUrl: url,
            comment: review
        }

        fetch('https://oral-optimal-server.vercel.app/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Review added successfully!');
                form.reset();
            })
            .catch(er => console.log(er))
    }

    return (
        <div>
            <div className=" card w-full bg-base-100 shadow-xl mb-4">
                <div className="card-body">
                    <h2 className="card-title text-center">Add Your Review</h2>
                    <form onSubmit={handelReview} action="">
                        <div className="form-control text-center w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input defaultValue={u.user.displayName} type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input defaultValue={u.user.photoURL} type="text" name='url' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <textarea name='rev' className="textarea textarea-success" placeholder="description"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add review</button>
                        </div>
                    </form>
                    <Link to='/myReview'><button type='submit' className="btn btn-primary w-full">MY review</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Review;