import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";


const EditProfile = () => {
  const [profileImg, setProfileImg] = useState(null);
  const [coverImg, setCoverImg] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [about, setAbout] = useState('');
  const [currentCity, setCurrentCity] = useState('');

  const auth = getAuth();
  
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
    
    const user = auth.currentUser;
// 
    fetch(`http://localhost:5000/edit-profile?email=${user?.email}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="edit-profile-section">
        <div className="form-section w-50 mx-auto">
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Profile Photo
            </label>
            <input
              onChange={(e) => setProfileImg(e.target.files[0])}
              name="profileimg"
              class="form-control"
              type="file"
              id="formFile"
            />
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Cover Photo
            </label>
            <input
              onChange={(e) => setCoverImg(e.target.files[0])}
              // onChange={(e) => console.log(e.target.file[0])}
              name="coverimg"
              class="form-control"
              type="file"
              id="formFile"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              First Name
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              name="firstName"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your first name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Last Name
            </label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              name="lastName"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your Last name"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Current City
            </label>
            <input
              onChange={(e) => setCurrentCity(e.target.value)}
              name="currentcity"
              type="currentcity"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="currentcity"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Website
            </label>
            <input
              onChange={(e) => setWebsite(e.target.value)}
              name="website"
              type="website"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="website"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              About You
            </label>
            <input
              onChange={(e) => setAbout(e.target.value)}
              name="aboutyou"
              type="aboutyou"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="aboutyou"
            />
          </div>
          <button onClick={handleOnClick} type="submit" className="update-btn">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
