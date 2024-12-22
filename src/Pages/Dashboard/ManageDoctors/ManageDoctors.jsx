import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../components/Loading/Loading';
import toast from 'react-hot-toast';

const ManageDoctors = () => {
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:7001/doctors');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteDoctor = (id) => {
        fetch(`http://localhost:7001/doctors/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                toast.success('Doctor deleted successfully!');
                refetch(); // Refetch to update the list after deletion
            }
        })
        .catch(error => console.log("Doctor delete error:", error));
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h1 className='text-3xl mb-6'>My Appointment {doctors.length}</h1>
            <div className="overflow-x-auto rounded-lg bg-base-100">
                <table className="table w-full">
                    <thead className='bg-base-200'>
                        <tr>
                            <th></th>
                            <th>AVATAR</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>SPECIALITY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.length === 0 && <h1>No Doctor to Mange Here</h1> }
                        {doctors.map((doctor, i) => (
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    <img className='w-10 rounded-full' src={`data:image/png;base64,${doctor.image}`} alt="" />
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <button onClick={() => handleDeleteDoctor(doctor._id)} className='btn btn-sm bg-red-500 text-white'>DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;
