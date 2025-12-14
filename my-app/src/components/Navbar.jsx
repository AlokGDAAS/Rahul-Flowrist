import React from "react";
import Brand_name from "./Brand_name";
import '../Brand_name.css'
import Hero from "./Hero";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-20">
      <div className="bg-[var(--ternary)]">
        <div className="text-center text-white font-bold py-1 mx-4">
          <div className="flex justify-between items-center text-xs md:text-base">
            <p>GSTIN: 09KFUPS6356J1Z5</p>
            <div>
              <p>Mobile : 8279714800</p>
              <p>Mobile : 8266918039</p>
            </div>
          </div>
        </div>
      </div>
      <Hero/>
    </div>
  );
};

export default Navbar;
