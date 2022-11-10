import React from 'react';

const AddServices = () => {



    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const description = form.des.value;
        const price = form.price.value;

        console.log(name, url, price, description);

        const service = {
            service: name,
            img: url,
            description,
            price
        }

        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                alert("successfully added");
                form.reset();
            })
            .catch(er => console.log(er))


    }


    return (
        <div className=" card w-full bg-base-100 shadow-xl mb-4">
            <div className="card-body">
                <h2 className="card-title text-center">Add Your Services</h2>
                <form onSubmit={handleAddService} action="">
                    <div className="form-control text-center w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Service name</span>
                        </label>
                        <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='url' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='des' className="textarea textarea-success" placeholder="description"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddServices;