"use client";
import React, { useEffect, useState } from "react";
import useAuthToken from "../../../hooks/useAuth";
import { FaPlus } from "react-icons/fa";
import SingleArticle from "./SingleArticle";
import Model from "./Model";
import toast, { Toaster } from "react-hot-toast";
function Articles() {
  const [loading, setLoading] = useState(false);
  const { clearAuthToken, getItem } = useAuthToken();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const { chatid, token } = getItem();
  const [articles, setArticles] = useState();
  const [data, setData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(!isOpen);
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

        if (response.status == 200) {
          const { userProfile } = await response.json();
          setData(userProfile);
        }
      } catch (error) {
        console.log(error);
      }
    };

    return () => getUser();
  }, [token]);

  useEffect(() => {
    const unsubScribe = fechArticles();
    return () => {
      unsubScribe;
    };
  }, []);
  const fechArticles = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles`
      );
      if (response.ok) {
        setLoading(false);

        const data = await response.json();
        console.log(data);
        console.log(response);
        setArticles(data);
      } else {
        throw new Error("Failed to fetch chat messages");
      }
    } catch (error) {
      console.error(error);
    }
  };
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
    window.location.href = "/communitylogin";
  };
  return (
    <>
      <Toaster />
      <div className="relative">
        <header className="w-screen flex justify-between items-center gap-2 px-4 lg:px-20 py-4 fixed z-[999] h-[80px] shadow-lg bg-blue-500 text-white">
          <a href="/">
            <img
              src="/rafikiwellnesslogo.png"
              alt="Logo"
              className="mr-2 w-[200px] object-contain "
            />
            {/* <h1 className="text-white font-bold text-3xl">RafikiWellness</h1> */}
          </a>
          <nav className="lg:flex justify-center items-center  lg:gap-8 uppercase text-sm font-semibold  hidden gap-2  flex-1">
            <a href={`/chat/${chatid}`}>Chat</a>
            <a href="/community/stories">Stories</a>
            {token && (
              <h3 className="text-lg p-2 rounded-lg px-4">
                Hi,{" "}
                <span className="text-white font-semibold">
                  {data?.username}
                </span>
              </h3>
            )}
          </nav>
          <button
            onClick={handleLogout}
            className="bg-white p-2 rounded-lg px-4 hidden lg:flex"
          >
            <span className="text-blue-500 font-semibold">Logout</span>
          </button>
          {isOpen && (
            <div
              className="lg:hidden flex bg-blue-500 justify-center gap-[50px] absolute w-[75vw] h-[100vh] flex-col items-start px-12 top-[90px] left-[-20px] shadow-lg rounded-r-[30px] transition-transform ease-in-out duration-700 z-[888] text-white bg-gradient-to-b from-blue-500 to-violet-500 text-sm font-semibold  uppercase"
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

              <a href={`/chat/${chatid}`}>Chat</a>
              <a href="/community/stories">Stories</a>

              <button
                onClick={handleLogout}
                className="bg-white p-2 rounded-lg px-4"
              >
                <span className="text-blue-500 font-semibold">Logout</span>
              </button>
            </div>
          )}
          <div className="space-y-[5px] lg:hidden" onClick={openNav}>
            <div className="w-[25px] h-[3px] bg-white" />
            <div className="w-[25px] h-[3px] bg-white" />
            <div className="w-[25px] h-[3px] bg-white" />
          </div>
        </header>
        <div className="lg:px-[65px] pt-[100px]  px-[15px] w-screen">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-3xl font-semibold text-blue-500">Articles</h2>
            <button
              className="bg-blue-500 px-4 py-3 text-white font-bold rounded-xl shadow-lg shadow-black flex items-center gap-2 hover:px-5"
              onClick={handleOpenModel}
            >
              <FaPlus />
              <span>Create Article</span>
            </button>
          </div>
          <div className="px-[10px] w-full mt-6 grid grid-cols-1 lg:grid-cols-3 items-center gap-6 ">
            {articles?.length > 0 ? (
              articles?.map((article, index) => (
                <SingleArticle key={index} article={article} />
              ))
            ) : (
              <p className="text-lg font-bold text-gray-600">
                Loading Articles...
              </p>
            )}
          </div>
        </div>
        {isModelOpen && (
          <div className="absolute top-0">
            <Model setIsModelOpen={setIsModelOpen} handleFetch={fechArticles} />
          </div>
        )}
      </div>
    </>
  );
}

export default Articles;
