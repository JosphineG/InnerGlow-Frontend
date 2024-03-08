import React from "react";
import ChatCard from "../components/ChatCard";

function page() {
  return (
    <div>
      <header className="w-screen flex justify-between items-center gap-2 px-4 md:px-20 py-4 fixed z-[9999] h-[80px] shadow-lg bg-[#e9f1ff]">
        <h1>InnerGrow</h1>
        <nav className="flex justify-between items-center gap-4 md:gap-20 capitalize">
          <a href="">articles</a>

          <h3 className="bg-[#6495ED47] p-2 rounded-lg px-4">
            Hi, <span className="text-blue-500 font-semibold">Josphine</span>
          </h3>
        </nav>
      </header>
      <div className="pt-[100px] md:px-[150px] px-4">
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-500">Today</h3>
          <div className="grid grid-flow-col overflow-x-auto gap-4 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
