"use client";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Donut from "./Donut";
import useAuthToken from "../../../hooks/useAuth";
function PasswordReset({ token }) {
  const [repeatPassword, setRepeatPassword] = useState();
  const [password, setPassword] = useState();
    console.log(repeatPassword);
    
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const notification = toast.loading("Authenticating...");
    if (!repeatPassword || !password) {
      toast.error("Inputs below are required", { id: notification });
      return;
      }
      if (repeatPassword !== password) {
        toast.error("Passwords do not match", { id: notification });
        return;
      }
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/v1/resetpassword/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
      });
      if (response.status == 200) {
        toast.success("password reset successfully", { id: notification });
        console.log("logged in successfully");
      }
      if (response.status !== 200) {
        toast.error("Failed to reset password!!", { id: notification });
        console.log("Invalid credentials!!");
        return;
      }

      const data = await response.json();
      window.location.href = `/chat/${chatid}`;
    } catch (error) {
      toast.error(error, { id: notification });
      console.error(error);
    }
  };
  return (
    <>
      <Toaster />
      <div className="flex  w-screen item-center justify-center md:flex-row p-12   h-screen flex-col">
        <div className="flex items-center justify-center text-center w-full h-full gap-8">
          <div className="absolute top-[-200px]">
            <Donut />
          </div>
          <div className="hidden md:flex h-[400px] rounded-2xl">
            <Image
              src="/anxietyrm.png"
              alt="anxiety image"
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

                <div className="flex flex-col mb-1">
                  <label
                    htmlFor="password"
                    className="text-sm text-left text-gray-900 font-bold mb-2"
                  >
                    New password
                  </label>
                  <input
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    type="password"
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 focus:z-10 small:text-sm"
                    placeholder="Enter new password"
                  />
                </div>

                <div className="flex flex-col mb-1">
                  <label
                    htmlFor="repeatpassword"
                    className="text-sm text-left text-gray-900 font-bold mb-2"
                  >
                    Repeat Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md mb-2 focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 focus:z-10 small:text-sm"
                    placeholder="Repeat new Password"
                  />
                </div>
                {/* input code end */}
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
        </div>
      </div>
    </>
  );
}

export default PasswordReset;
