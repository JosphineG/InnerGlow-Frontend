import React, { useState } from "react";
import Link from "next";
import useAuthToken from "../../../hooks/useAuth";
function ChatNav({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(!isOpen);
  };
  const { clearAuthToken } = useAuthToken();
  const handleLogout = () => {
    clearAuthToken();
    window.location.href = "/chatlogin";
  };
  return (
    <header className="w-screen flex justify-between items-center gap-2 px-4 lg:px-20 py-4 fixed z-[999] h-[80px] shadow-lg bg-blue-500">
      <a href="/">
        <img
          src="/rafikiwellnesslogo.png"
          alt="Logo"
          className="mr-2 w-[200px] object-contain "
        />
        {/* <h1 className="text-white font-bold text-3xl">RafikiWellness</h1> */}
      </a>
      <nav className="lg:flex justify-center items-center gap-4 lg:gap-8  text-white hidden uppercase text-sm font-semibold ">
        <a href="/community/articles">Articles</a>
        <a href="/community/stories">Stories</a>
        <h3 className="text-lg p-2 rounded-lg px-4">
          Hi, <span className="text-white font-bold">{name}</span>
        </h3>
      </nav>
      <button
        onClick={handleLogout}
        className="bg-white p-2 rounded-lg px-4 hidden lg:flex"
      >
        <span className="text-blue-500 font-semibold">Logout</span>
      </button>
      {isOpen && (
        <div
          className="lg:hidden flex bg-blue-500 bg-gradient-to-b from-blue-500 to-violet-500 justify-center gap-[50px]  absolute w-[75vw] h-[100vh] flex-col items-start px-12 top-[90px] left-[-20px] shadow-lg rounded-r-[30px] transition-transform ease-in-out duration-700 z-[888] text-white text-sm font-semibold  uppercase"
          onClick={openNav}
        >
          <h3 className="text-lg  rounded-lg ">
            Hi, <span className="text-white font-bold capitalize">{name}</span>
          </h3>
          <a href="/community/articles">Articles</a>
          <a href="/stories">Stories</a>
          <button
            onClick={handleLogout}
            className="bg-white p-2 rounded-lg px-4"
          >
            <span className="text-blue-500 font-semibold">Logout</span>
          </button>{" "}
        </div>
      )}
      <div className="space-y-[5px] lg:hidden" onClick={openNav}>
        <div className="w-[25px] h-[3px] bg-white" />
        <div className="w-[25px] h-[3px] bg-white" />
        <div className="w-[25px] h-[3px] bg-white" />
      </div>
    </header>
  );
}

export default ChatNav;
