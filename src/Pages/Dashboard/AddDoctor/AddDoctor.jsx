import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';

const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:7001/appointmentSpecialty');
            const data = await res.json();
            return data;
        },
    });

  

    const handleAddDoctor = (data) => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();

        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('specialty', data.specialty);
        formData.append('image',data.image[0]);
       
        

        fetch('http://localhost:7001/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Doctor Added Successfully');
                }
            }).catch(err => console.log("Doctor Error:", err))
    }



    if (isLoading) {
        return <Loading></Loading>
    }


    return (

        <div className='w-96 p-7 shadow-2xl bg-base-100 rounded-lg'>
            <h3 className='text-xl text-center mt-2'>Add A Doctor</h3>

            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control mb-3 w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" required />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control mb-3 w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="form-control mb-3 w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select {...register("specialty")} className="select select-bordered w-full mt-3">

                        {specialties.map(specialty => <option
                            key={specialty._id}
                            value={specialty.name}
                        >
                            {specialty.name}
                        </option>)}
                    </select>

                </div>

                <div className="form-control mb-3 w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input 
                    accept='image/*'
                    type="file" 
                    {...register("image", {
                        required: 'Photo Is Required',
                    })} 
                    placeholder="file chose" 
                    className="input input-bordered" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>

                <div className="form-control mt-3">
                    <button className="btn btn-accent" type='submit'>Add Doctor</button>
                </div>

            </form>
        </div>


    );
};

export default AddDoctor;