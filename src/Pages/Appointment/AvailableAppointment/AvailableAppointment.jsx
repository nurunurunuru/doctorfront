import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import AppointmentOption from './AppointmentsOption'
import BookingModal from '../BookingModal/BookingModal'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../components/Loading/Loading'


const AvailableAppointment = ({selectedDate}) => {
  const [treatment, setTreatment] = useState(null)
  const date =format(selectedDate,"PP");
  //const [appointmentOptions,setAppointmentOptions] = useState([])
  //useEffect(()=>{
  //fetch("http://localhost:7000/appointmentOptions")
  //.then((res) => res.json())
  //.then((data) => setAppointmentOptions(data));
  //},[]);

const {data:appointmentOptions, isLoading, refetch} =useQuery({
  queryKey:['appointmentOptions',date],
  queryFn:async () => {
    const res = await fetch(`https://doctors-sigma.vercel.app/appointmentOptions?date=${date}`)
    const data = await res.json();
    return data;
  },
});


if (isLoading) {
  return <Loading></Loading>
}

  return (
    <div className='py-24'>
         <div className='text-center mb-10'>
                <h3 className='text-secondary font-bold mb-2'>Available Services on {date} </h3>
                <h2 className=''>Please select a service.</h2>
            </div>

           <div>
          
           <div className='grid md:grid-cols-3 gap-5 px-5'>
                {appointmentOptions?.map((option) => ( <AppointmentOption
                    key={option._id}
                    appointmentOption={option}
                    setTreatment={setTreatment}
                ></AppointmentOption>))}
            </div>
         {/* Booking Modal */}
        { treatment &&
           <BookingModal  
           selectedDate={selectedDate}
           setTreatment={setTreatment}
           treatment={treatment}>
           refetch={refetch}  
           </BookingModal>


        }
           </div>

    </div>
  )
}

export default AvailableAppointment