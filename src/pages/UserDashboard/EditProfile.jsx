// import { getAuth } from "firebase/auth";
import React, { useState } from "react";

const EditProfile = () => {
  //   const [profileImg, setProfileImg] = useState(null);
  //   const [coverImg, setCoverImg] = useState(null);
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [website, setWebsite] = useState("");
  //   const [about, setAbout] = useState("");
  //   const [currentCity, setCurrentCity] = useState("");

  //  const auth = getAuth();

  //   const handleOnClick = (e) => {
  //     e.preventDefault();

  //     const formData = new FormData();
  //     formData.append("profileimg", profileImg);
  //     formData.append("coverimg", coverImg);
  //     formData.append("firstName", firstName);
  //     formData.append("lastName", lastName);
  //     formData.append("email", email);
  //     formData.append("website", website);
  //     formData.append("about", about);
  //     formData.append("currentcity", currentCity);

  //     const user = auth.currentUser;
  //     //
  //     fetch(`https://tripadvisorarshad.herokuapp.com/edit-profile?email=${user?.email}`, {
  //       method: "PUT",

  //       body: formData,
  //     })
  //       .then((response) => response.json())
  //       .then((result) => {
  //         console.log("Success:", result);
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   };

  return (
    <div>
      <div className="edit-profile-section">
        <div className="form-section w-50 mx-auto">
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Profile
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="email"
            />
          </div>

          <button type="submit" className="update-btn">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
