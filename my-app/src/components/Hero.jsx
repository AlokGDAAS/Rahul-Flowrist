import React from "react";
import Image_slide from "./Image_slide";

const Hero = () => {
  return (
    <div>
      <div className="w-[95vw] mx-auto mb-4 bg-blue-100 rounded shadow-lg">
        <div>
          <img
            src="./Other/banner_pic_no_bg.png"
            alt="banner"
            className=" w-11/12 mx-auto "
          />
        </div>

        <div className="bg-blue-800 text-white md:text-4xl text-xs font-bold text-center rounded-b tracking-wider pb-2 pt-1">
          <p>Add : Manik Chowk , Agra Road Aligarh , 202001</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
