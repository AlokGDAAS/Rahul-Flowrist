import React, { useState } from 'react';

const Card = ({ img, name, alt = "" }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='p-2 bg-blue-100 rounded-lg h-fit'>
        <div>
          <img
            src={img}
            alt={alt}
            className='md:w-80 rounded-lg cursor-pointer'
            onClick={() => setOpen(true)}
          />
        </div>

        <div className='flex justify-center items-end'>
          <p className='text-gray-600 font-bold text-lg text-center'>{name}</p>
        </div>
      </div>

      {open && (
        <div className='fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50'>
          
          {/* Close Button */}
          <button
            className='absolute top-4 left-4 text-white text-3xl font-bold'
            onClick={() => setOpen(false)}
          >
            ×
          </button>

          {/* Image Preview */}
          <img
            src={img}
            alt={alt}
            className='w-full  rounded-lg shadow-lg'
          />
        </div>
      )}
    </>
  );
};

export default Card;
