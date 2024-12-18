import React from "react";
import { motion } from "motion/react";
import { assets, testimonialsData } from "../../assets/assets";

function Testimonial() {
  return (
    <motion.div className="flex flex-col items-center justify-center py-12 my-20"
    initial={{opacity: 0.2, y: 100}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    >
      <h1 className="mb-2 text-3xl font-semibold sm:text-4xl">
        Customer Testimonials
      </h1>
      <p className="mb-12 text-gray-500">What our users say</p>

      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((testimonial, index) => (
            <div key={index} className="p-12 m-auto transition-all duration-300 border rounded-lg shadow-md cursor-pointer bg-white/20 w-80 hover:scale-105">
                <div className="flex flex-col items-center">
                    <img src={testimonial.image} alt="" className="rounded-full w-14"/>

                    <h2 className="mt-3 text-xl font-semibold">{testimonial.name}</h2>
                    <p className="mb-4 text-gray-500">{testimonial.role}</p>

                    <div className="flex mb-4">
                        {Array(testimonial.stars).fill().map((item, index) => (
                            <img key={index} src={assets.rating_star} alt="" />
                        ))}
                    </div>

                    <p className="text-sm text-center text-gray-600">{testimonial.text}</p>
                </div>
            </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonial;
