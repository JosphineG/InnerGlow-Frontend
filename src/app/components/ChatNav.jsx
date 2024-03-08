import React from "react";
import Link from "next";
function ChatNav() {
  return (
    <header className="w-screen flex justify-between items-center gap-2 px-4 md:px-20 py-4 fixed z-[9999] h-[80px] shadow-lg bg-[#e9f1ff]">
      <h1>InnerGrow</h1>
      <nav className="flex justify-between items-center gap-4 md:gap-20 capitalize">
        <a href="">articles</a>
        <a href="">history</a>
        <h3 className="bg-[#6495ED47] p-2 rounded-lg px-4">
          Hi, <span className="text-blue-500 font-semibold">Josphine</span>
        </h3>
      </nav>
    </header>
  );
}

export default ChatNav;
