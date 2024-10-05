import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../index";
import Mobilemenu from "./Mobilemenu";


import {
  PiInstagramLogoLight,
  PiLinkedinLogo,
  PiGithubLogoLight,
} from "react-icons/pi";

import { SiGmail } from "react-icons/si";
function Header() {
  return (
    <header className="sticky top-0 z-[999] font-montserrat">
      <nav>
        <div className="flex justify-around items-center bg-[#ffe7bf91] px-2 backdrop-blur-lg shadow-md h-24 m-auto">
          <Link
            to="/"
            className="hidden sm:flex justify-center "
          >
            <Logo className="object-contain p-4" />
          </Link>

          <div className="flex flex-row justify-between sm:w-[90%] lg:w-[60%] ml-5">
            <div className="md:hidden min-w-[250px]">
              <Mobilemenu/>
            </div>
            <ul className="hidden md:flex flex-row content-end items-end gap-6 lg:gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `duration-200 relative inline cursor-pointer text-md font-small before:bg-[#E21412]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ${
                      isActive ?  "text-[#E21412]" : "text-[#000000a2]"
                    } `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `duration-200 relative inline cursor-pointer text-md font-small before:bg-[#E21412]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ${
                      isActive ?  "text-[#E21412]" : "text-[#000000a2]"
                    } `
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `duration-200 relative inline cursor-pointer text-md font-small before:bg-[#E21412]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ${
                      isActive ?  "text-[#E21412]" : "text-[#000000a2]"
                    } `
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/posts"
                  className={({ isActive }) =>
                    `duration-200 relative inline cursor-pointer text-md font-small before:bg-[#E21412]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ${
                      isActive ?  "text-[#E21412]" : "text-[#000000a2]"
                    } `
                  }
                >
                  Work & Academics
                </NavLink>
              </li>
            </ul>

            <div>
              

              {/* socials-------- */}

              <div className="hidden md:flex gap-3">
                <button
                  className="middle none relative h-10 max-h-[35px] w-10 max-w-[35px] rounded-lg bg-pink-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:scale-105"
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
                  className="middle none relative h-10 max-h-[35px] w-10 max-w-[35px] rounded-lg bg-red-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:scale-105"
                  type="button"
                  data-ripple-light="true"
                  onClick={() =>
                    window.open("https://github.com/AshwinSunuwarr2")
                  }
                >
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <PiGithubLogoLight size={30} />
                  </span>
                </button>
                <button
                  className="middle none relative h-10 max-h-[35px] w-10 max-w-[35px] rounded-lg bg-green-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:scale-105"
                  type="button"
                  data-ripple-light="true"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/ashwin-sunuwar-648769229/"
                    )
                  }
                >
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <PiLinkedinLogo size={30} />
                  </span>
                </button>
                <button
                  className="middle none relative h-10 max-h-[35px] w-10 max-w-[35px] rounded-lg bg-amber-500 text-center font-sans text-xs font-medium uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:scale-105"
                  type="button"
                  data-ripple-light="true"
                  onClick={() =>
                    window.open("mailto:ashwinsunuwarr2@gmail.com")
                  }
                >
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <SiGmail size={25} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
