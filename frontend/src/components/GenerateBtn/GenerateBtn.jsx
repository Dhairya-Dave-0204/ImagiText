import React, { useContext } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

function GenerateBtn() {

  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("result");
    } else {
      setShowLogin(true);
    }
  };
  
  return (
    <motion.div className="pb-16 text-center"
    initial={{opacity: 0.2, y: 100}}
    whileInView={{opacity: 1, y: 0 }}
    transition={{duration: 1}}
    viewport={{once: true}}
    >
      <h1 className="py-6 mt-4 text-2xl font-semibold md:text-3xl lg:text-4xl text-neutral-800 md:py-16">See the magic! Try now</h1>

      <button onClick={onClickHandler} className="inline-flex items-center gap-2 px-12 py-3 m-auto text-white transition-all duration-500 bg-black rounded-full hover:scale-105">
        Generate Images
        <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </motion.div>
  );
}

export default GenerateBtn;
