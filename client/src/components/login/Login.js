import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      className="h-screen w-screen backdrop-blur-md flex  justify-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center mt-10 space-y-32">
        <span className="flex mt-10 w-[65vw]">
          <img src="https://qph.cf2.quoracdn.net/main-qimg-f7cfa5f20eb8584fbb73942e23c31bf4" className="rounded-full h-12 w-12"/>
          <h1 className="text-3xl font-bold  text-white w-full text-center py-0 bg-opacity-100 rounded-3xl">
              THAKUR COLLEGE OF ENGINEERING AND TECHNOLOGY
          </h1>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-f7cfa5f20eb8584fbb73942e23c31bf4" className="rounded-full h-12 w-12"/>
        </span>
        <div className="grid grid-cols-3 gap-28">
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#E91E63] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold">Admin</h1>
            <Link
              type="button"
              to="/login/adminlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
            <Link
              type="button"
              to="/register/admin-register"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Register
            </Link>
          </div>
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#5a51d6] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold">Faculty</h1>

            <Link
              type="button"
              to="/login/facultylogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
            <Link
              type="button"
              to="/register/faculty-register"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Register
            </Link>
          </div>
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#d65158] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold">Student</h1>
            <Link
              type="button"
              to="/login/studentlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
            <Link
              type="button"
              to="/register/student-register"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
