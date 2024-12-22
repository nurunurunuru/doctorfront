import React, { useState } from 'react'
import chair from '../../../assets/chair1.png'
import bg from '../../../assets/bg.png'
import "react-day-picker/style.css";
import { DayPicker } from 'react-day-picker'


const AppointmentBanner = ({selectedDate,setSelectedDate}) => {

  

  return (
    <div style={{ backgroundImage:`url(${bg})` }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" md: rounded-lg shadow-2xl"/>
                <div className='shadow-2xl bg-base-100 rounded-lg p-2 mr-5'>
                <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
     
    />
                </div>
            </div>
        </div>
  )
}

export default AppointmentBanner;