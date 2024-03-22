"use client";
import React, { useEffect, useState } from "react";
import useAuthToken from "../../../hooks/useAuth";
import { FaPlus } from "react-icons/fa";
import SingleArticle from "./SingleArticle";
import Model from "./Model";
function Articles() {
  const [loading, setLoading] = useState(false);
  const { clearAuthToken, getItem } = useAuthToken();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const { chatid, token } = getItem();
  const [articles, setArticles] = useState();
  useEffect(() => {
    const fetchChatMessages = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${process.env.EndPoint}/api/v1/articles`);
        if (response.ok) {
          setLoading(false);

          const data = await response.json();
          console.log(data);
          setArticles(data);
        } else {
          throw new Error("Failed to fetch chat messages");
        }
      } catch (error) {
        console.error(error);
      }
    };
    const unsubScribe = fetchChatMessages();
    return () => {
      unsubScribe;
    };
  }, []);
  const handleLogout = () => {
    clearAuthToken();
    window.location.href = "/chatlogin";
  };
  return (
    <div className="relative">
      <header className="w-screen flex justify-between items-center gap-2 px-4 md:px-20 py-4 fixed z-[999] h-[80px] shadow-lg bg-[#e9f1ff]">
        <h1>
          <a href="/">InnerGlow</a>
        </h1>
        <nav className="flex justify-between items-center gap-4 md:gap-20 capitalize">
          <a href={`/chat/${chatid}`}>chat</a>
          <a href="/history">history</a>
          <button
            onClick={handleLogout}
            className="bg-[#6495ED47] p-2 rounded-lg px-4"
          >
            <span className="text-blue-500 font-semibold">Logout</span>
          </button>
        </nav>
      </header>
      <div className="md:px-[65px] pt-[100px]  px-[15px] w-screen">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-3xl font-semibold text-blue-500">Articles</h2>
          <button
            className="bg-blue-500 px-4 py-3 text-white font-bold rounded-xl shadow-lg shadow-black flex items-center gap-2 hover:px-5"
            onClick={() => {
              setIsModelOpen(true);
            }}
          >
            <FaPlus />
            <span>Create Article</span>
          </button>
        </div>
        <div className="px-[10px] w-full mt-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          {articles?.map((article, index) => (
            <SingleArticle key={index} article={article} />
          ))}
        </div>
      </div>
      {isModelOpen && (
        <div className="absolute top-0">
          <Model setIsModelOpen={setIsModelOpen} />
        </div>
      )}
    </div>
  );
}

export default Articles;
