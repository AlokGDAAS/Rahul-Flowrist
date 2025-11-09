import React from "react";
import Brand_name from "./Brand_name";
import '../Brand_name.css'

const Navbar = () => {
  return (
    <div>
      <div className="p-2 bg-[var(--primary)]"></div>
      <div className="bg-[var(--ternary)]">
        <p className="text-center">
          <Brand_name/>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
