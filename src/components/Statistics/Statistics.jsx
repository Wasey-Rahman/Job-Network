import React from 'react';
import Navbar from '../Navbar/Navbar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts';

const data = [
    { assignmentNumber: 1, marks: 60 },
    { assignmentNumber: 2, marks: 53 },
    { assignmentNumber: 3, marks: 52 },
    { assignmentNumber: 4, marks: 59 },
    { assignmentNumber: 5, marks: 43 },
    { assignmentNumber: 6, marks: 40 },
    { assignmentNumber: 7, marks: 60 },
    { assignmentNumber: 8, marks: 42 },
    
];


const Statistics = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='font-bold text-center text-2xl'>Statistics</h1>
            <AreaChart width={600} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="assignmentNumber" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </div>
    );
};

export default Statistics;