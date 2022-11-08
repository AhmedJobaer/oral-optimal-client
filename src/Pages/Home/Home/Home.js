import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';
import Services from '../Services/Services';


const Home = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/servicesHome')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="carousel rounded-lg w-full h-96 mb-4">
                <div id="slide1" className="carousel-item relative w-full">
                    <img alt='' src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVudGlzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt='' src="https://images.unsplash.com/photo-1593022356769-11f762e25ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt='' src="https://plus.unsplash.com/premium_photo-1661775138520-0b102d4ef0f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGlzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img alt='' src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl text-center mb-4 font-bold text-orange-600">My Services</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>)
                }
            </div>

            <Link className='' to='/services'><button className="btn btn-primary mb-4 ml-[350px]">See All</button></Link>


        </div>
    );
};

export default Home;