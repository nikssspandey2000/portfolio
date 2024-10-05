import React from "react";
import { Link } from "react-router-dom";
function Projects() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 md:px-16">
          <h2 className="text-4xl font-bold mb-8 text-center animate-rtl3 font-montserrat">
            🚀 Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn5 lg:px-[4rem]">
            <div className="group bg-[#fbf8ea] rounded-lg shadow-md overflow-hidden font-montserrat">
              <Link
                to="https://github.com/AshwinSunuwarr2/production-grade-project.git"
                target="_blank"
              >
                <img
                  src="https://img.freepik.com/premium-vector/blog-concept-with-isometric-view_23-2147997085.jpg?w=740"
                  alt="Project Image"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </Link>
              <div className="p-6 ">
                <h3 className="text-2xl font-bold mb-4">Blog App</h3>
                <p className="text-gray-700">
                  Blog app is a complete react app using Vite and Tailwind CSS
                  with appwrite service for backend. Redux toolkit, React Hook
                  Form and production grade components are implemented on this
                  one.
                </p>
                <p className="pt-2 font-mono text-gray-600 text-sm">
                  -React, JS, Vite, Appwrite, RTK...
                </p>
                <Link
                  to="https://github.com/AshwinSunuwarr2/production-grade-project.git"
                  target="_blank"
                  className="block text-blue-600 hover:underline mt-4"
                >
                  Check on GitHub! 🚀
                </Link>
              </div>
            </div>
            <div className="group bg-[#fbf8ea] rounded-lg shadow-md overflow-hidden font-montserrat ">
              <Link
                to="https://github.com/AshwinSunuwarr2/major-project.git"
                target="_blank"
              >
                <img
                  src="https://img.freepik.com/free-vector/abstract-flat-face-recognition-background_23-2148189134.jpg?t=st=1710082557~exp=1710086157~hmac=616244771a5eb13ea54a87441b49e3b519cde8d0d376fef6b8026c0f21bc2ee3&w=740"
                  alt="Project Image"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </Link>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Criminal Face Recognition System
                </h3>
                <p className="text-gray-700">
                  This project is so cool that Our team was invited to showcase
                  the project by externals!{" "}
                </p>{" "}
                <p className="pt-2 font-mono text-gray-600 text-sm">
                  -Python, MySQL, OpenCV, Tkinter library...
                </p>
                <Link
                  to="https://github.com/AshwinSunuwarr2/major-project.git"
                  target="_blank"
                  className="block text-blue-600 hover:underline mt-4"
                >
                  Check on GitHub! 🚀
                </Link>
              </div>
            </div>
            <div className="group bg-[#fbf8ea] rounded-lg shadow-md overflow-hidden font-montserrat ">
              <Link
                to="https://github.com/AshwinSunuwarr2/FreeLwithKhalti.git"
                target="_blank"
              >
                <img
                  src="https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?t=st=1710083493~exp=1710087093~hmac=e7929d3a38249858b8d9e18e510ca9796fd22b8e61d917e79fd07a89da8d0489&w=996"
                  alt="Project Image"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </Link>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">FreeL</h3>
                <p className="text-gray-700">
                  FreeL is a platform that connects freelancers with clients.
                  Its an android app.
                </p>
                <p className="pt-2 font-mono text-gray-600 text-sm">
                  -Flutter, Dart, Firebase...
                </p>
                <Link
                  to="https://github.com/AshwinSunuwarr2/FreeLwithKhalti.git"
                  target="_blank"
                  className="block text-blue-600 hover:underline mt-4"
                >
                  Check on GitHub! 🚀
                </Link>
              </div>
            </div>
            <div className="group bg-[#fbf8ea] rounded-lg shadow-md overflow-hidden font-montserrat">
              <img
                src="https://img.freepik.com/free-vector/web-hosting-isometric-composition-with-icons-website-windows-buttons-desktop-computer-with-people-vector-illustration_1284-80933.jpg?t=st=1710249730~exp=1710253330~hmac=23073d71b5b1dde902fe73f8e34fa4c2e136cc0e80b4652a8bda1d74b367c4ea&w=740"
                alt="Project Image"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Wordpress Websites</h3>
                <p className="text-gray-700">
                  I got opportunities to work on following websites
                </p>
                <Link
                  to="https://nepaliflimcampus.acsskillsassessment.com/"
                  target="_blank"
                  className="block text-blue-600 hover:underline mt-4"
                >
                  Nepal Film Campus 🚀
                </Link>
                <Link
                  to="https://superassignmenthelp.com/"
                  target="_blank"
                  className="block text-blue-600 hover:underline mt-4"
                >
                  Super Assignment Help 🚀
                </Link>
              </div>
            </div>
            <div className="group bg-[#fbf8ea] rounded-lg shadow-md overflow-hidden font-montserrat">
              <Link to="#">
                <img
                  src="https://img.freepik.com/free-vector/modern-payment-receipt-flat-style_23-2147912324.jpg?t=st=1710083774~exp=1710087374~hmac=986fc7586f43c6a09ae6b475517d44394bf5410c4c581edf0e99653ee6ea6803&w=740"
                  alt="Project Image"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </Link>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">eBilling</h3>
                <p className="text-gray-700">
                  This project was the minor project that effectively
                  implemented the CRUD operation on a database.
                </p>
                <p className="pt-2 font-mono text-gray-600 text-sm">
                  -Java, MySQL...
                </p>
                <Link
                  to="#"
                  className="block text-gray-400 mt-4 cursor-not-allowed"
                >
                  Check on GitHub! 🚀
                </Link>
              </div>
            </div>
            <div className="group bg-[#fbf8ea] rounded-lg shadow-md overflow-hidden font-montserrat">
              <Link
                to="https://github.com/AshwinSunuwarr2?tab=repositories"
                target="_blank"
              >
                <img
                  src="https://img.freepik.com/premium-vector/student-using-mobile-app-digital-vector-illustration_65141-331.jpg?w=740"
                  alt="Project Image"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </Link>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Miscellaneous</h3>
                <p className="text-gray-700">
                  Here are the projects like tic-tac-toe, stopwatch, weather
                  app, news app and so on that I have done in my free time.
                </p>
                <p className="pt-2 font-mono text-gray-600 text-sm">
                  -HTML, CSS, React, Native,JS, Python, C#, Unity...
                </p>
                <Link
                  to="https://github.com/AshwinSunuwarr2?tab=repositories"
                  target="_blank"
                  className="block text-blue-600 hover:underline mt-4"
                >
                  Check on GitHub! 🚀
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
