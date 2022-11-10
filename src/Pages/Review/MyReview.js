import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';

const MyReview = () => {

    const { user } = useContext(AuthContext)
    const [myReview, setMyReview] = useState([])

    useEffect(() => {
        fetch(`https://oral-optimal-server.vercel.app/myReview?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [user?.email])

    console.log(myReview);


    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure that you want to delete?');
        if (proceed) {
            fetch(`https://oral-optimal-server.vercel.app/myReview/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('successfully deleted!');
                        const remaining = myReview.filter(rm => rm._id !== id);
                        setMyReview(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <h2 className='text-center font-semibold text-2xl mb-4 text-orange-500'>ALL reviews for {user?.displayName}</h2>

            <div className='grid grid-cols-2'>
                {
                    myReview.map(r =>
                        <div key={r._id}>
                            <div className='grid grid-cols-2 mb-4'>
                                <div className="card w-80 card-compact bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">Name: {r.customer}</h2>
                                        <p>Review: {r.comment}</p>

                                    </div>
                                    <button onClick={() => handleDelete(r._id, r.service)} className="btn btn-outline btn-accent">Delete</button>
                                    <button className="btn btn-outline  btn-warning">Update</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyReview;