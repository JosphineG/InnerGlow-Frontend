import React from "react";
import Link from "next";
import useAuthToken from "../../../hooks/useAuth";
function ChatNav({ name }) {
  const { clearAuthToken } = useAuthToken();
  const handleLogout = () => {
    clearAuthToken();
    window.location.href = "/chatlogin";
  };
  return (
    <header className="w-screen flex justify-between items-center gap-2 px-4 md:px-20 py-4 fixed z-[999] h-[80px] shadow-lg bg-[#e9f1ff]">
      <h1>InnerGlow</h1>
      <nav className="flex justify-between items-center gap-4 md:gap-20 capitalize">
        <a href="/community/articles">articles</a>
        <a href="/history">history</a>
        <h3 className="text-lg p-2 rounded-lg px-4">
          Hi, <span className="text-blue-500 font-semibold">{name}</span>
        </h3>
        <button
          onClick={handleLogout}
          className="bg-[#6495ED47] p-2 rounded-lg px-4"
        >
          <span className="text-blue-500 font-semibold">Logout</span>
        </button>
      </nav>
    </header>
  );
}

export default ChatNav;
