import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';

const MyReview = () => {

    const { user } = useContext(AuthContext)
    const [myReview, setMyReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [user?.email])

    console.log(myReview);


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