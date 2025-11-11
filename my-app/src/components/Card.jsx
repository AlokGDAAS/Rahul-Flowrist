import React, { useState, useEffect } from 'react';

const Card = ({ img, name, alt = "" }) => {
  const [open, setOpen] = useState(false);

  // Handle browser back button
  useEffect(() => {
    if (open) {
      // push fake state for modal
      window.history.pushState({ modal: true }, "");
    }

    const handlePop = () => {
      if (open) {
        setOpen(false);   // close modal instead of leaving site
      }
    };

    window.addEventListener("popstate", handlePop);

    return () => {
      window.removeEventListener("popstate", handlePop);
    };
  }, [open]);

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
          
          <button
            className='absolute top-4 left-4 text-white text-3xl font-bold'
            onClick={() => {
              setOpen(false);
              window.history.back(); // remove fake history
            }}
          >
            ×
          </button>

          <img
            src={img}
            alt={alt}
            className='md:h-[95vh] w-full md:w-auto shadow-lg'
          />
        </div>
      )}
    </>
  );
};

export default Card;

