import React from 'react';
import { Link } from 'react-router-dom';
import {FaSearch, FaShoppingCart, FaUser} from "react-icons/fa"

const Navbar = () => {
  return(
    <nav className='bg-white shadow-lg'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='text-lg font-bold'>
          <Link to="/">React-<span className='text-red-500'>Shop</span></Link>
        </div>
        <div className='relative flex-1 mx-4'> 
          <form>
            <input type="text" placeholder='Search Products' className='w-full py-2 border px-4 rounded-md'/>
            <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to="/cart">
            <FaShoppingCart className='text-lg'/>
          </Link>
          <button className='hidden md:block  '>
            Login | Register
          </button>
          <button className="md:hidden">
            <FaUser/>
          </button>
        </div>
      </div>
      <div className='flex justify-center items-center space-x-10 py-4 text-sm font-bold'>
        <Link to="/" className='hover:underline'> 
        Home
        </Link>
        <Link to="/shop" className='hover:underline'> 
        Shop
        </Link>
        <Link to="/" className='hover:underline'> 
        Contact
        </Link>
        <Link to="/" className='hover:underline'> 
        About
        </Link>
      </div>
    </nav>
  )
};

export default Navbar;
