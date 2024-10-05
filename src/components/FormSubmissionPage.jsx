import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
  --color1: #1f4659;
  --color2: #1f4659;
  perspective: 1000px;
  padding: 1em 1em;
  background: linear-gradient(var(--color1), var(--color2));
  border: none;
  outline: none;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #fff;
  text-shadow: 0 10px 10px #000;
  cursor: pointer;
  transform: rotateX(50deg) rotateZ(20deg);
  transform-style: preserve-3d;
  transition: transform 0.5s;

  &:before {
    content: "";
    width: 100%;
    height: 15px;
    background-color: var(--color2);
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotateX(90deg);
    transform-origin: bottom;
  }

  &:after {
    content: "";
    width: 15px;
    height: 100%;
    background-color: var(--color1);
    position: absolute;
    top: 0;
    right: 0;
    transform: rotateY(-90deg);
    transform-origin: right;
  }

  &:hover {
    transform: rotateX(30deg) rotateZ(0);
  }
`;
function FormSubmissionPage() {
    const navigate = useNavigate();
  return (
    <>
      <section className="bg-center bg-cover bg-no-repeat bg-[url('https://as2.ftcdn.net/v2/jpg/02/72/31/41/1000_F_272314124_oVQMMZWHwOPYsmCASwjRcFuZhSa4jqzO.jpg')] bg-gray-700 bg-blend-multiply h-screen">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            THANK YOU😊
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            I'll be in touch with you as soon as possible. Wish we can talk futhermore.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <StyledButton
                style={{ "--color1": "#1F4659", "--color2": "#4B6A7A", "marginTop": "20px" }}
                onClick={() => navigate("/")}
              >
                Back to Home
              </StyledButton>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormSubmissionPage;
