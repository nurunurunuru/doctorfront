import React, { useContext } from 'react'
import { AuthContext } from '../../../Contexts/AuthProvider'
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading/Loading';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const {user}= useContext(AuthContext);
    

    const {
        data:bookings =[],
        isLoading, 
        refetch,
       } =useQuery({
        queryKey:['bookings',user?.email],
        queryFn:async () => {
          const res = await fetch(`http://localhost:7001/bookings?email=${user.email}`);
          const data = await res.json();
          return data;
        },
        enabled: !!user?.email,
      });
      if (isLoading) {
        return <Loading></Loading>;
      }
    
  return (
    <div>
        <h1 className='text-3xl font-semibold'>MyAppointment {bookings.length} </h1>
        <div className="overflow-x-auto">
  <table className="table w-full bg-white mt-6">
    {/* head */}
    <thead className='bg-base-200'>
      <tr className='text-black'>
        <th>Serial</th>
        <th>Name</th>
        <th>Service</th>
        <th>Time</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map((booking,i) => (
        <tr key={booking._id}>
          <th>{i + 1}</th>
          <td>{booking.patient}</td>
          <td>{booking.treatment}</td>
          <td>{booking.slot}</td>
          <td>
            {
                booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                           <button className='btn btn-sm btn-primary'>Pay</button>
                </Link>
            }
            {
              booking.price && booking.paid && <span className='text-success'>Paid</span>
            }
         </td>
        </tr> 
      ))}
     
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default MyAppointment