import React from 'react'
import chair from '../../../assets/chair1.png'
import bg from '../../../assets/bg.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton'

const HomeBanner = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="md:w-2/5 rounded-lg shadow-2xl" />
                <div className='md:space-y-5'>
                    <h1 className="text-2xl md:text-5xl font-bold">Your New Smile Starts <br className='hidden md:block' /> Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
  )
}

export default HomeBanner