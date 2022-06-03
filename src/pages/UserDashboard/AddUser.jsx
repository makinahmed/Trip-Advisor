import React from 'react';

const AddUser = () => {
    return (
        <div>
            <div className="edit-profile-section">
                <div className="form-section w-50 mx-auto">
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Profile</label>
                        <input class="form-control" type="file" id="formFile" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email" />
                    </div>

                    <button type="submit" className="update-btn">
                        Add User
                    </button>

                </div>
            </div>
        </div>
    );
};

export default AddUser;