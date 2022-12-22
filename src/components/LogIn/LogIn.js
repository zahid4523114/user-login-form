import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import loginLogo from "../../images/4957412_Mobile-login-Cristina-removebg-preview.png";
import { AuthContext } from "../context/AuthProvider";

const LogIn = () => {
  const { resetPassword, userLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //login
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        //verify email
        if (user.emailVerified) {
          toast.success("Login successful");
          form.reset();
          console.log();
        } else {
          toast.error("Please verify your email to log in");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const emailOnChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const passwordReset = () => {
    resetPassword(email).then(() => {
      toast.success("Password reset email sent");
    });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content lg:w-4/6 w-full p-10  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-center text-4xl text-white">LOG IN</h1>
            <img className="" src={loginLogo} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={emailOnChange}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    onClick={passwordReset}
                    className="label-text-alt link text-white link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link text-white link-hover"
                  >
                    Create a new account?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
