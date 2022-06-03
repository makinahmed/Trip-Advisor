import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../pages/Hooks/useAuth";
import "./Join.css";

const Join = ({ setIsJoin }) => {
    const [createUser, setCreateUser] = useState({})
    const { registerUser,error,setError } = useAuth();
    

      const handleOnBlur = e => {
         
        const field = e.target.name;
        const value = e.target.value;
        const newCreateUser = { ...createUser }
        newCreateUser[field] = value;
        setCreateUser(newCreateUser)
      
    }
        const handleOnClick = (e) => {
           e.preventDefault()
        registerUser(createUser.email, createUser.password)
        

     fetch(`http://localhost:5000/add-user`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(createUser)
        })
            .then(res => res.json())
            .then(data => setError(data.message))
    }

    // console.log("I am error ",error);
  return (
    // JOIN REGISTER CONTAINER STARTED

    <div className="join-container">
      <h3 className="join-container-title">
        Join to unlock the best of Tripadvisor
      </h3>

      {/* JOIN REGISTER FORM STARTED  */}

      <form action="" className="sign-in-form">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <label for="first name" className="form-label">
              First Name
            </label>
            <div className="input-group mb-3">
              <input
                name="firstName"
                type="text"
                className="form-control w-100 name-input"
                id="first name"
                aria-describedby="basic-addon3"
                placeholder="First Name"
                onChange={handleOnBlur}
              />
            </div>
          </div>
          <div>
            <label for="last name" className="form-label">
              Last Name
            </label>
            <div className="input-group mb-3">
              <input
              onChange={handleOnBlur}
              name="lastName"
                type="text"
                className="form-control w-100 name-input"
                id="last name"
                aria-describedby="basic-addon3"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <label for="email" className="form-label">
          Email address
        </label>
        <div className="input-group mb-3">
          <input
          onChange={handleOnBlur}
           name="email"
            type="text"
            className="form-control create-email-input"
            id="email"
            aria-describedby="basic-addon3"
            placeholder="Email"
          />
        </div>
        <label for="password" className="form-label">
          Create a password
        </label>
        <div className="input-group mb-2">
          <input
          onChange={handleOnBlur}
          name="password" 
            type="text"
            className="form-control create-password-input"
            id="password"
            aria-describedby="basic-addon3"
            placeholder="Password"
          />
        </div>

        <div className="text-center">
          <button  onClick={handleOnClick} type="submit" className="sign-in-btn">
            Join
          </button>
          <br />
           <span style={{color:'red',fontSize:'10px',}}>{error ? "This email has already taken! Please Try with another email .": ""}</span>
        </div>
       {/* error?.message? "This email has already taken! Please Try with another email .": "" */}
      </form>

      {/* JOIN REGISTER FORM ENDED  */}

      {/* JOIN BOTTOM CONTAINER STARTED  */}

      <div className="sign-in-bottom-container text-center my-4">
        <div className="sign-in-bottom-top d-flex align-items-center justify-content-center">
          <div className="hr"></div>
          <span className="px-2">Already a member?</span>
          <div className="hr"></div>
        </div>
        <button
          onClick={() => setIsJoin(false)}
          className="switch-to-join-btn my-2"
        >
          <span className="text-decoration-underline">Sign In</span> using your
          Tripadvisor account.
        </button>
      </div>

      {/* JOIN BOTTOM CONTAINER ENDED  */}
    </div>

    // JOIN REGISTER CONTAINER ENDED
  );
};

export default Join;
