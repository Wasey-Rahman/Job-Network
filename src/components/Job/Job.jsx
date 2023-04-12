import React from 'react';

const Job = ({data}) => {
    const{jobDescription,jobResponsibilities,educationalRequirements,experiences,contactInformation}=data;
    return (
        <div>
            {/* <h1 className='font-bold'>JobDescription:</h1>
            <p>{jobDescription}</p> */}
        </div>
    );
};

export default Job;