import React, { useState } from "react";
import Card from "../components/Card";
import {
  darbar_data,
  phool_bangla_data,
  singhasan_data,
  gate_data,
  jhoomar_data,
  jaimala_data,
  videos_data,
  jewellery_data
} from "../components/Data";
import Video_card from "../components/Video_card";

const Products = () => {
  // Define all categories here
  const categories = {
    darbaar: { head: "Darbaar", d: darbar_data },
    phool_bangla: { head: "Phool Bangla", d: phool_bangla_data },
    gate: { head: "Gate", d: gate_data },
    jhoomar: { head: "Jhoomar", d: jhoomar_data },
    singhasan: { head: "Singhasan", d: singhasan_data },
    jaimala: { head: "Jaimala", d: jaimala_data },
    jewellery: { head: "Jewellery", d: jewellery_data },
    videos: { head: "Videos", d: videos_data },
  };

  // Default state: Phool Bangla
  const [data, setData] = useState(categories.phool_bangla);

  return (
    <div className="bg-blue-400 py-2 rounded-lg w-[95vw] mx-auto px-2">
      {/* Category Buttons */}
      <div className="flex md:gap-20 gap-4 font-semibold text-gray-700 mb-4 justify-center px-4 py-4 mx-auto flex-wrap bg-green-300 rounded shadow-lg">
        <div
          className="bg-orange-500 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.phool_bangla)}
        >
          Phool Bangla
        </div>

        <div
          className="bg-orange-500 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.darbaar)}
        >
          Darbaar
        </div>

        <div
          className="bg-orange-500 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.gate)}
        >
          Gate
        </div>

        <div
          className="bg-orange-500 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.jhoomar)}
        >
          Jhoomar
        </div>

        <div
          className="bg-orange-500 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.singhasan)}
        >
          Singhasan
        </div>

        <div
          className="bg-orange-500 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.jaimala)}
        >
          Jaimala
        </div>

        <div
          className="bg-orange-500 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.jewellery)}
        >
          Jewellery
        </div>

        <div
          className="bg-orange-500 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.videos)}
        >
          Videos
        </div>
      </div>

      {/* Category Title */}
      <div>
        <h1 className="text-center mb-6 text-4xl font-bold text-gray-800">
          {data.head}
        </h1>
      </div>

      {/* Cards or Videos */}
      <div className="flex gap-8 flex-wrap justify-center">
        {data.head === "Videos"
          ? data.d.map((item) => (
              <Video_card
                key={item.id}
                src={item.src}
                poster={item.poster}
              />
            ))
          : data.d.map((item) => (
              <Card key={item.id} img={item.img} alt={item.alt} name={item.name} bg={item.bg} />
            ))}
      </div>
    </div>
  );
};

export default Products;


