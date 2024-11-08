"use client";
import { useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import Donut from "./Donut";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCPOpen, setIsCPOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notification = toast.loading("signing you up ...");
    if (!email || !password || !userName || !confirmPassword) {
      toast.error("All fields are required", { id: notification });
      return;
    }
    const emailRegex =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!emailRegex.test(email)) {
      toast.error(email + " is invalid email address", { id: notification });
      return;
    }
    if (password !== confirmPassword) {
      // setPassword("");
      // setConfirmPassword("");
      toast.error("passwords do not match", {
        id: notification,
      });
      console.log("passwords do not match");
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPassword("");
      setConfirmPassword("");
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long."
      );
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.",
        {
          id: notification,
        }
      );
      console.error(passwordError);

      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userName,
            email: email,
            password: password,
            confirm_password: confirmPassword,
          }),
        }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("Registered successfully", {
          id: notification,
        });
        const { userId } = await response.json();
        createChat(userId);
        window.location.href = "/chatlogin";
      }
    } catch (error) {
      toast.error("Error", {
        id: notification,
      });
      console.error(error);
    }
  };

  const createChat = async (userId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/chat/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
          }),
        }
      );
      console.log(response.status);
      if (response.status === 201) {
        const { chatId } = await response.json();
        console.log("data", chatId);
        localStorage.setItem("chatId", chatId);
        console.log("chat created successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const showPassword = () => {
    setIsOpen(!isOpen);
  };
  const showCPassword = () => {
    setIsCPOpen(!isCPOpen);
  };

  return (
    <>
      <Toaster />
      <div className=" relative flex w-screen item-center justify-center lg:flex-row p-12 h-screen flex-col">
        <div className="absolute top-[-200px] left-[-100px] z-[-1]">
          <Donut />
        </div>
        <div className="flex items-center justify-center text-center w-full h-full gap-8">
          <div className="hidden lg:flex h-[400px] rounded-2xl">
            <Image
              src="/virtualA.svg"
              alt="virtualAssistant image"
              width={400}
              height={200}
              className="object-cover  object-top rounded-2xl"
            />
          </div>
          <div className="w-[100%] lg:w-[30%]">
            <div className="w-full">
              <h2 className="mt-4 text-center lg:text-2xl font-extrabold w-full text-indigo-600 text-xl">
                Create an Account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                {" "}
                Or
                <a
                  href="/chatlogin"
                  className="font-medium text-indigo-600 hover:text-indigo-300 px-2"
                >
                  Sign In
                </a>
              </p>
            </div>
            <form className="flex flex-col w-full mt-8 space-y-6">
              <div className="w-full rounded-lg shadow-sm -space-y-px">
                <div className="flex flex-col mb-1">
                  <label
                    htmlFor="username"
                    className="text-left text-sm font-bold text-gray-700 mb-1"
                  >
                    Username
                  </label>
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    type="Name"
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-lg mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 small:text-sm"
                    placeholder="Username"
                  />
                </div>
                <div className="flex flex-col mb-1">
                  <label
                    htmlFor="email"
                    className="text-left text-sm font-bold text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-lg mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 small:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div className="flex flex-col mb-1 relative">
                  <label
                    htmlFor="password"
                    className="text-left text-sm font-bold text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={!isOpen ? "password" : "text"}
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 small:text-sm"
                    placeholder="Password"
                  />
                  <div
                    className="absolute right-2 top-[25px] z-[999] bg-white p-2 px-6"
                    onClick={showPassword}
                  >
                    {isOpen ? (
                      <FaRegEye
                        className="text-blue-700 font-bold  h-6
                    w-6"
                      />
                    ) : (
                      <FaRegEyeSlash
                        className=" text-blue-700 font-bold  h-6
                    w-6"
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col mb-1 relative">
                  <label
                    htmlFor="password"
                    className="text-left text-sm font-bold text-gray-700 mb-1"
                  >
                    Confirm Password
                  </label>
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type={!isCPOpen ? "password" : "text"}
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 small:text-sm"
                    placeholder=" Confirm Password"
                  />
                  <div
                    className="absolute right-2 top-[25px] z-[999] bg-white p-2 px-6"
                    onClick={showCPassword}
                  >
                    {isCPOpen ? (
                      <FaRegEye
                        className="text-blue-700 font-bold  h-6
                    w-6"
                      />
                    ) : (
                      <FaRegEyeSlash
                        className=" text-blue-700 font-bold  h-6
                    w-6"
                      />
                    )}
                  </div>
                </div>
                {passwordError && (
                  <span className="text-red-500">{passwordError}</span>
                )}
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-lg rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="absolute bottom-[-200px] right-[-100px] z-[-1]">
            <Donut />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
