import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './List.css'

const List = () => {
    const[Lists,setLists]= useState([]);

    useEffect(() => {
        fetch('Lists.json')
        .then(res =>res.json())
        .then(data =>setLists(data))
    },[]);








    return (
        
            <section>
            <h1 className='text-4xl  font-bold mb-4 mt-20 text-center'>Job Category List</h1>
            <p className='text-sm mb-4 text-gray-700 text-center'>It is a way of grouping different types of jobs into specific categories. This list is usually provided on job search websites or platforms to help job seekers find job listings that are relevant to their skills and interests.</p>
            <div className='List-container'>
            {
            Lists.map(List=><Category
            key={List.id}
            List={List}
            ></Category>)
           }
            </div>
           
            </section>
           
        
    );
};

export default List;