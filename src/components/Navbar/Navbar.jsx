import React from 'react';
import Link from '../Link/Link';



const Navbar = () => {
    const routes = [
        { id: 1, name: 'Statistics', path: '/Statistics' },
        { id: 2, name: 'Applied Jobs', path: '/Applied Jobs' },
        { id: 3, name: 'Blog', path: '/Blog' }
        
      ];
    return (
    
    <nav>
    <ul className='flex justify-center'>
      <li className='font-bold text-lg px-6'>Job-Network</li>
      {routes.map(route => (
        <Link key={route.id} 
        route={route} 
        className={`mr-4 ${route.name === 'Statistics' ? 'text-indigo-600' : ''}`}
        />
      ))}
      <li className='ml-auto mr-4'>
        <button className=' bg-indigo-600 hover:bg-blue-600  text-white font-bold py-2 px-4 rounded'>
        Start Applying
        </button>
      </li>
    </ul>
    
    
    
  </nav>


 
);
};


  
       
 

export default Navbar;