import React, { useState } from "react";
import logo from "../../../assets/images/logo-img.svg";
import googleIcon from "../../../assets/images/google-icon.png";
import facebookIcon from "../../../assets/images/facebook-icon.png";
import { Link, NavLink } from "react-router-dom";
import "./SignUpPage.css";
import SignInPage from "../SignInPage/SignInPage";
import Join from "./Join";
import useAuth from "../../../pages/Hooks/useAuth";

const SignUpPage = () => {
  const [loginUser,setLoginUser] = useState()
  const [isClick, setIsClick] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [isJoin, setIsJoin] = useState(false);
  const {signinWithGoogle} = useAuth()
  return (
    // MODAL FOR SIGN-IN POPUP STARTED

    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0">
            {/* CONDITIONAL RENDERING STARTED FOR BACK BUTTON ON MODAL */}

            {isClick &&
              (!isJoin ? (
                <button
                  onClick={() => setIsClick(false)}
                  className={
                    isForgetPassword
                      ? "d-none"
                      : "modal-back-btn bg-transparent border-0"
                  }
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              ) : (
                <button
                  onClick={() => setIsJoin(false)}
                  className={"modal-back-btn bg-transparent border-0"}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              ))}

            {isForgetPassword && (
              <button
                onClick={() => setIsForgetPassword(false)}
                className="modal-back-btn bg-transparent border-0"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            )}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            {/* CONDITIONAL RENDERING ENDED FOR BACK BUTTON ON MODAL */}
          </div>

          {/* MODAL BODY STARTED HERE */}

          <div className="modal-body">
            <img src={logo} alt="logo" className="img-fluid sign-up-logo" />
            {isJoin ? (
              <Join setIsJoin={setIsJoin} />
            ) : (
              <>
                {!isClick ? (
                  <>
                    <h3 className="sign-up-title">
                      Sign in to unlock the best of Tripadvisor.
                    </h3>
                    <div className="sign-up-btn-container">
                      <div>
                        <img
                          src={googleIcon}
                          alt="google icon"
                          className="img-fluid goggle-icon-img"
                        />
                      </div>
                      <div className="text-center w-100">
                        <span onClick={signinWithGoogle}>Continue with Google</span>
                      </div>
                    </div>
                    <div className="sign-up-btn-container">
                      <div>
                        <img
                          src={facebookIcon}
                          alt="google icon"
                          className="img-fluid facebook-icon-img"
                        />
                      </div>
                      <div className="text-center w-100">
                        <span>Continue with Facebook</span>
                      </div>
                    </div>
                    <div className="sign-up-btn-container">
                      <div>
                        <i className="fa-regular fa-envelope email-icon"></i>
                      </div>
                      <div
                        onClick={() => setIsClick(true)}
                        className="text-center w-100"
                      >
                        <span>Continue with Email</span>
                      </div>
                    </div>
                  </>
                ) : (
                  // CALLING SIGN-IN PAGE COMPONENT
                  <SignInPage
                    isForgetPassword={isForgetPassword}
                    setIsForgetPassword={setIsForgetPassword}
                    setIsJoin={setIsJoin}
                  />
                )}
              </>
            )}
          </div>

          {/* MODAL BODY ENDED HERE */}

          {/* MODAL FOOTER STARTED HERE */}

          <div className="modal-footer border-0 text-center">
            {!isForgetPassword && (
              <p className="px-3">
                <small>
                  By proceeding, you agree to our{" "}
                  <NavLink className="text-dark" to="/">
                    Terms of Use
                  </NavLink>{" "}
                  and confirm you have read our{" "}
                  <NavLink className="text-dark" to="/">
                    Privacy and Cookie Statement
                  </NavLink>
                  .
                </small>
              </p>
            )}
            <p className="px-3 mt-2">
              <small>
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy" className="text-dark" >
                  Privacy Policy
                </a>{" "}
                and <br />
                <NavLink className="text-dark" to="/">
                  Terms of Service
                </NavLink>{" "}
                apply.
              </small>
            </p>
          </div>

          {/* MODAL FOOTER ENDED HERE */}
        </div>
      </div>
    </div>

    // MODAL FOR SIGN-IN POPUP ENDED
  );
};

export default SignUpPage;
