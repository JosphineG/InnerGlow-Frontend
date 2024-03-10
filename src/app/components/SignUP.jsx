"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      console.log("passwords do not match");
      return;
    }

    try {
      // console.log(userName);
      const response = await fetch(
        "http://127.0.0.1:5000/api/v1/auth/register",
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
        window.location.href = "/login";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-screen item-center justify-center md:flex-row p-12 h-screen flex-col">
      <div className="flex items-center justify-center text-center w-full h-full gap-8">
        <div className="hidden md:flex h-[400px] rounded-2xl">
          <Image
            src="/anxietyrm.png"
            alt="anxiety image"
            width={400}
            height={200}
            className="object-cover  object-top rounded-2xl"
          />
        </div>
        <div className="w-[100%] md:w-[30%]">
          <div className="w-full">
            <h2 className="mt-4 text-center md:text-2xl font-extrabold w-full text-indigo-600 text-xl">
              Create an Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {" "}
              Or
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-300 px-2"
              >
                Sign In
              </a>
            </p>
          </div>
          <form className="flex flex-col w-full mt-8 space-y-6">
            <div className="w-full rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  type="Name"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 focus:z-10 small:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 small:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 small:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  type="password"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 small:text-sm"
                  placeholder=" Confirm Password"
                />
              </div>
              {/* <div> */}
              {/* Gender dropdown */}
              {/* <select className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 small:text-sm">
                  <option value=""disabled hidden> Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div> */}
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-md rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
