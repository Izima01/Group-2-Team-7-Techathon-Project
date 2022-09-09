import React, { useState } from "react";
import SignInImg from "../../Assets/Images/img.avif";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex md:flex-row md:justify-between mx-auto items-center pl-16 md:pl-20  ">
        <div className="md:basis-1/2">
          <div className="mt-16 text-center">
            <h1>LOGO</h1>
          </div>

          <div className="mt-24">
            <form>
              <div className="form-group mb-6 text-left">
                <label
                  htmlFor="email"
                  className="form-label inline-block mb-2 text-gray-700 font-semibold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Email Address"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-6 text-left">
                <label
                  htmlFor="password"
                  className="form-label inline-block mb-2 text-gray-700 font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                  placeholder="Enter Your Password"
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text-right mb-6">
                <a
                  href="#!"
                  className="text-[#0E237B] hover:text-blue-900 focus:text-blue-900 font-semibold transition duration-200 ease-in-out"
                >
                  Forgot password?
                </a>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="
                md:w-[30%]
                px-6
                py-2.5
                bg-[#0E237B]
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-900 hover:shadow-lg
                focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
                >
                  Sign in
                </button>
              </div>

              <p className="text-gray-800 mt-6 text-center">
                Don't have an account?{" "}
                <a
                  href="#!"
                  className="text-[#0E237B] hover:text-blue-900 font-semibold focus:text-blue-900 transition duration-200 ease-in-out"
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="basis-1/3 invisible md:visible">
          <img src={SignInImg} alt="sigin" className="h-screen" />
        </div>
      </div>
    </>
  );
};

export default Login;
