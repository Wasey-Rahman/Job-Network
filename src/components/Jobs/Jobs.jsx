import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Career from '../Career/Career';
import Navbar from '../Navbar/Navbar';

const Jobs  = () => {
    const data=useLoaderData();
    // console.log(data);
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
           <div>
            <h1 className='font-bold text-center text-2xl'>Job Details</h1>
           </div>
            <div>
                {
                    data.map(data=><Career
                    key={data.id}
                    data={data}
                    ></Career>)
                }
            </div>
        </div>
    );
};

export default Jobs;