import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import OTPVerification from "./pages/OTPVerification";
import FarmerProfile from "./pages/FarmerProfile";
import FarmSetup from "./pages/FarmSetup";
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/profile" element={<FarmerProfile />} />
        <Route path="/farm-setup" element={<FarmSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;