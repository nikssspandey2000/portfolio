import React from "react";
import { Edu, Projects, Work } from "./index";

function Posts() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className=" min-h-screen overflow-y-auto bi-sliders2-vertical bg-primary">
      <div className="hidden md:flex flex-col md:fixed font-montserrat text-center text-[12px] z-999">
        <div onClick={() => scrollTo("work")}>
          <div className="bg-[#e216129e] text-white p-4 mb-1  translate-x-[-15px] duration-300 ease-in hover:translate-x-0 hover:bg-[#e21612e7] leading-[14px]">
            W<br />O<br />R<br />K<br />
          </div>
        </div>
        <div onClick={() => scrollTo("projects")}>
          <div className="bg-[#e216129e] text-white p-4 mb-1  translate-x-[-15px] duration-300 ease-in hover:translate-x-0 hover:bg-[#e21612e7] leading-[14px]">
            P<br />R<br />O<br />J<br />E<br />C<br />T<br />
          </div>
        </div>

        <div onClick={() => scrollTo("edu")}>
          <div className="bg-[#e216129e] rounded-br-full text-white p-4 mb-1  translate-x-[-15px] duration-300 ease-in hover:translate-x-0 hover:bg-[#e21612e7] leading-[14px]">
            E<br />D<br />U<br />C<br />A<br />T<br />I<br />O<br />N
          </div>
        </div>
      </div>

      <div className="mt-[70px]" id="work">
        <Work />
      </div>
      <div className="projects mt-[70px]" id="projects">
        <Projects />
      </div>

      {/*----- edu -----*/}
      <div className="flex flex-wrap p-6 mt-[70px]" id="edu">
        <Edu />
      </div>
    </div>
  );
}

export default Posts;
