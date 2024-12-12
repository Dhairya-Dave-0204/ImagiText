import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

function Navbar() {
  const navigate = useNavigate();

  const { user } = useContext(AppContext)

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-32 sm:w-36 lg:w-56" />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-4 sm:gap-5">
            <button onClick={() => navigate("/buy")} className="flex items-center gap-2 px-4 bg-blue-100 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700">
                <img src={assets.credit_star} alt="" className="w-5"/>
                <p className="text-xs font-medium sm:text-sm">Credits left : 50</p>
            </button>
            
            <p className="pl-4 max-sm:hidden">Hi username</p>
            
            <div className="relative group">
                <img src={assets.profile_icon} alt="" className="w-10 drop-shadow"/>
                <div className="absolute top-0 right-0 z-10 hidden pt-12 text-black rounded-md group-hover:block">
                    <ul className="p-2 m-0 list-none bg-white border rounded-md text-start">
                        <li className="px-2 py-1 pr-10 cursor-pointer">Logout</li>
                    </ul>
                </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-lg font-medium sm:gap-5">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </p>
            <button className="py-2 text-white rounded-full bg-zinc-800 px-7 sm:px-10">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
