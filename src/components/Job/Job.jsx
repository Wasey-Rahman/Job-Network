import React from 'react';
import './Job.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faDollarSign } from "@fortawesome/free-solid-svg-icons";


const Job = ({data}) => {
    
    const {logo,postName,companyName,jobType1,jobType2,location,salary,button}=data;
    return (
        <li className="border border-gray-200 rounded-lg shadow-sm p-4 mb-4">
        <div>
        
            <img src={logo} alt="" className='Image '/>
           
            <h2 className='font-bold'>{postName}</h2>
            <h4 className='text-gray-700'>{companyName}</h4>

            <div className="flex gap-2">
          <div className="border border-blue-600 rounded-md px-2 py-1">
          <h6 className="text-indigo-700">{jobType1}</h6>
          </div>
         <div className="border border-blue-600 rounded-md px-2 py-1">
         <h6 className="text-indigo-700">{jobType2}</h6>
        </div>
         </div>
         
        <div className="flex gap-4">
        <div className="flex ">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 mr-1" />
          <h4 className="text-gray-700">{location}</h4>
        </div>
        <div className="flex gap-0 ">
          <FontAwesomeIcon icon={faDollarSign} className="text-gray-400 mr-1" />
          <h4 className="text-gray-700">{salary}</h4>
        </div>
      </div>

      <div className="ml-auto">
        <button className=" ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 " >{button}</button>
      </div>
  
        </div>
        </li>
    );
};

export default Job;
