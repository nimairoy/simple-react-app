import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Rechart = () => {

    const students = [
        {
          id: 1,
          name: 'Alice',
          chem: 85,
          phy: 90,
          math: 95
        },
        {
          id: 2,
          name: 'Bob',
          chem: 70,
          phy: 80,
          math: 75
        },
        {
          id: 3,
          name: 'Charlie',
          chem: 90,
          phy: 80,
          math: 85
        },
        {
          id: 4,
          name: 'David',
          chem: 80,
          phy: 85,
          math: 90
        },
        {
          id: 5,
          name: 'Emily',
          chem: 95,
          phy: 90,
          math: 85
        },
        {
          id: 6,
          name: 'Frank',
          chem: 75,
          phy: 70,
          math: 80
        },
        {
          id: 7,
          name: 'Gina',
          chem: 80,
          phy: 85,
          math: 95
        },
        {
          id: 8,
          name: 'Harry',
          chem: 90,
          phy: 80,
          math: 75
        },
        {
          id: 9,
          name: 'Irene',
          chem: 85,
          phy: 90,
          math: 85
        },
        {
          id: 10,
          name: 'Jack',
          chem: 70,
          phy: 75,
          math: 80
        },
        {
          id: 11,
          name: 'Katie',
          chem: 80,
          phy: 85,
          math: 95
        },
        {
          id: 12,
          name: 'Liam',
          chem: 95,
          phy: 90,
          math: 80
        }
      ];
      

    return (
        <div className='px-8'>
           <LineChart
            width={1000}
            height={300}
            data={students}
           >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
           <Tooltip />
           <Legend />
           <Line type="monotone" dataKey="chem" stroke="#8884d8" activeDot={{ r: 8 }} />
           <Line type="monotone" dataKey="math" stroke="#82ca9d" />
            <Line type="monotone" dataKey="phy" stroke="#83fb28" />
           </LineChart>
        </div>
    );
};

export default Rechart;