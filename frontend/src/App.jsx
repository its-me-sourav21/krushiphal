import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import FarmSetup from "./pages/FarmSetup";
import MyCrops from "./pages/MyCrops";
import AddProduce from "./pages/AddProduce";
import Marketplace from "./pages/Marketplace";

import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import OrderTracking from "./pages/OrderTracking";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import RatingReview from "./pages/RatingReview";
import Reports from "./pages/Reports";
import Advisory from "./pages/Advisory";
import Profile from "./pages/Profile";

import BuyerDashboard from "./pages/BuyerDashboard";
import BuyerMarketplace from "./pages/BuyerMarketplace";
import BuyerProductDetails from "./pages/BuyerProductDetails";
import BuyerCart from "./pages/BuyerCart";
import BuyerPayment from "./pages/BuyerPayment";
import BuyerPaymentSuccess from "./pages/BuyerPaymentSuccess";
import BuyerOrderTracking from "./pages/BuyerOrderTracking";
import BuyerNotifications from "./pages/BuyerNotifications";
import BuyerRatingReview from "./pages/BuyerRatingReview";
import BuyerMyProfile from "./pages/BuyerMyProfile";

function App() {
  return (
    <Routes>

      {/* =========================
          DEFAULT
      ========================= */}

      <Route
        path="/"
        element={
          <Navigate
            to="/buyer-dashboard"
            replace
          />
        }
      />

      {/* =========================
          AUTH
      ========================= */}

      <Route
        path="/login"
        element={<Login />}
      />

      {/* =========================
          FARMER
      ========================= */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

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

      <Route
        path="/my-crops"
        element={<MyCrops />}
      />

      <Route
        path="/add-produce"
        element={<AddProduce />}
      />

      <Route
        path="/marketplace"
        element={<Marketplace />}
      />

      {/* Farmer Product Details */}
      <Route
        path="/product-details/:id"
        element={<ProductDetails />}
      />

      {/* Farmer Cart */}
      <Route
        path="/cart"
        element={<Cart />}
      />

      {/* Farmer Order Tracking */}
      <Route
        path="/order-tracking"
        element={<OrderTracking />}
      />

      {/* Farmer Payment */}
      <Route
        path="/payment"
        element={<Payment />}
      />

      <Route
        path="/payment/:id"
        element={<Payment />}
      />

      {/* Farmer Payment Success */}
      <Route
        path="/payment-success"
        element={<PaymentSuccess />}
      />

      <Route
        path="/payment-success/:id"
        element={<PaymentSuccess />}
      />

      {/* Farmer Rating & Review */}
      <Route
        path="/rating-review"
        element={<RatingReview />}
      />

      <Route
        path="/rating/:id"
        element={<RatingReview />}
      />

      {/* Farmer Reports */}
      <Route
        path="/reports"
        element={<Reports />}
      />

      {/* Farmer Advisory */}
      <Route
        path="/advisory"
        element={<Advisory />}
      />

      {/* Farmer Profile */}
      <Route
        path="/my-profile"
        element={<Profile />}
      />

      {/* =========================
          BUYER
      ========================= */}

      <Route
        path="/buyer-dashboard"
        element={<BuyerDashboard />}
      />

      <Route
        path="/buyer-marketplace"
        element={<BuyerMarketplace />}
      />

      {/* Buyer Product Details */}
      <Route
        path="/buyer-product-details"
        element={<BuyerProductDetails />}
      />

      <Route
        path="/buyer-cart"
        element={<BuyerCart />}
      />

      <Route
        path="/buyer-payment"
        element={<BuyerPayment />}
      />

      <Route
        path="/buyer-payment-success"
        element={<BuyerPaymentSuccess />}
      />

      <Route
        path="/buyer-order-tracking"
        element={<BuyerOrderTracking />}
      />

      <Route
        path="/buyer-notifications"
        element={<BuyerNotifications />}
      />

      <Route
        path="/buyer-rating-review"
        element={<BuyerRatingReview />}
      />

      <Route
        path="/buyer-my-profile"
        element={<BuyerMyProfile />}
      />

      {/* =========================
          UNKNOWN ROUTE
      ========================= */}

      <Route
        path="*"
        element={
          <Navigate
            to="/buyer-dashboard"
            replace
          />
        }
      />

    </Routes>
  );
}

export default App;