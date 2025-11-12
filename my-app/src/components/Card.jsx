import React, { useState, useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import { MdOutlineCall } from "react-icons/md";

const Card = ({ img, name, alt = "" }) => {
  const [open, setOpen] = useState(false);
  const phoneNumber = "+918279714800"; // your number here
  const whatsappMessage = "Hello! I’d like to know more about your services.";

  // Handle browser back button
  useEffect(() => {
    if (open) {
      // push fake state for modal
      window.history.pushState({ modal: true }, "");
    }

    const handlePop = () => {
      if (open) {
        setOpen(false); // close modal instead of leaving site
      }
    };

    window.addEventListener("popstate", handlePop);

    return () => {
      window.removeEventListener("popstate", handlePop);
    };
  }, [open]);

  return (
    <>
      <div className="  rounded h-fit  border border-gray-400 p-1 shadow-lg bg-blue-100">
        <div>
          <img
            src={img}
            alt={alt}
            className="md:w-80 rounded-t cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>

        <div className="flex justify-center items-end">
          <p className="text-gray-600 font-bold text-lg text-center">{name}</p>
        </div>
        {/* contact */}
        <div className="flex justify-between px-2 text-white py-4">
          <a href={`tel:${phoneNumber}`}>
            <div className="flex items-center gap-2 bg-blue-800 px-4 py-2 rounded-full cursor-pointer shadow-lg">
              <MdOutlineCall className="text-xl" />
              <p className=" font-bold">Call Us</p>
            </div>
          </a>
          <a
            href={`https://wa.me/${phoneNumber.replace(
              /[^0-9]/g,
              ""
            )}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 bg-[#25D366] px-4 py-2 rounded-full cursor-pointer shadow-lg">
              <SiWhatsapp className="text-xl" />
              <p className=" font-bold">WhatsApp</p>
            </div>
          </a>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50">
          <button
            className="absolute top-4 left-4 text-white text-3xl font-bold"
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
            className="md:h-[95vh] w-full md:w-auto shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default Card;
