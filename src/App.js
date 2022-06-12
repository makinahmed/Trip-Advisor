import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import AuthContext from "./pages/Context/AuthContext";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import AddUser from "./pages/UserDashboard/AddUser";
import EditProfile from "./pages/UserDashboard/EditProfile";
import Navigation from "./components/Navigation/Navigation";
import HotelSearch from "./pages/HotelSearch/HotelSearch";
import HotelDetails from "./pages/HotelDetails/HotelDetails";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import AddProperties from "./pages/Admin/AddProperties/AddProperties";
import AddPlaces from "./pages/Admin/AddPlaces/AddPlaces";
import AddCity from "./pages/Admin/AddCity/AddCity";
import AddInsurance from "./pages/Admin/AddInsurance/AddInsurance";
// import AdminDashboardHome from "./pages/Admin/AdminDashboardHome/AdminDashboardHome";

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-dashboard" element={<UserDashboard />}>
            <Route path="add-user" element={<AddUser />} />
            <Route path="edit-profile" element={<EditProfile />} />
          </Route>
          <Route path="/hotel-search" element={<HotelSearch />} />
          <Route path="/hotel-details" element={<HotelDetails />} />
        </Routes>
        <Routes>
          <Route path="/admin-dashboard" element={<AdminDashboard />} >
            <Route path="add-user" element={<AddUser />} />
            <Route path="add-properties" element={<AddProperties />} />
            <Route path="add-places" element={<AddPlaces />} />
            <Route path="add-city" element={<AddCity />} />
            <Route path="add-insurance" element={<AddInsurance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
