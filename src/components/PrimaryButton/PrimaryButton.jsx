import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <button className='btn  bg-gradient-to-l from-primary to-secondary text-white'>
        {children}
     
    </button>
  )
}

export default PrimaryButton