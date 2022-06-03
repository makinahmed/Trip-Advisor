import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import AddUser from './AddUser';
import './UserDashboard.css';

const UserDashboard = () => {
    const location = useLocation();

    // console.log(location);
    return (
        <>

            <div className="userDashboard-section">


                <div className="container">
                    <div className="link-wrapper">
                        <NavLink className={`${location.pathname == '/user-dashboard' ? "active" : ''}`} to="add-user">Add User</NavLink>
                        <NavLink to="edit-profile">Edit Profile</NavLink>
                    </div>


                    <div className="outlet-div mt-5">


                        {
                            location.pathname == '/user-dashboard' ? <AddUser></AddUser> :
                                <Outlet></Outlet>}
                    </div>
                </div>
            </div>

        </>
    );
};

export default UserDashboard;