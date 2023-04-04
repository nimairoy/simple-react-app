import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const Phone = () => {
    const [phones, setPhones] = useState([]);
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
            const phonesData = loadedData.map(phone => {
                console.log(phone)
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const phoneInfo = {
                     name: phone.phone_name,
                     price: price
                }
                return phoneInfo;
            });
            console.log(phonesData)
            setPhones(phonesData)
        })

    }, [])
    return (
        <div className='px-12 mx-auto'>
            <BarChart 
            width={1000} 
            height={300}
            data={phones}  

            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis ></YAxis>
            <Bar dataKey="price" fill="#8884d8" >
            </Bar>
            </BarChart>
        </div>
    );
};

export default Phone;