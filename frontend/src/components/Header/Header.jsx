import React from "react";
import { assets } from "../../assets/assets";

function Header() {
  return (
    <div className="flex flex-col items-center justify-center my-20 text-center">
      <div className="inline-flex gap-2 px-6 py-1 text-center bg-white border rounded-full border-neutral-500 text-stone-500">
        <p>A top online text-to-image editor</p>
        <img src={assets.star_icon} />
      </div>

      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
        Turn text to <span className="text-blue-600">image</span>, in seconds.
      </h1>

      <p className="max-w-xl mx-auto mt-5 text-center">
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds – just type, and watch the magic happen.
      </p>

      <button className="flex w-auto px-12 mt-8 text-white bg-black sm:text-lg py-2.5 items-center gap-2 rounded-full">
        Generate Images <img src={assets.star_group} alt="" className="h-6" />
      </button>

      <div className="flex flex-wrap justify-center gap-3 mt-16">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              className="transition-all duration-300 rounded cursor-pointer hover:scale-105 max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt=""
              key={index}
              width={70}
            />
          ))}
      </div>

      <p className="mt-2 text-neutral-600">Generated images from ImagiText</p>
    </div>
  );
}

export default Header;
