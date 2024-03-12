import React from "react";
import ChatCard from "../components/ChatCard";
import {
  InfiniteMovingCardsPrevious30Days,
  InfiniteMovingCardsPrevious7Days,
  InfiniteMovingCardsToday,
} from "../components/MovingCard";

function page() {
  return (
    <div className="justify-between flex flex-col">
      <header className="w-screen flex justify-between items-center gap-2 px-4 md:px-20 py-4 fixed z-[9999] h-[80px] shadow-lg bg-[#e9f1ff]">
        <h1>InnerGlow</h1>
        <nav className="flex justify-between items-center gap-4 md:gap-20 capitalize">
          <a href="">articles</a>

          <h3 className="bg-[#6495ED47] p-2 rounded-lg px-4">
            Hi, <span className="text-blue-500 font-semibold">Josphine</span>
          </h3>
        </nav>
      </header>
      <div className="pt-[100px] md:px-[120px] px-4 flex flex-1 flex-col space-y-4 p-3  mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-500">Today</h3>
          <div className="grid grid-flow-col overflow-x-auto gap-4 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            <InfiniteMovingCardsToday />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-500">
            Previous 7 Days
          </h3>
          <div className="grid grid-flow-col overflow-x-auto gap-4 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            <InfiniteMovingCardsPrevious7Days />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-500">
            Previous 30 Days
          </h3>
          <div className="grid grid-flow-col overflow-x-auto gap-4 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            <InfiniteMovingCardsPrevious30Days />
          </div>
        </div>
      </div>
      <footer className="w-full  mt-4 text-center text-gray-500 text-sm shadow-lg shadow-black px-4 pt-4 py-4 sm:mb-0  bg-[#e9f1ff] md:px-[150px] sticky">
        <p>
          InnerGlow AI 2024.Al rights reserved.Terms of services and Privacy
          policy
        </p>
      </footer>
    </div>
  );
}

export default page;
