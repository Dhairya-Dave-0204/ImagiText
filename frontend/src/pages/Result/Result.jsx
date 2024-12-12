import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { use } from "react";

function Result() {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("")

  const onSubmitHandler = async (e) => {
    
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col min-h-[90vh] justify-center items-center">
      <div>
        <div className="relative">
          <img src={image} alt="" className="max-w-sm rounded" />

          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? "w-full transition-all duration-[10s]" : "w-0"}`} />
        </div>

        <p className={!loading ? "hidden" : ""}>Loading....</p>
      </div>

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl text-sm text-white bg-neutral-500 p-0.5 mt-10 rounded-full">
          <input
            onChange={e => setInput(e.target.value)} value={input}
            type="text"
            name="generate"
            id="generate"
            placeholder="Describe what you want to generate"
            className="flex-1 ml-8 bg-transparent outline-none max-sm:w-20 placeholder-color"
          />

          <button
            type="submit"
            className="px-10 py-3 rounded-full bg-zinc-900 sm:px-16"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex flex-wrap justify-center gap-2 text-sm text-white p-0.5 mt-10 rounded-full">
          <p onClick={() => {setIsImageLoaded(false)}} className="px-8 py-3 text-black bg-transparent border rounded-full cursor-pointer border-zinc-900">
            Generate another
          </p>
          <a
            href={image}
            download
            className="px-10 py-3 rounded-full cursor-pointer bg-zinc-900"
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
}

export default Result;
