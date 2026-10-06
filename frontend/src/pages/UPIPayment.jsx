import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UPIPayment.css";

function UPIPayment() {
  const navigate = useNavigate();

  const [upiId, setUpiId] = useState("");
  const [selectedApp, setSelectedApp] = useState("");

  const subtotal = 240;
  const deliveryFee = 40;
  const total = subtotal + deliveryFee;

  const handlePayment = () => {
    if (!upiId.trim() && !selectedApp) {
      alert("Please enter your UPI ID or select a UPI app.");
      return;
    }

    navigate("/buyer-payment-success");
  };

  return (
    <div className="upi-payment-layout">

      {/* ================= SIDEBAR ================= */}
      <aside className="dashboard-sidebar">
        <div>

          <Link to="/buyer-dashboard" className="dashboard-brand">
            <div className="dashboard-brand-logo">🌾</div>

            <div>
              <h2>Krushiphal</h2>
              <p>Smart Farming, Better Future</p>
            </div>
          </Link>

          <nav className="dashboard-sidebar-nav">

            <Link
              to="/buyer-dashboard"
              className="dashboard-nav-link"
            >
              <span>⌂</span>
              Dashboard
            </Link>

            <Link
              to="/buyer-marketplace"
              className="dashboard-nav-link"
            >
              <span>🥬</span>
              Vegetables
            </Link>

            <Link
              to="/buyer-cart"
              className="dashboard-nav-link"
            >
              <span>🛒</span>
              My Cart
              <b className="nav-badge">2</b>
            </Link>

            <Link
              to="/buyer-order-tracking"
              className="dashboard-nav-link"
            >
              <span>📦</span>
              My Orders
            </Link>

            <Link
              to="/notifications"
              className="dashboard-nav-link"
            >
              <span>🔔</span>
              Notifications
              <b className="nav-badge">3</b>
            </Link>

            <Link
              to="/my-profile"
              className="dashboard-nav-link"
            >
              <span>♙</span>
              My Profile
            </Link>

          </nav>
        </div>

        <Link to="/" className="dashboard-logout">
          <span>↪</span>
          Logout
        </Link>
      </aside>


      {/* ================= MAIN ================= */}
      <main className="upi-payment-main">

        {/* Header */}
        <div className="upi-payment-header">

          <div>
            <p className="upi-page-label">
              SECURE CHECKOUT
            </p>

            <h1>UPI Payment</h1>

            <p className="upi-page-description">
              Complete your payment securely using UPI.
            </p>
          </div>

          <Link
            to="/buyer-payment"
            className="upi-back-btn"
          >
            ← Back to Payment
          </Link>

        </div>


        {/* ================= CONTENT ================= */}
        <div className="upi-payment-content">

          {/* UPI PAYMENT CARD */}
          <section className="upi-form-card">

            <div className="upi-form-header">

              <div className="upi-header-icon">
                📱
              </div>

              <div>
                <h2>Pay with UPI</h2>

                <p>
                  Choose your preferred UPI app or enter your UPI ID.
                </p>
              </div>

            </div>


            {/* UPI APPS */}
            <div className="upi-app-section">

              <h3>Choose UPI App</h3>

              <div className="upi-app-grid">

                <button
                  type="button"
                  className={`upi-app-card ${
                    selectedApp === "googlepay"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedApp("googlepay");
                    setUpiId("");
                  }}
                >
                  <span className="upi-app-icon">
                    G
                  </span>

                  <div>
                    <strong>Google Pay</strong>
                    <small>GPay</small>
                  </div>
                </button>


                <button
                  type="button"
                  className={`upi-app-card ${
                    selectedApp === "phonepe"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedApp("phonepe");
                    setUpiId("");
                  }}
                >
                  <span className="upi-app-icon">
                    पे
                  </span>

                  <div>
                    <strong>PhonePe</strong>
                    <small>UPI Payment</small>
                  </div>
                </button>


                <button
                  type="button"
                  className={`upi-app-card ${
                    selectedApp === "paytm"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedApp("paytm");
                    setUpiId("");
                  }}
                >
                  <span className="upi-app-icon">
                    ₹
                  </span>

                  <div>
                    <strong>Paytm</strong>
                    <small>Pay using UPI</small>
                  </div>
                </button>

              </div>

            </div>


            {/* DIVIDER */}
            <div className="upi-divider">
              <span>OR</span>
            </div>


            {/* UPI ID */}
            <div className="upi-input-group">

              <label htmlFor="upiId">
                Enter UPI ID
              </label>

              <input
                id="upiId"
                type="text"
                value={upiId}
                onChange={(e) => {
                  setUpiId(e.target.value);
                  setSelectedApp("");
                }}
                placeholder="example@upi"
              />

              <small>
                Example: yourname@oksbi
              </small>

            </div>


            {/* SECURITY */}
            <div className="upi-security-box">

              <span>🔒</span>

              <div>
                <strong>
                  Secure UPI Payment
                </strong>

                <p>
                  Your payment information is protected
                  during checkout.
                </p>
              </div>

            </div>


            {/* PAY BUTTON */}
            <button
              type="button"
              className="upi-pay-button"
              onClick={handlePayment}
            >
              Pay ₹{total} →
            </button>


            <Link
              to="/buyer-payment"
              className="upi-cancel-link"
            >
              ← Choose another payment method
            </Link>

          </section>


          {/* ================= ORDER SUMMARY ================= */}
          <section className="upi-summary-card">

            <div className="upi-summary-header">
              <h2>Order Summary</h2>
              <span>3 items</span>
            </div>


            <div className="upi-summary-item">

              <div className="upi-product-icon">
                🍅
              </div>

              <div className="upi-product-info">
                <strong>Tomato</strong>
                <span>2 kg × ₹40</span>
              </div>

              <strong>₹80</strong>

            </div>


            <div className="upi-summary-item">

              <div className="upi-product-icon">
                🥔
              </div>

              <div className="upi-product-info">
                <strong>Potato</strong>
                <span>3 kg × ₹30</span>
              </div>

              <strong>₹90</strong>

            </div>


            <div className="upi-summary-item">

              <div className="upi-product-icon">
                🧅
              </div>

              <div className="upi-product-info">
                <strong>Onion</strong>
                <span>2 kg × ₹35</span>
              </div>

              <strong>₹70</strong>

            </div>


            <div className="upi-summary-divider"></div>


            <div className="upi-summary-row">
              <span>Subtotal</span>
              <strong>₹{subtotal}</strong>
            </div>


            <div className="upi-summary-row">
              <span>Delivery Fee</span>
              <strong>₹{deliveryFee}</strong>
            </div>


            <div className="upi-total-row">
              <span>Total Amount</span>
              <strong>₹{total}</strong>
            </div>


            <div className="upi-payment-method-display">
              <span>📱</span>

              <div>
                <small>PAYMENT METHOD</small>
                <strong>UPI</strong>
              </div>
            </div>

          </section>

        </div>


        {/* FOOTER */}
        <footer className="upi-payment-footer">
          🌱 Fresh from farmers, delivered to your doorstep.
        </footer>

      </main>

    </div>
  );
}

export default UPIPayment;