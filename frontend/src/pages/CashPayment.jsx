import { Link, useNavigate } from "react-router-dom";
import "./CashPayment.css";

function CashPayment() {
  const navigate = useNavigate();

  const subtotal = 240;
  const deliveryFee = 40;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    navigate("/buyer-payment-success");
  };

  return (
    <div className="cash-payment-layout">

      {/* ================= SIDEBAR ================= */}
      <aside className="dashboard-sidebar">

        <div>

          <Link
            to="/buyer-dashboard"
            className="dashboard-brand"
          >
            <div className="dashboard-brand-logo">
              🌾
            </div>

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
              to="/buyer-notifications"
              className="dashboard-nav-link"
            >
              <span>🔔</span>
              Notifications
              <b className="nav-badge">3</b>
            </Link>

            <Link
              to="/buyer-my-profile"
              className="dashboard-nav-link"
            >
              <span>♙</span>
              My Profile
            </Link>

          </nav>
        </div>

        <Link
          to="/"
          className="dashboard-logout"
        >
          <span>↪</span>
          Logout
        </Link>

      </aside>


      {/* ================= MAIN ================= */}
      <main className="cash-payment-main">

        {/* HEADER */}
        <div className="cash-payment-header">

          <div>
            <p className="cash-page-label">
              SECURE CHECKOUT
            </p>

            <h1>
              Cash on Delivery
            </h1>

            <p className="cash-page-description">
              Pay for your order when it is delivered to you.
            </p>
          </div>

          <Link
            to="/buyer-payment"
            className="cash-back-btn"
          >
            ← Back to Payment
          </Link>

        </div>


        {/* ================= CONTENT ================= */}
        <div className="cash-payment-content">

          {/* CASH PAYMENT CARD */}
          <section className="cash-form-card">

            <div className="cash-form-header">

              <div className="cash-header-icon">
                💵
              </div>

              <div>
                <h2>
                  Cash on Delivery
                </h2>

                <p>
                  You can pay in cash when your order arrives.
                </p>
              </div>

            </div>


            {/* SELECTED PAYMENT METHOD */}
            <div className="cash-selected-method">

              <div className="cash-method-icon">
                💵
              </div>

              <div>
                <span>
                  PAYMENT METHOD
                </span>

                <strong>
                  Cash on Delivery
                </strong>
              </div>

              <span className="cash-check">
                ✓
              </span>

            </div>


            {/* INFO BOX */}
            <div className="cash-info-box">

              <span>
                ℹ️
              </span>

              <div>
                <strong>
                  How Cash on Delivery works
                </strong>

                <p>
                  Place your order now and pay the delivery partner
                  in cash when your order reaches your doorstep.
                </p>
              </div>

            </div>


            {/* DELIVERY NOTE */}
            <div className="cash-delivery-note">

              <span>
                🚚
              </span>

              <div>
                <strong>
                  Pay when your order arrives
                </strong>

                <p>
                  Please keep the exact amount ready to make delivery
                  faster and easier.
                </p>
              </div>

            </div>


            {/* SECURITY */}
            <div className="cash-security-box">

              <span>
                🔒
              </span>

              <div>
                <strong>
                  Safe & Simple Payment
                </strong>

                <p>
                  No online payment is required. You only pay after
                  receiving your order.
                </p>
              </div>

            </div>


            {/* PLACE ORDER */}
            <button
              type="button"
              className="cash-place-order-btn"
              onClick={handlePlaceOrder}
            >
              Place Order • ₹{total}
            </button>


            <Link
              to="/buyer-payment"
              className="cash-change-payment-link"
            >
              ← Choose another payment method
            </Link>

          </section>


          {/* ================= ORDER SUMMARY ================= */}
          <section className="cash-summary-card">

            <div className="cash-summary-header">

              <h2>
                Order Summary
              </h2>

              <span>
                3 items
              </span>

            </div>


            {/* TOMATO */}
            <div className="cash-summary-item">

              <div className="cash-product-icon">
                🍅
              </div>

              <div className="cash-product-info">
                <strong>
                  Tomato
                </strong>

                <span>
                  2 kg × ₹40
                </span>
              </div>

              <strong>
                ₹80
              </strong>

            </div>


            {/* POTATO */}
            <div className="cash-summary-item">

              <div className="cash-product-icon">
                🥔
              </div>

              <div className="cash-product-info">
                <strong>
                  Potato
                </strong>

                <span>
                  3 kg × ₹30
                </span>
              </div>

              <strong>
                ₹90
              </strong>

            </div>


            {/* ONION */}
            <div className="cash-summary-item">

              <div className="cash-product-icon">
                🧅
              </div>

              <div className="cash-product-info">
                <strong>
                  Onion
                </strong>

                <span>
                  2 kg × ₹35
                </span>
              </div>

              <strong>
                ₹70
              </strong>

            </div>


            <div className="cash-summary-divider"></div>


            {/* SUBTOTAL */}
            <div className="cash-summary-row">

              <span>
                Subtotal
              </span>

              <strong>
                ₹{subtotal}
              </strong>

            </div>


            {/* DELIVERY */}
            <div className="cash-summary-row">

              <span>
                Delivery Fee
              </span>

              <strong>
                ₹{deliveryFee}
              </strong>

            </div>


            {/* TOTAL */}
            <div className="cash-total-row">

              <span>
                Total Amount
              </span>

              <strong>
                ₹{total}
              </strong>

            </div>


            {/* PAYMENT METHOD */}
            <div className="cash-payment-method-display">

              <span>
                💵
              </span>

              <div>
                <small>
                  PAYMENT METHOD
                </small>

                <strong>
                  Cash on Delivery
                </strong>
              </div>

            </div>

          </section>

        </div>


        {/* DELIVERY ADDRESS */}
        <div className="cash-delivery-address">

          <div className="cash-address-icon">
            📍
          </div>

          <div>

            <span>
              DELIVERY ADDRESS
            </span>

            <strong>
              Ramesh Kumar
            </strong>

            <p>
              Your saved delivery address will be used for this order.
            </p>

          </div>

          <button
            type="button"
            className="cash-change-address-btn"
          >
            Change
          </button>

        </div>


        {/* FOOTER */}
        <footer className="cash-payment-footer">
          🌱 Fresh from farmers, delivered to your doorstep.
        </footer>

      </main>

    </div>
  );
}

export default CashPayment;