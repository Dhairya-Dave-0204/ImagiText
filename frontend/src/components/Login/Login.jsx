import React, { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import axios from "axios";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

function Login() {
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);
  const [state, setState] = useState("Sign In");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Sign In") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
          toast.success("Logged in successfully");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
          toast.success("Logged in successfully");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <motion.form
        onSubmit={onSubmitHandler}
        className="relative p-10 bg-white rounded-xl text-slate-500"
        initial={{ opacity: 0.2, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <h1 className="mb-2 text-2xl font-semibold text-center text-neutral-700">
          {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        {state !== "Sign In" && (
          <div className="flex items-center gap-2 px-4 py-2 mt-5 border rounded-full">
            <img src={assets.profile_icon} alt="" width={25} />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email id"
            required
            className="text-sm outline-none"
          />
        </div>

        <div className="flex items-center gap-2 px-6 py-2 mt-5 border rounded-full">
          <img src={assets.lock_icon} alt="" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-600 cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Aready have an account?{" "}
            <span
              onClick={() => setState("Sign In")}
              className="text-blue-600 cursor-pointer"
            >
              Sign In
            </span>
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
