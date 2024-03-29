"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import useAuthToken from "../../../hooks/useAuth";
function Login() {
  // const { getItem } = useAuthToken();
  // const { token } = getItem();

  // useEffect(() => {
  //   if (token) {
  //     loc
  //   }
  // })
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    const notify = toast.loading("Authenticating...");
    if (!email || !password) {
      toast.error("email and password are required!", { id: notify });
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.status == 200) {
        toast.success("Logged in successfully", { id: notify });
        console.log("logged in successfully");
        const data = await response.json();
        localStorage.setItem("innerAuth", data.access_token);

        window.location.href = "/community/articles";
      }
      if (response.status == 401) {
        toast.error("Wrong user credentials", { id: notify });
        console.log("logged in successfully");
      }
    } catch (error) {
      toast.error(error, { id: notify });
      console.error(error);
    }
  };
  return (
    <>
      <Toaster />
      <div className="flex  w-screen item-center justify-center md:flex-row p-12   h-screen flex-col">
        <div className="flex items-center justify-center text-center w-full h-full gap-8">
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
                Sign In to Your Account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                {" "}
                Or
                <a
                  href="/communitysignup"
                  className="font-medium text-indigo-600 hover:text-indigo-300 px-2"
                >
                  Sign Up
                </a>
              </p>
            </div>
            <div className="flex flex-col w-full mt-8 space-y-6">
              <form className="w-full rounded-md shadow-sm -space-y-px">
                {/* input code start */}

                <div>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 focus:z-10 small:text-sm"
                    placeholder="Email address"
                  />
                </div>

                <div>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md mb-2 focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 focus:z-10 small:text-sm"
                    placeholder="Password"
                  />
                </div>
                {/* input code end */}
              </form>
              {/* Remember me and forgot pasword start */}
              <div className="flex items-center justify-between">
                <div className="flex items-center ">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-300 "
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              {/* Remember me and forgot password end */}
              {/* button */}
              <div>
                <button
                  onClick={handleLogin}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-md rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
