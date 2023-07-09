import React from "react";

function Login() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="p-5 flex flex-col">
          <span className="text-black text-center text-3xl p-3 font-bold font-mono">
            Login
          </span>
          <form className="w-96 bg-white shadow-md rounded px-8 py-6">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-light mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className=" bg-transparent border border-b-3 w-full py-2 px-3 text-gray-700 leading-tight outline-none "
                id="email"
                type="email"
                placeholder="email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-light mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className=" bg-transparent border border-b-3 w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:bg-none"
                id="password"
                type="password"
                placeholder="password"
                required
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log In
              </button>
              <span className="font-light text-black pt-5">
                Don’t have an account?{" "}
                <span className="text-blue-500">Sign up</span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
