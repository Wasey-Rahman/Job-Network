import React, { useEffect, useState } from 'react';
import Company from '../Company/Company';
import './Feature.css'



const Feature = () => {
    const[Features,setFeatures]= useState([]);
   

    useEffect(() => {
        fetch('Features.json')
        .then(res =>res.json())
        .then(data =>setFeatures(data.slice(0,4)))
    },[]);

    return (
        <section>
            <h1 className='text-4xl  font-bold mb-4 mt-20 text-center'>Featured Jobs</h1>
            <p className='text-sm mb-4 text-gray-700 text-center'>Job openings that are given special prominence by employers or job boards. They are typically highlighted and appear at the top of search results to attract more attention from job seekers.</p>
            <div className='Feature-container'>
            {
            Features.map(Feature=><Company
                key={Feature.id}
                Feature={Feature}
            ></Company>)
           }
           
           </div>
           
            <div className="flex justify-center">
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2'>See All Jobs</button>
            </div>
        </section>
    );
};

export default Feature;