import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../index";
import {
  PiInstagramLogoLight,
} from "react-icons/pi";

import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <div className="flex flex-row items-center justify-between bg-[#ffe8bfed] text-green-900/80 py-4 lg:pl-16 shadow-t-sm shadow-inner shadow-black/15 font-montserrat">
        <Link to="/" className="flex justify-center m-2">
          <Logo className="  object-contain p-4" />
        </Link>
        <div className="flex flex-col md:flex-row w-[85%] justify-evenly items-center">
          <div className="flex flex-col justify-center items-center">
            <nav className="hidden md:flex">
              <ul className="flex justify-end items-end p-4 gap-10">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `duration-200 relative inline cursor-pointer text-md font-small before:bg-[#E21412]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100  ${
                        isActive ?  "text-[#E21412]" : "text-[#000000a2]"
                      }`
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `duration-200 relative inline cursor-pointer text-md font-small before:bg-[#E21412]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ${
                        isActive ?  "text-[#E21412]" : "text-[#000000a2]"
                      }`
                    }
                    to="/about"
                  >
                    About Me
                  </NavLink>
                </li>
              </ul>
            </nav>
            <p className="text-[14px] mt-2">&copy; 2024 My Quirky Portfolio. Designed with ❤️ by Ashwin Sunuwar.</p>
           
          </div>
          <div>
          

            {/* socials-------- */}

            <div className="flex gap-3 mt-2 items-start justify-center">
              <button
                className="middle none relative h-10 max-h-[18px] w-10 max-w-[18px] p-5 rounded-full text-center font-sans text-xs font-medium uppercase text-red-600 shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:scale-105"
                type="button"
                data-ripple-light="true"
                onClick={() =>
                  window.open("https://www.instagram.com/ahwinsunuwar/")
                }
              >
                <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                  <PiInstagramLogoLight size={30} />
                </span>
              </button>

              <button
                className="middle none relative h-10 max-h-[18px] w-10 max-w-[18px] p-5 rounded-full text-center font-sans text-xs font-medium uppercase text-orange-500 shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:scale-105"
                type="button"
                data-ripple-light="true"
                onClick={() => window.open("mailto:ashwinsunuwarr2@gmail.com")}
              >
                <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                  <SiGmail size={25} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
