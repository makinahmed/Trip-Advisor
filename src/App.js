import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import AddUser from "./pages/UserDashboard/AddUser";
import EditProfile from "./pages/UserDashboard/EditProfile";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import "./App.css";
import AuthContext from "./pages/Context/AuthContext";

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-dashboard" element={<UserDashboard />}>
            <Route path="add-user" element={<AddUser />} />
            <Route path="edit-profile" element={<EditProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
