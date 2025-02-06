import { format } from 'date-fns';
import React, { useContext } from 'react'
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({treatment,setTreatment,selectedDate, refetch }) => {

  const {user} =useContext(AuthContext);
    const { name:treatmentName,slots,price } = treatment;
    const date =format(selectedDate,"PP");

    const handleBooking =(event)=>{
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const number = form.number.value;
        const email = form.email.value;
        const booking = {
            appointmentDate:date,
            treatment:treatmentName,
            patient:name,
            slot,
            number,
            email,
            price
        };
        //console.log(booking);
        fetch("https://doctors-sigma.vercel.app/bookings",{
          method:"POST",
          headers:{
            'content-type':'application/json',
          },
          body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data=> {
          if(data.acknowledged){
            setTreatment(null);
            toast.success('Booking Confirm Successfully');
            refetch();
          } else{
            toast.error(data.message);

          }
        });
        
    };

  return (
    <div>
         <input type="checkbox" id="booking-modal" className="modal-toggle" />
          <div className="modal" role="dialog">
             <form onSubmit={handleBooking} className="modal-box">
                <div className='flex justify-between'>
                <h3 className="text-lg font-bold">{treatmentName}</h3>
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle text-white bg-black">X</label>
                   </div>
              

               <div className='mt-2 mb-5'>
              <input 
               type="text" 
               value={date}
               disabled
               className="input input-bordered w-full max-w-xs" 
               />
               <select name="slot" className="select select-bordered w-full max-w-xs">
               {
                slots.map((slot, i) => <option
                value={slot}
                key={i}>
                {slot}</option>)}
               </select>
               <input 
               type="text" 
               placeholder="Full name" 
               name='name'
               value={user?.displayName}
               className="input input-bordered w-full max-w-xs mt-4" 
               />
               <input 
               required
               type="text" 
               placeholder="Phone Number" 
               name='number'
               value={user?.phone}
               className="input input-bordered w-full max-w-xs mt-4" 
               />
               <input 
               type="text"
               value={user.email}
               name='email' 
               placeholder="Email" 
               className="input input-bordered w-full max-w-xs mt-4" 
               />
               </div>
                
                   <input type='submit' 
                   value="Submit"
                   className='w-full btn btn-accent' />
                     </form>
                      </div>
    </div>
  )
}

export default BookingModal;