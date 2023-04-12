import React from 'react';
import headerImg from './header-image.jpg';
const Header = () => {
    return (
        
           


    <header className='grid grid-cols-1 md:grid-cols-2 '>
      <div className='flex items-center justify-center'>
        <img src={headerImg} alt='Header' className='h-full w-full ' />
      </div>
      <div className='flex items-center justify-center p-8'>
        <div>
          <h1 className='text-4xl  font-bold mb-4'>One Step Closer To Your <span className='text-indigo-600'>Dream Job</span></h1>
          <p className='text-sm mb-4 text-gray-700'>
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className='bg-indigo-600  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
          Get Started
          </button>
        </div>
      </div>
    </header>
        
    );
};

export default Header;