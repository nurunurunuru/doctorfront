import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
//const stripePromise = loadStripe("pk_test_51QFehEEL0vfGbiE4ico8jN4c1QGreS9LUsScMn0pVgQO836J6ke80sfWNFon1YUHgqBQDaLyGFKahoob5sfta8Sn00BEa7SyuM")


const Payment = () => {
    const booking = useLoaderData();
    const { email, patient, price, slot, appointmentData, treatment } = booking;
    
    return (
        <div>
            <h2 className='text-3xl font-bold'>
                Payment for <span className='text-primary'>{treatment}</span>
            </h2>
            <p>
                Please Pay <b>{price}</b> for your appointment <strong>{appointmentData}</strong> at <b>{slot}</b>
            </p>
            <div>
    <Elements stripe={stripePromise}>
        <CheckoutForm booking={booking} />
    </Elements>
</div>

        </div>
    );
};

export default Payment;
