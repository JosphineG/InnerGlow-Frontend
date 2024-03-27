"use client";
import React, { useEffect, useState } from "react";
import ChatCard from "../components/ChatCard";
import {
  InfiniteMovingCardsPrevious30Days,
  InfiniteMovingCardsPrevious7Days,
  InfiniteMovingCardsToday,
} from "../components/MovingCard";
import useAuthToken from "../../../hooks/useAuth";

function page() {
  const [data, setData] = useState();
  const { getItem, clearAuthToken } = useAuthToken();
  const { token, chatid } = getItem();
  useEffect(() => {
    const getUser = async () => {
      if (!token) {
        return;
      }

      try {
        const response = await fetch(
          "http://127.0.0.1:5000/api/v1/user/profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status == 200) {
          const dataRespo = await response.json();
          setData(dataRespo);
          console.log(dataRespo);
        }
      } catch (error) {
        console.log(error);
      }
    };

    return () => getUser();
  }, []);
  const handleLogout = () => {
    clearAuthToken();
    window.location.href = "/chatlogin";
  };
  return (
    <div className="justify-between flex flex-col">
      <header className="w-screen flex justify-between items-center gap-2 px-4 md:px-20 py-4 fixed z-[9999] h-[80px] shadow-lg bg-[#e9f1ff]">
        <h1>InnerGlow</h1>
        <nav className="flex justify-between items-center gap-4 md:gap-20 capitalize">
          <a href="/community/articles">articles</a>
          <a href={`/chat/${chatid}`}>chat</a>

          <h3 className="text-lg p-2 rounded-lg px-4">
            Hi,{" "}
            <span className="text-blue-500 font-semibold">
              {data?.username}
            </span>
          </h3>
          <button
            onClick={handleLogout}
            className="bg-[#6495ED47] p-2 rounded-lg px-4"
          >
            <span className="text-blue-500 font-semibold">Logout</span>
          </button>
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
