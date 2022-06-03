import React, { useState } from "react";
import useAuth from "../../../pages/Hooks/useAuth";
import "./ForgetPassword.css";
const ForgetPassword = () => {
  const [user, setUser] = useState({});
  const { resetPassword, mailSent } = useAuth();

  const onChangeHandler = (e) => {
    setUser(e.target.value);
    console.log(e.target.value);
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    resetPassword(user);
  };

  return (
    <div className="forget-password-container">
      <h3 className="forget-password-in-title">Forgot your password?</h3>

      <p>
        <small>
          No problem. Just enter your email address below — we’ll send you a
          link to reset it.
        </small>
      </p>
      <form action="" className="sign-in-form">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <div class="input-group mb-3">
          <input
            onChange={onChangeHandler}
            type="text"
            className="form-control forget-password-input"
            id="email"
            aria-describedby="basic-addon3"
            placeholder="Email"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            onClick={handleOnClick}
            className="forget-password-submit-btn"
          >
            Send Link
          </button>
        </div>
      </form>
      <div className="text-center text-success fs-5 my-3">
        {mailSent ? <p>Check Your Mail</p> : ""}
      </div>
    </div>
  );
};

export default ForgetPassword;
