import React from 'react'
import footerBg from "../../../assets/footer-bg.png";

const Footer = () => {
  return (
    <div  >
      <footer style={{background:`url(${footerBg})`, backgroundSize:'cover'}} className="footer bg-white text-black-content p-10">
        <div className='footer justify-between'>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Emergency Checkup</a>
    <a className="link link-hover">Deep Checkup</a>
    <a className="link link-hover">Monthly Checkup</a>
    <a className="link link-hover">Weekly Checkup</a>
  </nav>
  <nav>
    <h6 className="footer-title">ORAL HEALTH</h6>
    <a className="link link-hover">Fluoride Treatment</a>
    <a className="link link-hover">Cavity Filling</a>
    <a className="link link-hover">Teath Whitening</a>
    
  </nav>
  <nav className=''>
    <h6 className="footer-title">OUR ADDRESS</h6>
    <a className="link link-hover">New York - 101010 Hudson</a>
   
  </nav>
  </div>
</footer>

<div className='text-center mt-10'>
  <p>Copyright 2022 All Rights Reserved</p>
</div>
    </div>
  )
}

export default Footer