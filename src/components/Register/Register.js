import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/20602853_6300959-removebg-preview.png";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const { userRegister, verifyEmail, userProfileUpdate } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;

    //user register
    userRegister(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        verifyEmail().then(() => {
          toast.success("Verification email sent");
          navigate("/logIn");
        });
        profileUpdate(name);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //profile update
  const profileUpdate = (name) => {
    const userData = {
      displayName: name,
    };
    userProfileUpdate(userData).then(() => {
      console.log("profile updated");
    });
  };

  return (
    <div>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content lg:w-3/4 w-full  p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-center text-4xl text-white">SIGN UP</h1>
              <img className="" src={logo} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Phone</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="phone"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
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
                      to="/logIn"
                      className="label-text-alt link my-3 text-white link-hover"
                    >
                      Already have an account?
                    </Link>
                  </label>
                </div>
                <div className="form-control">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
