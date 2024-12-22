import React from 'react';
import appointmentBg from '../../../../assets/appointment.png';
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
  return (
    <div style={{background:`url(${appointmentBg})`, backgroundSize:'cover'}} className='mt-5 md:mt-[290px]'>
      <div className="text-center mt-14 mb-14 flex flex-col items-center justify-center  min-h-screen">
      <div className="w-full max-w-4xl p-6 ">
        <h2 className="text-xl font-bold text-center text-primary mb-8">Contact Us</h2>
        <h1 className='text-white text-2xl -mt-8 mb-4 '>Stay connected with us</h1>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            
            <div className="flex-1 ">
              <input
                type="email"
                id="email"
                className="ml-52 mt-1 block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              id="subject"
              className="ml-52 mt-1 block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              placeholder="Subject"
            />
          </div>
          <div>
            <textarea
              id="message"
              rows="4"
              className="ml-52 mt-1 block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
          <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
