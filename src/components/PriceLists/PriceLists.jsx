import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceLists = () => {
    const [prices, setPrices] = useState([]);
    useEffect(()=>{
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    },[])


    return (
        <div className='grid md:grid-cols-3 gap-4 py-6 px-8'>
            {
                prices.map(price => <PriceCard 
                price={price}
                key={price.id}
                ></PriceCard>)
            }
        </div>
    );
};

export default PriceLists;