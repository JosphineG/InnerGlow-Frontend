"use client";
import React from "react";
import Donut from "./Donut";
import useAuthToken from "../../../hooks/useAuth";
function LandingPage() {
  const { getItem } = useAuthToken();
  const { chatid } = getItem();

  return (
    <div className="w-screen h-screen flex-col flex justify-center items-center overflow-x-hidden">
      <div className="relative w-full h-[300px flex  justify-center items-center flex-col text-[#0C5CE5] pt-[180px] smaller gap-2">
        <h1 className="text-[2.25rem] smallertext text-center font-extrabold  w-full leading-[35px] md:leading-[50px]">
          Welcome To InnerGlow
          <br />
          Your Compassionate Companion
        </h1>
        <p className="mb-8 mt-2 text-lg text-bold">
          Be gentle and kind to your Mind
        </p>
        <a
          href={`/chat/${chatid}`}
          className="w-full justify-center items-center flex mb-4 md:mb-20"
        >
          <button className="px-20 py-4 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-400 hover:px-24 md:w-[30%] ">
            Get Started
          </button>
        </a>
        <div className="bg-[#6495ED43] w-full flex flex-col justify-center items-center py-6 px-4 mb-8">
          <div
            className="w-full flex-col justify-center items-center text-center  md:w-[70%] ;
]"
          >
            <h2 className="text-3xl mb-2 font-bold">About InnerGlow</h2>
            <p className="w-full text-left text-gray-700 text-xl">
              {`In today\'s interconnected world you can be surrounded by people,
              but still feel lonely and trusting others with our vulnerabilities
              is still hard.`}
            </p>
            <p className="text-left mt-2 text-gray-700 text-xl">
              <span className="text-blue-600 font-bold">InnerGlow</span> is an
              empathetic chatbot that serves as a confidant, providing a safe
              space for users to openly express their thoughts and emotions and
              extends a comforting hand helping you prioritize your mental
              health and well-being in a non-judgemental way.
            </p>
          </div>
        </div>
        <div className="absolute left-[-180px] z-[-1] top">
          <Donut />
        </div>
        <div className="absolute right-[-180px] z-[-1] top">
          <Donut />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
