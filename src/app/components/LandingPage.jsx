import React from "react";
import Donut from "./Donut";
function LandingPage() {
  return (
    <div className="w-screen h-screen flex-col flex justify-center items-center overflow-x-hidden">
      <div className="relative w-full h-[300px] flex  justify-center items-center flex-col text-[#0C5CE5] pt-4">
        <h1 className="text-3xl text-center">
          Welcome To InnerGlow
          <br />
          Your Compassionate Companion
        </h1>
        <p className="mb-8 mt-2">Be gentle and kind to your Mind</p>
        <button className="px-20 py-4 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-400 hover:px-24">
          Get Started
        </button>
        <div className="bg-[#6495ED43] w-full flex flex-col justify-center items-center mt-12 p-4">
          <div
            className="w-full flex-col justify-center items-center text-center  md:w-[600px] ;
]"
          >
            <h2 className="text-2xl mb-2">About InnerGrow</h2>
            <p className="w-full text-left ">
             { `In today\'s interconnected world you can be surrounded by people,
              but still feel lonely and trusting others with our vulnerabilities
              is still hard.`}n
            </p>
            <p className="text-left mt-2">
              <span className="text-blue-600 font-bold">InnerGlow</span> is an
              empathetic chatbot that serves as a confidant, providing a safe
              space for users to openly express their thoughts and emotions and
              extends a comforting hand helping you prioritize your mental
              health and well-being in a non-judgemental way.
            </p>
          </div>
        </div>
        <div className="absolute left-[-180px] z-[-1]">
          <Donut />
        </div>
        <div className="absolute right-[-180px] z-[-1]">
          <Donut />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
