import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

function Applied() {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='font-bold text-center text-2xl'>Job Details</h1>
            {data.length}
            <div>
                {
                    data.map(data =><Job
                    key={data.id}
                    data={data}
                    ></Job>)
                }
            </div>


        </div>
    );
}

export default Applied;