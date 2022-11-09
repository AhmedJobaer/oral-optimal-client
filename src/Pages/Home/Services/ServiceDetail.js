import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const { _id, title, price, img, description } = useLoaderData();
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
                            <button className="btn btn-primary">Make Appoinment</button>

                        </Link>
                        <Link to={`/addReview/${_id}`}>

                            <button className="btn btn-primary ml-1">Add Review</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;