import React, { useState } from "react";
import Card from "../components/Card";
import { darbar_data, phool_bangla_data,singhasan_data,gate_data,jhoomar_data } from "../components/Data";

const Products = () => {
  // Define all categories here
  const categories = {
    darbaar: { head: "Darbaar", d: darbar_data },
    phool_bangla: { head: "Phool Bangla", d: phool_bangla_data },
    gate: { head: "Gate", d: gate_data },
    jhoomar: { head: "Jhoomar", d: jhoomar_data },
    singhasan: { head: "Singhasan", d: singhasan_data },
    jaimala: { head: "Jaimala", d: [] },
    jewellery: { head: "Jewellery", d: [] }
  };

  // Default state: Darbaar
  const [data, setData] = useState(categories.phool_bangla);

  return (
    <div>
      {/* Category Buttons */}
      <div className="flex gap-4 font-semibold text-gray-700 mb-4 md:justify-between md:w-10/12 w-11/12 mx-auto flex-wrap">
        <p
          className="bg-orange-300 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.phool_bangla)}
        >
          Phool Bangla
        </p>

        <p
          className="bg-orange-300 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.darbaar)}
        >
          Darbaar
        </p>

        <p className="bg-orange-300 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.gate)}
        >
          Gate
        </p>

        <p className="bg-orange-300 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.jhoomar)}
        >
          Jhoomar
        </p>

        <p className="bg-orange-300 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.singhasan)}
        >
          Singhasan
        </p>

        <p className="bg-orange-300 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.jaimala)}
        >
          Jaimala
        </p>

        <p className="bg-orange-300 px-4 py-1 rounded-full cursor-pointer"
          onClick={() => setData(categories.jewellery)}
        >
          Jewellery
        </p>
      </div>

      {/* Category Title */}
      <div>
        <h1 className="text-center pb-6 text-4xl font-bold text-gray-800">
          {data.head}
        </h1>
      </div>

      {/* Cards */}
      <div className="flex gap-8 flex-wrap justify-center">
        {data.d.map((item) => (
          <Card key={item.id} img={item.img} alt={item.alt} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Products;

