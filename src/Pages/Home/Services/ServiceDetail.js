import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const { _id, title, price, img, description } = useLoaderData();

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`https://oral-optimal-server.vercel.app/serviceReview?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [_id])

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl mb-4">
                <figure><img className='' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-1xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <p>{description}</p>
                        <Link>
                            <button className="btn btn-primary">Make Appointment</button>

                        </Link>
                        <Link to={`/addReview/${_id}`}>

                            <button className="btn btn-primary ml-1">Add Review</button>
                        </Link>
                    </div>
                </div>
            </div>

            <h2 className='text-center font-semibold text-2xl mb-4 text-orange-500'>ALL reviews for {title} service</h2>

            <div className='grid grid-cols-2'>
                {
                    review.map(r => <div key={r._id}>
                        <div className='grid grid-cols-2 mb-4'>
                            <div className="card w-80 card-compact bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Name: {r.customer}</h2>
                                    <p>Review: {r.comment}</p>

                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ServiceDetail;