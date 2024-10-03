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
        <div className=" w-full flex flex-col justify-center items-center py-6 px-4 mb-8">
        
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
