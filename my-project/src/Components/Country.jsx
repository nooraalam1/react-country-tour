import React from 'react';

const Country = ({country}) => {
    console.log(country)
    // console.log(country.name.common)

    return (
        <div className='bg-blue-300 m-4 p-5'>
            <h1 className='text-2xl'>Name: {country.name.common}</h1>
            <h1 className='text-2xl'>Continents: {country.continents}</h1>
            <h1 className='text-2xl'>Capital: {country.capital}</h1>
            <img src={country.flags.png}alt="" />
        </div>
    );
};

export default Country;