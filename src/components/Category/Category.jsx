import React from 'react';

const Category = (props) => {
    const {logo,name,jobs}=props.List;
    return (
        <div className='List'>
           <img src={logo} alt="" /> 
           <h3 className='font-bold '>{name}</h3>
           <h6 className='text-gray-500'>{jobs}</h6>
        </div>
    );
};

export default Category;