import React from 'react'
import Doctor from '../../../../assets/doctor.png';
import appointmentBg from '../../../../assets/appointment.png';
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';

const HomeAppointment = () => {
  return (
    <div style={{background:`url(${appointmentBg})`, backgroundSize:'cover'}} className='mt-5 md:mt-[290px]'>
      <div className="hero">
  <div className="hero-content  flex-col lg:flex-row">
    <img
      src={Doctor}
      className="hidden md:block -mt-44 lg:w-[160%] rounded-lg" />
    <div className='text-white p-10 md:pe-10'>
      <h3 className='text-primary font-semibold mb-5'>Appointment</h3>
      <h1 className="text-2xl  md:text-5xl font-bold">Make an appointment Today</h1>
      <p className="py-6">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
      </p>
      <PrimaryButton>GET STARTED</PrimaryButton>
    </div>
  </div>
</div>
    </div>
  )
}

export default HomeAppointment