import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import OTPVerification from "./pages/OTPVerification";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import FarmerProfile from "./pages/FarmerProfile";
import FarmSetup from "./pages/FarmSetup";
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import AddProduce from "./pages/AddProduce";
import Reports from "./pages/Reports";
import Advisory from "./pages/Advisory";
import MyCrops from "./pages/MyCrops";
import OrderTracking from "./pages/OrderTracking";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import RatingReview from "./pages/RatingReview";
import LoginSecurity from "./pages/LoginSecurity";
import Notifications from "./pages/Notifications";
import HelpSupport from "./pages/HelpSupport";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= AUTHENTICATION ================= */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/otp"
          element={<OTPVerification />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

        <Route
          path="/password-reset-success"
          element={<PasswordResetSuccess />}
        />


        {/* ================= FARMER PROFILE SETUP ================= */}

        <Route
          path="/profile"
          element={<FarmerProfile />}
        />


        {/* ================= MY FARM ================= */}

        <Route
          path="/farm-setup"
          element={<FarmSetup />}
        />

        <Route
          path="/my-farm"
          element={<FarmSetup />}
        />

        <Route
          path="/farm-setup-form"
          element={<FarmSetup />}
        />


        {/* ================= DASHBOARD ================= */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />


        {/* ================= MY CROPS ================= */}

        <Route
          path="/my-crops"
          element={<MyCrops />}
        />

        <Route
          path="/add-produce"
          element={<AddProduce />}
        />


        {/* ================= MARKETPLACE ================= */}

        <Route
          path="/marketplace"
          element={<Marketplace />}
        />

        <Route
          path="/product-details"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />


        {/* ================= ORDER ================= */}

        <Route
          path="/order-tracking"
          element={<OrderTracking />}
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

        <Route
          path="/payment-success"
          element={<PaymentSuccess />}
        />

        <Route
          path="/rating-review"
          element={<RatingReview />}
        />


        {/* ================= REPORTS ================= */}

        <Route
          path="/reports"
          element={<Reports />}
        />


        {/* ================= ADVISORY ================= */}

        <Route
          path="/advisory"
          element={<Advisory />}
        />


        {/* ================= MY PROFILE ================= */}

        <Route
          path="/my-profile"
          element={<Profile />}
        />


        {/* ================= LOGIN & SECURITY ================= */}

        <Route
          path="/login-security"
          element={<LoginSecurity />}
        />


        {/* ================= NOTIFICATIONS ================= */}

        <Route
          path="/notifications"
          element={<Notifications />}
        />


        {/* ================= HELP & SUPPORT ================= */}

        <Route
          path="/help-support"
          element={<HelpSupport />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;