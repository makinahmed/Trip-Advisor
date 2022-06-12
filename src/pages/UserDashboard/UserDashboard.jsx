import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import "./UserDashboard.css";
import useAuth from "../Hooks/useAuth";

const UserDashboard = () => {
  const { userData } = useAuth();
  const location = useLocation();

  const [profileImg, setProfileImg] = useState(null);
  const [coverImg, setCoverImg] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [about, setAbout] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  const auth = getAuth();
  let user;
  const handleOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profileimg", profileImg);
    formData.append("coverimg", coverImg);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("website", website);
    formData.append("about", about);
    formData.append("currentcity", currentCity);

    user = auth?.currentUser;
    //
    fetch(
      `https://tripadvisorarshad.herokuapp.com/edit-profile?email=${user?.email}`,
      {
        method: "PUT",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {userData.email ? (
        <div className="userDashboard-section">
          {/* <div className="container">
                    <div className="link-wrapper">
                        <NavLink className={`${location.pathname == '/user-dashboard' ? "active" : ''}`} to="add-user">Add User</NavLink>
                        <NavLink to="edit-profile">Edit Profile</NavLink>
                    </div>


                    <div className="outlet-div mt-5">


                        {
                            location.pathname == '/user-dashboard' ? <AddUser></AddUser> :
                                <Outlet></Outlet>}
                    </div>
                    
                </div> */}
          {/* console.log(userData); */}
          <div className="cover-photo ">
            <img
              className="cover-img img-fluid w-100"
              src={`data:image/jpg;base64,${userData?.coverimg}`}
              alt=""
            />
          </div>
          <div className="container">
            <div className="wrapper-profile">
              <div className="profile-section">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="d-flex flex-column">
                      <div className="profile-media">
                        <img
                          className="img-fluid"
                          src={`data:image/jpg;base64,${userData?.profileimg}`}
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="user-about">
                          <h4>
                            {userData?.firstName} {userData?.lastName}
                          </h4>
                          <p>@{userData?.firstName?.toLowerCase()}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="user-about">
                      <h3 className="mb-3">Intro</h3>

                      <div className="d-flex mb-2">
                        <div>
                          <i class="fa-solid fa-user"></i>
                        </div>
                        <div>
                          <p className="ms-2">{userData?.aboutyou}</p>
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <div>
                          <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                          <p className="ms-2"> {userData?.currentcity}</p>
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <div>
                          <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                          <p className="ms-2">{userData?.email}</p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div>
                          <i class="fa-brands fa-weebly"></i>
                        </div>
                        <div>
                          <p className="ms-2">{userData?.website}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="edit-area ">
                      <div className="d-flex justify-content-end">
                        <div
                          className="editProfile-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal2"
                        >
                          <p>Edit Profile</p>
                        </div>
                        <div className="">
                          <div className="setting-icon">
                            <i class="fa-solid fa-gear"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* modal */}
                    <div
                      class="modal fade"
                      id="exampleModal2"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              User Update
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <div className="row py-3">
                              <div className="col-lg-3">
                                <div className="modal-img">
                                  <img
                                    className="img-fluid"
                                    src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-lg-9">
                                <div className="change-details">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div class="mb-2">
                                        <label
                                          for="exampleFormControlInput1"
                                          class="form-label"
                                        >
                                          Profile photo{" "}
                                        </label>
                                        <input
                                          name="profileimg"
                                          onChange={(e) =>
                                            setProfileImg(e.target.files[0])
                                          }
                                          type="file"
                                          class="form-control"
                                          id="exampleFormControlInput1"
                                          placeholder="profile photo "
                                        />
                                      </div>
                                    </div>

                                    <div className="col-lg-6">
                                      <div class="mb-2">
                                        <label
                                          for="exampleFormControlInput1"
                                          class="form-label"
                                        >
                                          Cover photo{" "}
                                        </label>
                                        <input
                                          onChange={(e) =>
                                            setCoverImg(e.target.files[0])
                                          }
                                          name="coverimg"
                                          class="form-control"
                                          type="file"
                                          id="exampleFormControlInput1"
                                          placeholder="cover photo"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div class="mb-2">
                                        <label
                                          for="exampleFormControlInput1"
                                          class="form-label"
                                        >
                                          First Name
                                        </label>
                                        <input
                                          onChange={(e) =>
                                            setFirstName(e.target.value)
                                          }
                                          name="firstName"
                                          type="text"
                                          class="form-control"
                                          id="exampleFormControlInput1"
                                          placeholder="First Name"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-lg-6">
                                      <div class="mb-2">
                                        <label
                                          for="exampleFormControlInput1"
                                          class="form-label"
                                        >
                                          Last Name
                                        </label>
                                        <input
                                          onChange={(e) =>
                                            setLastName(e.target.value)
                                          }
                                          type="text"
                                          class="form-control"
                                          name="lastName"
                                          id="exampleFormControlInput1"
                                          laceholder="Enter your Last name"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div class="mb-2">
                                        <label
                                          for="exampleFormControlInput1"
                                          class="form-label"
                                        >
                                          Cureent city{" "}
                                        </label>
                                        <input
                                          onChange={(e) =>
                                            setCurrentCity(e.target.value)
                                          }
                                          name="currentcity"
                                          type="currentcity"
                                          class="form-control"
                                          id="exampleFormControlInput1"
                                          placeholder="currentcity"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div class="mb-2">
                                        <label
                                          for="exampleFormControlInput1"
                                          class="form-label"
                                        >
                                          Email
                                        </label>
                                        <input
                                          onChange={(e) =>
                                            setEmail(e.target.value)
                                          }
                                          name="email"
                                          type="email"
                                          class="form-control"
                                          id="exampleFormControlInput1"
                                          placeholder="Enter email"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div class="mb-2">
                                        <label
                                          for="exampleFormControlInput1"
                                          class="form-label"
                                        >
                                          Website
                                        </label>
                                        <input
                                          onChange={(e) =>
                                            setWebsite(e.target.value)
                                          }
                                          name="website"
                                          type="website"
                                          class="form-control"
                                          id="exampleFormControlInput1"
                                          placeholder="Website"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div class="mb-2">
                                        <label
                                          for="exampleFormControlInput1"
                                          class="form-label"
                                        >
                                          About{" "}
                                        </label>
                                        <input
                                          onChange={(e) =>
                                            setAbout(e.target.value)
                                          }
                                          name="aboutyou"
                                          type="aboutyou"
                                          class="form-control"
                                          id="exampleFormControlInput1"
                                          placeholder="About yourself "
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              onClick={handleOnClick}
                              class="btn btn-primary"
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};

export default UserDashboard;
