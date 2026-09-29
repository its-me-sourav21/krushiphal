import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import OTPVerification from "./pages/OTPVerification";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= AUTHENTICATION ================= */}

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTPVerification />} />


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

      </Routes>
    </BrowserRouter>
  );
}

export default App;