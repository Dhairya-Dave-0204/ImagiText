import React from "react";
import { assets } from "../../assets/assets";

function GenerateBtn() {
  return (
    <div className="pb-16 text-center">
      <h1 className="py-6 mt-4 text-2xl font-semibold md:text-3xl lg:text-4xl text-neutral-800 md:py-16">See the magic! Try now</h1>

      <button className="inline-flex items-center gap-2 px-12 py-3 m-auto text-white transition-all duration-500 bg-black rounded-full hover:scale-105">
        Generate Images
        <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </div>
  );
}

export default GenerateBtn;
