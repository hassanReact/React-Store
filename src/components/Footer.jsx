import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-col-1 md:grid-cols-3 gap-8'>
        <div>
        <h3 className='text-xl font-semibold'>REACT-<span className='text-red-500'>SHOP</span></h3>
        <p className='mt-4'>Your one-Step fot all your needs. Shop with use and experience the best online shopping experience</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul className='mt-4 space-y-2'>
            <li><Link to="/" className='hover:underline'>Home</Link></li>
            <li><Link to="/shop"className='hover:underline'>Shop</Link></li>
            <li><Link to="/contact" className='hover:underline'>Contact</Link></li>
            <li><Link to="/about" className='hover:underline'>About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-semibold'>Follow us</h4>
          <div className='flex space-x-4 mt-4'>
            <a href="https://www.facebook.com/profile.php?id=100092661863562" className='hover:text-gray-400' ><FaFacebook/></a>
            <a href="https://www.linkedin.com/in/hassankashif1751/" className='hover:text-gray-400'><FaLinkedin/></a>
            <a href="https://www.instagram.com/hassan_priv16/?hl=en" className='hover:text-gray-400'><FaInstagram/></a>
            <a href="+92 335 6324247"  className='hover:text-gray-400'><FaWhatsapp/></a>
          </div>
        <form className='flex items-center justify-center mt-8'>
        <input type="email" className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600' />
        <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
        </form>
        </div>
      </div>
      <div className='flex justify-center items-center mt-8 border-t border-gray-700 pt-4'> 
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'> 
          <p>&copy; 2024 REACT-SHOP, All Rights Reserved to <span>
            <a className='text-red-500 hover:underline' href="https://www.linkedin.com/in/hassankashif1751/">Hassan Kashif</a></span></p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href="" className='hover:underline'>Privacy Policy</a>
            <a href="" className='hover:underline'>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
