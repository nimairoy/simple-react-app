import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div className='bg-teal-300 p-6 rounded-lg flex flex-col'>
            <h1 className='text-center'><span className='text-5xl py-8 font-bold'>{price.prices}</span><span className='font-semibold text-xl'>/mon</span></h1>
            <h2 className='text-3xl my-4 font-bold text-center'>{price.name}</h2>
            <span className='font-bold mb-3'>Features:</span> <br />
            <ol className='list-decimal pl-8'>
                {
                    price.features.map((feature,idx) => <li key={idx}>{feature}</li>)
                }
            </ol>
            <div className="text-center">
                <button className='bg-orange-600 w-full mt-8 px-4 py-2 rounded-md hover:bg-white duration-500 hover:text-orange-600 text-white'>Buy Now</button>
            </div>
        </div>
    );
};

export default PriceCard;