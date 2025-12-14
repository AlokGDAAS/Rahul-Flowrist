import React from "react";
import Image_slide from "./Image_slide";

const Hero = () => {
  return (
    <div>
      <div className="mb-1 bg-blue-100 rounded shadow-lg ">
        <div>
          <img
            src="./Other/banner_pic_no_bg.png"
            alt="banner"
            className="md:h-20 mx-auto h-15"
          />
        </div>

        <div className="bg-blue-800 text-white md:text-lg text-xs font-bold text-center rounded-b tracking-wider pb-2 pt-1">
          <p>Add : Manik Chowk , Agra Road Aligarh , 202001</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
