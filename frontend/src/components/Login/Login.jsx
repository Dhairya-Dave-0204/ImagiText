import React, { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

function Login() {

    const { setShowLogin } = useContext(AppContext)
    
  const [state, setState] = useState("Sign In");
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "unset";
    }
  }, [])

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <motion.form className="relative p-10 bg-white rounded-xl text-slate-500"
        initial={{opacity: 0.2, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.3}}
        viewport={{once: true}}
      >
        <h1 className="mb-2 text-2xl font-semibold text-center text-neutral-700">
          {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        {state !== "Sign In" && (
          <div className="flex items-center gap-2 px-4 py-2 mt-5 border rounded-full">
            <img src={assets.profile_icon} alt="" width={25} />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="text-sm outline-none"
            />
          </div>
        )}

        <div className="flex items-center gap-2 px-6 py-2 mt-5 border rounded-full">
          <img src={assets.email_icon} alt="" />
          <input
            type="email"
            placeholder="Email id"
            required
            className="text-sm outline-none"
          />
        </div>

        <div className="flex items-center gap-2 px-6 py-2 mt-5 border rounded-full">
          <img src={assets.lock_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            required
            className="text-sm outline-none"
          />
        </div>

        <p className="my-4 text-sm text-blue-600 cursor-pointer">
          Forgot password?
        </p>

        <button className="w-full py-2 text-white bg-blue-600 rounded-full">
          {state === "Sign In" ? "Login" : "Create Account"}
        </button>

        {state === "Sign In" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span onClick={() => setState("Sign Up")} className="text-blue-600 cursor-pointer">Sign Up</span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Aready have an account? {" "}
            <span onClick={() => setState("Sign In")} className="text-blue-600 cursor-pointer">Sign In</span>
          </p>
        )}

        <img
          src={assets.cross_icon}
          alt=""
          onClick={() => setShowLogin(false)}
          className="absolute cursor-pointer top-5 right-5"
        />
      </motion.form>
    </div>
  );
}

export default Login;
