import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const UserInfo = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content lg:w-4/6 w-full p-10  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl flex-col lg:flex-row">
          <div className="">
            <h1 className="text-center text-5xl text-white">Welcome Back</h1>
            <h1 className="text-3xl mt-5 text-white">{user?.displayName}</h1>
            <p className="text-white my-5">
              <span>Email: </span>
              {user?.email}
            </p>
            <p className="text-white my-5">
              <span>Verified Email: </span>
              {user?.emailVerified ? "TRUE" : "FALSE"}
            </p>
            <button className="text-white underline btn btn-xs btn-dark">
              <Link to="/logIn">Back to Log In</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
