import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import './Applied.css'

function Applied() {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='font-bold text-center text-2xl'>Applied Jobs</h1>
            <div class="dropdown">
              <button class="dropbtn">Filter By</button>
              <div class="dropdown-content">
              <a href="#">Remote</a>
              <a href="#">Onsite</a>
            
  </div>
</div>


            <div >
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