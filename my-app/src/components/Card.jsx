import React from 'react'

const Card = ({img,name,alt=""}) => {
  return (
    <div className='p-2 bg-blue-100 rounded-lg h-fit'>
        <div>
            <img src={img} alt={alt} className='md:w-80 rounded-lg '/>
        </div>
        <div className='flex justify-center items-end'>
            <p className='text-gray-600 font-bold text-lg text-center'>{name}</p>
            
        </div>
    </div>
  )
}

export default Card