"use client";
import { useEffect, useState } from "react";
import Stories from "./Stories";
import useAuthToken from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import Model from "./StoryModel";
function History() {
  const { getItem, clearAuthToken } = useAuthToken();
  const { token, chatid } = getItem();
  const [data, setData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [stories, setStories] = useState([]);

  const openNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchStories(); // Fetch stories when token is available
  }, []);
  const fetchStories = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/stories`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Pass token for auth
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch stories");
      }

      const data = await response.json();
      console.log(data);
      // Assuming `data` contains an array of stories
      setStories(data); // Set the stories into state
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    const getUser = async () => {
      if (!token) {
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const { userProfile } = await response.json();
          setData(userProfile);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [token]);

  const handleOpenModel = () => {
    if (token == "undefined" || token == null) {
      setIsModelOpen(false);
      toast.error("Unauthorized, Login first");
      window.location.href = "/communitylogin";
      return;
    } else {
      setIsModelOpen(true);
    }
  };

  const handleLogout = () => {
    clearAuthToken();
    window.location.href = "/chatlogin";
  };

  return (
    <div className="justify-between flex flex-col w-screen h-screen">
      <header className="w-screen flex justify-between items-center gap-2 px-4 md:px-20 py-4 fixed z-[999] h-[80px] shadow-lg bg-blue-500 text-white">
        <a href="/">
          <h1 className="text-white font-bold text-3xl">InnerGlow</h1>
        </a>
        <nav className="md:flex justify-between items-center gap-4 md:gap-20 capitalize hidden">
          <a href={`/chat/${chatid}`}>chat</a>
          <a href="/community/articles">Article</a>
          {token && (
            <h3 className="text-lg p-2 rounded-lg px-4">
              Hi,{" "}
              <span className="text-white font-semibold">{data?.username}</span>
            </h3>
          )}
          <button
            onClick={handleLogout}
            className="bg-white p-2 rounded-lg px-4"
          >
            <span className="text-blue-500 font-semibold">Logout</span>
          </button>
        </nav>
        {isOpen && (
          <div
            className="md:hidden flex bg-blue-500 justify-center gap-[50px] font-semibold absolute w-[75vw] h-[100vh] flex-col items-start px-12 top-[90px] left-[-20px] shadow-md rounded-r-[30px] transition-transform ease-in-out duration-700 z-[888] text-white bg-gradient-to-b from-blue-500 to-violet-500"
            onClick={openNav}
          >
            {token && (
              <h3 className="text-lg rounded-lg ">
                Hi,{" "}
                <span className="text-white font-semibold capitalize">
                  {data?.username}
                </span>
              </h3>
            )}
            <a href={`/chat/${chatid}`}>chat</a>
            <a href="/community/articles">Article</a>

            <button
              onClick={handleLogout}
              className="bg-white p-2 rounded-lg px-4"
            >
              <span className="text-blue-500 font-semibold">Logout</span>
            </button>
          </div>
        )}
        <div className="space-y-[5px] md:hidden" onClick={openNav}>
          <div className="w-[25px] h-[3px] bg-white" />
          <div className="w-[25px] h-[3px] bg-white" />
          <div className="w-[25px] h-[3px] bg-white" />
        </div>
      </header>

      {/* Story Creation Form */}
      <div className="pt-[100px] md:px-[120px] px-4 flex flex-1 flex-col space-y-4 p-3  mb-4">
        <div>
          <div className="flex items-center justify-between w-full">
            <h2 className="text-3xl font-semibold text-blue-500">
              User Stories
            </h2>
            <button
              className="bg-blue-500 px-4 py-3 text-white font-bold rounded-xl shadow-lg shadow-black flex items-center gap-2 hover:px-5"
              onClick={handleOpenModel}
            >
              <FaPlus />
              <span>Create story</span>
            </button>
          </div>
          <div className="grid grid-flow-col overflow-x-auto gap-4 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch mt-[100px] justify-center items-center">
            <Stories stories={stories} />
          </div>
        </div>
      </div>
      {isModelOpen && (
        <div className="absolute top-0">
          <Model setIsModelOpen={setIsModelOpen} handleFetch={fetchStories} />
        </div>
      )}
      <footer className="w-full  mt-4 text-center text-gray-500 text-sm shadow-lg shadow-black px-4 pt-4 py-4 sm:mb-0  bg-[#e9f1ff] md:px-[150px] sticky bottom-0">
        <p>
          InnerGlow AI 2024. All rights reserved. Terms of services and Privacy
          policy
        </p>
      </footer>
    </div>
  );
}

export default History;
