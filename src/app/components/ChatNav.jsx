import React from "react";
import Link from "next";
import useAuthToken from "../../../hooks/useAuth";
function ChatNav() {
<<<<<<< HEAD
  const { clearAuthToken } = useAuthToken();
=======
  const { clearAuthToken, getItem } = useAuthToken();
  const { chatid } = getItem();
>>>>>>> 40fd0a3f80cb794cd4698d5d4000a1e14ba97292
  const handleLogout = () => {
    clearAuthToken();
    window.location.href = "/chatlogin";
  };
  return (
    <header className="w-screen flex justify-between items-center gap-2 px-4 md:px-20 py-4 fixed z-[999] h-[80px] shadow-lg bg-[#e9f1ff]">
<<<<<<< HEAD
      <h1>InnerGlow</h1>
      <nav className="flex justify-between items-center gap-4 md:gap-20 capitalize">
        <a href="/community">articles</a>
=======
      <h1>
        {" "}
        <a href="/">InnerGlow</a>
      </h1>
      <nav className="flex justify-between items-center gap-4 md:gap-20 capitalize">
        <a href="/community/articles">articles</a>
>>>>>>> 40fd0a3f80cb794cd4698d5d4000a1e14ba97292
        <a href="/history">history</a>
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
