import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../pages/Hooks/useAuth";
import ForgetPassword from "./ForgetPassword";
import "./SignInPage.css";

const SignInPage = ({ isForgetPassword, setIsForgetPassword, setIsJoin }) => {
  const { signInUser } = useAuth();

  const [loginUser, setLoginUser] = useState({});
  // location and history
  const location = useLocation();
  const history = useNavigate();

  // console.log(location, 'Location', history,'history');
  // set email and password
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginUser = { ...loginUser };
    newLoginUser[field] = value;
    // console.log(field,value,newLoginUser);
    setLoginUser(newLoginUser);
  };

  //  submit
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log(loginUser.email, loginUser.password, "submit data");
    signInUser(loginUser.email, loginUser.password);
  };
  return (
    // SIGN-IN PAGE STARTED HERE
    <div>
      {!isForgetPassword ? (
        <div className="sign-in-page-container">
          <h3 className="sign-in-title">Welcome Back.</h3>
          <form action="" className="sign-in-form">
            <label for="email" className="form-label">
              Email address
            </label>
            <div className="input-group mb-3">
              <input
                name="email"
                type="text"
                className="form-control email-input"
                id="email"
                aria-describedby="basic-addon3"
                placeholder="Email"
                onChange={handleOnBlur}
              />
            </div>
            <label for="password" className="form-label">
              Password
            </label>
            <div className="input-group mb-2">
              <input
                name="password"
                type="text"
                className="form-control password-input"
                id="password"
                aria-describedby="basic-addon3"
                placeholder="Password"
                onChange={handleOnBlur}
              />
            </div>
            <span
              onClick={() => setIsForgetPassword(true)}
              className="forgot-password-btn"
            >
              Forgot password?
            </span>
            <div className="text-center">
              <button
                onClick={handleOnClick}
                type="submit"
                className="sign-in-btn"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="sign-in-bottom-container text-center my-4">
            <div className="sign-in-bottom-top d-flex align-items-center justify-content-center">
              <div className="hr"></div>
              <span className="px-2">Not a member?</span>
              <div className="hr"></div>
            </div>
            <button
              onClick={() => setIsJoin(true)}
              className="switch-to-join-btn my-2"
            >
              <span className="text-decoration-underline">Join</span> to unlock
              the best of Tripadvisor.
            </button>
          </div>
        </div>
      ) : (
        // CALLING THE FORGET-PASSWORD COMPONENT
        <ForgetPassword />
      )}
    </div>

    // SIGN-IN PAGE ENDED HERE
  );
};

export default SignInPage;
