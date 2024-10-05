import React from "react";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";


function Home() {
  // particles

    useEffect(() => {
        const initializeParticles = async () =>{
            await initParticlesEngine(async (engine)=> await loadSlim(engine))
        };
        initializeParticles();
    },[])

    // const particlesLoaded = (container) => {
    //     console.log(container);
    // };


  // not particles
  return (
    <div className="bg-[#f1ebd080] flex items-center h-screen">
     <Particles className="z-[-1]"
            id="tsparticles"
            // particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#F1EBD0",
                    },
                },
                fpsLimit: 165,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#F8371D",
                    },
                    links: {
                        color: "#F8371D",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}           
/>
          <section className="z-99 w-full bg-no-repeat bg-cover bg-fixed bg-center py-32 bg-leaf bg-blend-darken h-[50%]">
            
        <div className="mx-auto text-center text-white">
          <div className="flex flex-row justify-center items-center">
          <img src="https://readme-typing-svg.herokuapp.com?font=Montserrat&weight=500&size=36&pause=1000&color=F7F7F7&center=true&vCenter=true&random=false&width=600&lines=%E2%98%98%EF%B8%8F+Welcome+to+My++Portfolio+%E2%98%98%EF%B8%8F;You're+Amaging+%26+Loved++%F0%9F%91%91" alt="Typing SVG" />
          </div>
          <p className="text-lg mt-4 mb-12 px-2 font-montserrat">
          I code, I design, I drink coffee🍵 (a lot), and sometimes, I even sleep! 
          </p>
          <Link
            to="/contact"
            className=" bg-[#e21612b4] text-white py-4 px-6 md:px-8 rounded-full hover:bg-[#e21612e0] mr-2 font-montserrat text-sm"
          >
            HIRE ME
          </Link>
          <a
            href="ashwinCV.pdf"
            target="_blank"
            className=" bg-[#e21612b4] text-white py-4 px-6 md:px-8  rounded-full hover:bg-[#e21612e0] ml-2 font-montserrat text-sm"
            download
          >
            DOWNLOAD CV
          </a>
        </div>

      </section>
          
        
    </div>

    // parallax effect -----------
    // <>
    //   <Parallax pages={2}>
    //     <ParallaxLayer
    //       offset={0}
    //       speed={0.5}
    //       style={{ backgroundColor: "green" }}
    //     />
    //     <ParallaxLayer className="flex justify-center items-center" offset={0} >
    //       <h2>Hello dev!</h2>
    //     </ParallaxLayer>
    //     <ParallaxLayer
    //       offset={1}
    //       speed={0.5}
    //       factor={2}
    //       style={{ backgroundColor: "orange" }}/>
      
    //   <ParallaxLayer className="flex justify-center items-center" offset={1}>
    //       <h2 className="text-3xl text-center m-auto">Bye dev!</h2>
    //     </ParallaxLayer>
    //     </Parallax>
    // </>
  );
}

export default Home;
