"use client";
import React, { useEffect, useState } from "react";
import useAuthToken from "../../../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import { convertDateTime } from "../../../hooks/useDateTime";
import { useParams } from "next/navigation";

function StoryPage() {
  const { id } = useParams();
  const { getItem } = useAuthToken();
  const { chatid, token } = getItem();
  const { clearAuthToken } = useAuthToken();
  const [data, setData] = useState();
  const [story, setStory] = useState({});
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [parse, setParse] = useState(null); // State for the parser

  const openNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const loadParser = async () => {
      const { default: parser } = await import("html-react-parser");
      setParse(() => parser); // Set the parser function in state
    };

    loadParser();
  }, []);

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
        console.error(error);
      }
    };

    getUser();
  }, [token]);

  useEffect(() => {
    const fetchstory = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/stories/${id}`
        );

        if (response.ok) {
          const data = await response.json();
          setStory(data);
          console.log(data)
          setLoading(false);
        } else {
          throw new Error("Failed to fetch the story");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchstory();
  }, [id]);

  const handleLogout = () => {
    clearAuthToken();
    window.location.href = "/communitylogin";
  };

  const { description } = story;

  return (
    <div>
      <header className="w-screen flex justify-between items-center gap-2 px-4 md:px-20 py-4 fixed z-[999] h-[80px] shadow-lg bg-blue-500 text-white">
        <h1 className="text-white font-bold text-3xl">
          <a href="/">InnerGlow</a>
        </h1>
        <nav className="md:flex justify-center items-center gap-4 md:gap-8 uppercase font-bold hidden">
          <a href={`/community/storys`}>storys</a>
          <a href={`/chat/${chatid}`}>Chat</a>
          <a href="/stories">Stories</a>
          {token && (
            <h3 className="text-lg rounded-lg ">
              Hi,{" "}
              <span className="text-white font-semibold capitalize">
                {data?.username}
              </span>
            </h3>
          )}
        </nav>
        <button
          onClick={handleLogout}
          className="bg-white p-2 rounded-lg px-4 hidden md:flex"
        >
          <span className="text-blue-500 font-semibold ">Logout</span>
        </button>
        {isOpen && (
          <div
            className="md:hidden flex bg-blue-500 justify-center gap-[50px] absolute w-[75vw] h-[100vh] flex-col items-start px-12 top-[90px] left-[-20px] shadow-md rounded-r-[30px] transition-transform ease-in-out duration-700 z-[888] text-white bg-gradient-to-b from-blue-500 to-violet-500 uppercase font-bold"
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
            <a href={`/community/storys`}>storys</a>
            <a href={`/chat/${chatid}`}>Chat</a>
            <a href="/stories">Stories</a>
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
      {story !== "udefined" || story !== null ? (
        <div className="w-full flex flex-col gap-2 md:gap-4 pt-[100px] px-[20px] space-x-4 md:px-[80px] space-y-2">
          <div className="space-y-2">
            <p className="text-blue-500 font-semibold pt-2 text-3xl">
              {story?.title}
            </p>
            <p className="text-sm font-semibold text-gray-800">
              {convertDateTime(story?.time)}
            </p>
          </div>
          <div className="flex gap-2 pt-2 mt-[15px] mb-[15px]">
            <FaUser className="w-8 h-8 text-gray-500" />
            <p className="text-blue-500 ">
              by{" "}
              <span className="capitalize font-semibold text-lg">
                {story?.createdBy}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <p>No story found...</p>
      )}

      {story && (
        <div className="pt-[10px] p-[20px] md:px-20 md:pt-[10px]">
          <div className="w-full flex flex-col md:flex-row">
            <div className="gap-6 flex flex-col px-2 md:py-0 py-6 w-full md:w-[600px] md:ml-[60px]">
              {/* Render HTML content using html-react-parser */}
              <div className="text-xl leading-relaxed font-sans text-gray-800">
                {description && parse ? parse(description) : description}
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="shadow w-full px-4 py-2 mt-4 text-center text-gray-500 text-sm fixed bottom-0">
        <p>ZenTalk AI 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default StoryPage;
