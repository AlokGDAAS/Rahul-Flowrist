import React from "react";
import Brand_name from "./Brand_name";
import '../Brand_name.css'

const Navbar = () => {
  return (
    <div>
      <div className="p-2 bg-[var(--primary)]"></div>
      <div className="bg-[var(--ternary)]">
        <div className="text-center text-white font-bold py-2 mx-4">
          <div className="flex justify-between items-center text-sm md:text-base">
            <p>GSTIN: 09KFUPS6356J1Z5</p>
            <div>
              <p>Mobile : 8279714800</p>
              <p>Mobile : 8266918039</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
