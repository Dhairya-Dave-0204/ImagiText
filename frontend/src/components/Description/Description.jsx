import React from "react";
import { motion } from "motion/react";
import { assets } from "../../assets/assets";

function Description() {
  return (
    <motion.div className="flex flex-col items-center justify-center p-6 my-24 md:px-28"
      initial={{opacity: 0.2, y: 100}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
    >
      <h1 className="mb-2 text-3xl font-semibold sm:text-4xl">
        Create AI images
      </h1>
      <p className="mb-8 text-gray-500">Turn your imagination into visuals</p>

      <div className="flex flex-col items-center justify-center gap-5 md:gap-14 xl:flex-row">
        <img
          src={assets.sample_img_1}
          alt=""
          className="rounded-lg w-80 xl:w-96"
        />

        <div className="max-w-2xl">
          <h2 className="mb-4 text-3xl font-medium">Introducing the AI-Powered text to image generator</h2>
          <p className="mb-4 text-gray-600">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. Imagine it, describe it, and watch it come to life
            instantly.
          </p>
          <p className="text-gray-600"> 
            Simply type in a text prompt, and our cutting-edge AI will generate
            high-quality images in seconds. From product visuals to character
            designs and portraits, even concepts that don't yet exist can be
            visualized effortlessly. Powered by advanced AI technology, the
            creative possibilities are limitless!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Description;
