"use client";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Donut from "./Donut";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useAuthToken from "../../../hooks/useAuth";
function PasswordReset({ token, email }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isCPOpen, setIsCPOpen] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const showPassword = () => {
    setIsOpen(!isOpen);
  };
  const showCPassword = () => {
    setIsCPOpen(!isCPOpen);
  };
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const notification = toast.loading("Resetting password...");
    if (!confirmPassword || !password) {
      toast.error("Inputs below are required", { id: notification });
      return;
    }
    if (confirmPassword !== password) {
      toast.error("Passwords do not match", { id: notification });
      return;
    }
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
      return;
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      if (response.ok) {
        toast.success("password reset successfully", { id: notification });
        setConfirmPassword("");
        setPassword("");
        window.location.href = "/chatlogin";
        // console.log(await response.json());
        // console.log("logged in successfully");
      }
      if (!response.ok) {
        toast.error("Failed to reset password!!, Use a new password", {
          id: notification,
        });
        setConfirmPassword("");
        setPassword("");
        console.log("Invalid credentials!!", response);
        return;
      }
      if (response.status == 504) {
        toast.error("Failed to reset password!!, Use a new password", {
          id: notification,
        });
        setConfirmPassword("");
        setPassword("");
        console.log("Invalid credentials!!", response);
        return;
      }
      setConfirmPassword("");
      setPassword("");
      const data = await response.json();
      // window.location.href = `/chat/${chatid}`;
    } catch (error) {
      toast.error("Error while resetting password", { id: notification });
      setConfirmPassword("");
      setPassword("");
      console.error(error);
    } finally {
      setConfirmPassword("");
      setPassword("");
    }
  };
  return (
    <>
      <Toaster />
      <div className="flex  w-screen item-center justify-center md:flex-row p-12   h-screen flex-col">
        <div className="flex items-center justify-center text-center w-full h-full gap-8">
          <div className="absolute left-[-100px] top-[-200px] z-[-1]">
            <Donut />
          </div>
          <div className="hidden lg:flex h-[400px] rounded-2xl">
            <Image
              src="/virtualA.svg"
              alt="virtualAssistant image"
              width={400}
              height={400}
              className="object-cover  object-top rounded-2xl"
            />
          </div>

          <div className="w-[100%] md:w-[30%] ">
            <div className="w-full">
              <h2 className="mt-4 text-center md:text-2xl font-extrabold w-full text-indigo-700 text-xl">
                Reset your password
              </h2>
            </div>
            <form className="flex flex-col w-full mt-8 space-y-6">
              <div className="w-full rounded-md shadow-sm -space-y-px">
                {/* input code start */}

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
                  onClick={handlePasswordReset}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-md rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
          <div className="absolute right-[-100px] bottom-[-200px] z-[-1]">
            <Donut />
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordReset;
