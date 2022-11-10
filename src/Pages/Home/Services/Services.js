import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://oral-optimal-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>

            <div className='text-center mb-4'>
                <h2 className="text-2xl font-bold text-orange-600">My Services</h2>
                <p>Dentists areas of care include not only their patients teeth and gums but also the muscles of the head, neck and jaw, the tongue, salivary glands, and the nervous system of the head and neck. During a comprehensive exam, dentists examine the teeth and gums, but they also look for lumps, swellings, discolorations, ulcerations any abnormality. When appropriate, they perform procedures such as biopsies, diagnostic tests for chronic or infectious diseases, salivary gland function, and screening tests for oral cancer. In addition, dentists can spot early warning signs in the mouth that may indicate disease elsewhere in the body. Dentists training also enables them to recognize situations that warrant referring patients for care by dental specialists or physicians.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;