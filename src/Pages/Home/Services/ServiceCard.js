import React from 'react';
import { Link } from 'react-router-dom';
import '../Services/ServiceCard.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-4">
            <figure>
                <PhotoProvider src={img}>
                    <img className='imgSize' src={img} alt="Shoes" />
                </PhotoProvider>

            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-1xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <p>{description.slice(0, 100)}...</p>
                    <Link to={`/serviceDetail/${_id}`}>
                        <button className="btn btn-primary">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;