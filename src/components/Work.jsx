import React from "react";
import { Link } from "react-router-dom";
import working from "../assets/images/working.png";

function Work() {
  return (
    <div className="container mx-auto px-4 md:px-16">
      <h2 className="text-4xl font-bold mb-8 text-center font-montserrat animate-rtl2">
        💼 Work Experience
      </h2>

      <div
        className="mb-4 md:mb-0 w-full max-w-screen-lg mx-auto relative"
        style={{ height: "16em" }}
      >
        <div
          className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{
            "backgroundImage":
              "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src={working}
          className="absolute left-0 top-0 w-full h-full z-0 object-cover animate-fadeIn4"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <p
            className=" px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2 animate-rtl3"
          >
            Intern
          </p>
          <h2 className="text-xl md:text-4xl font-semibold text-gray-100 leading-tight animate-toTop3">
            Front-End Developer(React & Wordpress)
          </h2>
          <div className="flex mt-3">
            
            <div className="animate-toTop4">
              <Link to="https://yoddhalab.com/" target="_blank" className="font-semibold text-gray-200 text-sm hover:text-red-400/80 ">
                {" "}
                @Yoddha Lab Pvt. Ltd{" "}
              </Link>
              <p className="font-semibold text-gray-400 text-xs animate-toTop5"> Jan 2024 - Mar 2024 </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed">
       
 
        <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded max-w-[42rem]">
          I worked as a Front-End Developer at Yoddha Lab Pvt. Ltd. for 3-months. There I got the chance to enhance my skillset to another level.
          I've worked on multiple projects and gained valuable experience.
        </div>

        
      </div>
    </div>
  );
}

export default Work;
