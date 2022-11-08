import React from 'react';
import { Link } from 'react-router-dom';
import '../Services/ServiceCard.css'

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-4">
            <figure><img className='imgSize' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-1xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <p>{description}...</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;