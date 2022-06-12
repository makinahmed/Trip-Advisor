import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function AdminDashboard() {
  return (
    <div className="container-fluid m-5">
      <div className="row">
        <div className="col-md-4">
          <li>
            <Link to="/admin-dashboard/add-user">Add User</Link>
          </li>
          <li>
            <Link to="/admin-dashboard/add-properties">Add Properties</Link>
          </li>
          <li>
            <Link to="/admin-dashboard/add-places">Add Places</Link>
          </li>
          <li>
            <Link to="/admin-dashboard/add-city">Add City</Link>
          </li>
          <li>
            <Link to="/admin-dashboard/add-insurance">Add Insurance</Link>
          </li>
        </div>

        <div className="col-md-8">
          <h1>Main Menu</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
