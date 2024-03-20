"use client";
import React, { useState } from "react";
import SuccessPasswordReset from "../components/SuccessPasswordReset";
import ErrorPasswordReset from "../components/ErrorPasswordReset";

function ResetPassword() {
  const [email, setEmail] = useState();
  const [response, setResponse] = useState(false);
  const handleSubmitEmail=()=>{
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
      const response = await fetch(`https://inner-glow-backend.vercel.app/api/v1/reset-password/${token}`, {
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
        console.log(await response.json())
        console.log("logged in successfully");
      }
      if (response.status !== 200) {
        toast.error("Failed to reset password!!", { id: notification });
        console.log("Invalid credentials!!", response);
        return;
      }

      const data = await response.json();
      window.location.href = `/chat/${chatid}`;
    } catch (error) {
      toast.error(error, { id: notification });
      console.error(error);
    }
  }
  return (
    <div className="flex  w-screen items-center justify-center md:flex-row p-12    h-screen flex-col">
      {response ? (
              // <SuccessPasswordReset email={email} />
              <ErrorPasswordReset />
      ) : (
        <form className="bg-white p-2 md:p-4 rounded-lg md:rounded-xl md:min-w-[350px]  justify-center flex flex-col px-md">
          <p className="text-blue-500 font-bold text-xl tracking-widest">
            Forgot your Password?
          </p>
          <p className="my-5 md:my-7">Your password will be reset by email.</p>
          <div className="flex flex-col mb-1">
            <label
              htmlFor="email"
              className="text-sm text-left text-gray-900 font-bold mb-2"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="none"
              required
              className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 focus:z-10 small:text-sm"
              placeholder="Enter your email address"
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setResponse((prev) => !prev);
            }}
            className="w-full bg-blue-500 py-2 rounded-md text-white"
          >
            Next
          </button>
          <a href="" className="text-blue-500 w-full text-center mt-3">
            Back to login
          </a>
        </form>
      )}
    </div>
  );
}

export default ResetPassword;
