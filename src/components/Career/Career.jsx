import React from 'react';


const Career = ({data}) => {
    console.log(data);
    const {jobDescription,JobResponsibilities,educationalRequirements,experiences,phone,email,salary,postName,location} =data;
    return (
        <div>
            <div>
            <h3 className='font-bold'>Job Description:</h3>
            <p>{jobDescription}</p>
            </div>
            <div>
            <h3 className='font-bold text-blue-500'>JobResponsibilities:</h3>
            <p>{JobResponsibilities}</p>
            </div>
            <div>
            <h3 className='font-bold text-purple-500'>EducationalRequirements:</h3>
            <p>{educationalRequirements}</p>
            </div>
            <div>
            <h3 className='font-bold text-green-500'>Experiences:</h3>
            <p>{experiences}</p>
            </div>
            <h3 className='font-bold text-blue-400' >Salary:{salary}</h3>
            <h3 className='font-bold text-black'>Job Title:{postName}</h3>
            <div>
            <h3 className='font-bold text-indigo-500'>ContactInformation:</h3>
            <h3 className='font-bold text-green-500'>Address:{location}</h3>
            <p className='font-bold text-gray-600'>Phone:{phone}</p>
            <p className='font-bold text-gray-600'>Email:{email}</p>
            </div>
            <button className=' bg-indigo-600 hover:bg-blue-600  text-white font-bold py-2 px-4 rounded'>Apply Now</button>
            </div>
    );
};

export default Career;