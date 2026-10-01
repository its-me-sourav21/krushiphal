import { Link } from "react-router-dom";
import "./BuyerOrderTracking.css";

function BuyerOrderTracking() {
  return (
    <div className="buyer-order-tracking">

      {/* SIDEBAR */}
      <aside className="buyer-sidebar">

        <div>
          <Link to="/buyer-dashboard" className="buyer-brand">
            <div className="buyer-brand-logo">🌾</div>

            <div>
              <h2>Krushiphal</h2>
              <p>Smart Farming, Better Future</p>
            </div>
          </Link>

          <nav className="buyer-nav">

            <Link
              to="/buyer-dashboard"
              className="buyer-nav-link"
            >
              <span>⌂</span>
              Dashboard
            </Link>

            <Link
              to="/buyer-marketplace"
              className="buyer-nav-link"
            >
              <span>🥬</span>
              Vegetables
            </Link>

            <Link
              to="/buyer-cart"
              className="buyer-nav-link"
            >
              <span>🛒</span>
              My Cart
              <b className="nav-badge">2</b>
            </Link>

            <Link
              to="/buyer-order-tracking"
              className="buyer-nav-link active"
            >
              <span>📦</span>
              My Orders
            </Link>

            <Link
              to="/notifications"
              className="buyer-nav-link"
            >
              <span>🔔</span>
              Notifications
              <b className="nav-badge">3</b>
            </Link>

            <Link
              to="/my-profile"
              className="buyer-nav-link"
            >
              <span>♙</span>
              My Profile
            </Link>

          </nav>
        </div>

        <Link to="/" className="buyer-logout">
          <span>↪</span>
          Logout
        </Link>

      </aside>

      {/* MAIN */}
      <main className="buyer-main">

        {/* HEADER */}
        <header className="buyer-header">

          <div className="buyer-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search vegetables..."
            />
          </div>

          <div className="buyer-header-right">

            <button
              type="button"
              className="buyer-notification"
            >
              🔔
              <i></i>
            </button>

            <Link
              to="/buyer-cart"
              className="header-cart"
            >
              🛒
              <span>Cart</span>
              <b>2</b>
            </Link>

            <Link
              to="/my-profile"
              className="buyer-profile"
            >
              <div className="buyer-avatar">
                R
              </div>

              <div>
                <strong>Ramesh Kumar</strong>
                <span>Buyer</span>
              </div>

              <em>⌄</em>
            </Link>

          </div>

        </header>

        {/* PAGE HEADER */}
        <section className="order-page-header">

          <div>
            <span className="order-page-label">
              KRUSHPHAL MARKET
            </span>

            <h1>
              Order Tracking
            </h1>

            <p>
              Track your vegetable order from farm to doorstep.
            </p>
          </div>

          <Link
            to="/buyer-marketplace"
            className="back-marketplace-btn"
          >
            ← Marketplace
          </Link>

        </section>

        {/* ORDER SUMMARY */}
        <section className="order-summary-card">

          <div className="order-summary-top">

            <div>
              <span>ORDER ID</span>

              <h2>
                #KP2049
              </h2>
            </div>

            <span className="order-status">
              In Transit
            </span>

          </div>

          <div className="order-summary-divider"></div>

          <div className="order-summary-details">

            <div>
              <span>Order Date</span>
              <strong>Today, 10:30 AM</strong>
            </div>

            <div>
              <span>Total Amount</span>
              <strong>₹280</strong>
            </div>

            <div>
              <span>Delivery</span>
              <strong>Free</strong>
            </div>

          </div>

        </section>

        {/* DELIVERY STATUS */}
        <section className="delivery-status-card">

          <div className="delivery-status-header">

            <div>
              <h2>
                Delivery Status
              </h2>

              <p>
                Follow your order's journey.
              </p>
            </div>

            <div className="delivery-header-icon">
              🚚
            </div>

          </div>

          <div className="delivery-divider"></div>

          <div className="tracking-list">

            {/* CONFIRMED */}
            <div className="tracking-item completed">

              <div className="tracking-icon">
                ✓
              </div>

              <div className="tracking-content">

                <strong>
                  Order Confirmed
                </strong>

                <p>
                  Your order has been confirmed.
                </p>

              </div>

              <span className="tracking-time">
                Today, 10:30 AM
              </span>

            </div>

            {/* PROCESSING */}
            <div className="tracking-item completed">

              <div className="tracking-icon">
                📦
              </div>

              <div className="tracking-content">

                <strong>
                  Processing
                </strong>

                <p>
                  Farmer is preparing your vegetables.
                </p>

              </div>

              <span className="tracking-time">
                Today, 11:15 AM
              </span>

            </div>

            {/* SHIPPED */}
            <div className="tracking-item completed">

              <div className="tracking-icon">
                🚚
              </div>

              <div className="tracking-content">

                <strong>
                  Shipped
                </strong>

                <p>
                  Your order has been shipped.
                </p>

              </div>

              <span className="tracking-time">
                Expected Today
              </span>

            </div>

            {/* OUT FOR DELIVERY */}
            <div className="tracking-item">

              <div className="tracking-icon pending">
                🛵
              </div>

              <div className="tracking-content">

                <strong>
                  Out for Delivery
                </strong>

                <p>
                  Your order is on the way.
                </p>

              </div>

              <span className="tracking-time">
                Expected Soon
              </span>

            </div>

            {/* DELIVERED */}
            <div className="tracking-item last">

              <div className="tracking-icon pending">
                🏠
              </div>

              <div className="tracking-content">

                <strong>
                  Delivered
                </strong>

                <p>
                  Your vegetables will be delivered.
                </p>

              </div>

              <span className="tracking-time">
                Expected Today
              </span>

            </div>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="buyer-footer">
          🌿 Fresh vegetables. Healthy living. Better farming.
        </footer>

      </main>

    </div>
  );
}

export default BuyerOrderTracking;