import { Link } from "react-router-dom";
import "./BuyerPayment.css";

function BuyerPayment() {
  const subtotal = 240;
  const deliveryFee = 40;
  const total = subtotal + deliveryFee;

  return (
    <div className="buyer-payment-layout">
      {/* Sidebar */}
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
            <Link to="/buyer-dashboard" className="dashboard-nav-link">
              <span>⌂</span>
              Dashboard
            </Link>

            <Link to="/buyer-marketplace" className="dashboard-nav-link">
              <span>🥬</span>
              Vegetables
            </Link>

            <Link to="/buyer-cart" className="dashboard-nav-link">
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

            <Link to="/notifications" className="dashboard-nav-link">
              <span>🔔</span>
              Notifications
              <b className="nav-badge">3</b>
            </Link>

            <Link to="/my-profile" className="dashboard-nav-link">
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

      {/* Main */}
      <main className="buyer-payment-main">
        <div className="buyer-payment-top">
          <div>
            <p className="payment-page-label">SECURE CHECKOUT</p>
            <h1>Payment</h1>
            <p>Complete your order securely.</p>
          </div>

          <Link to="/buyer-cart" className="payment-back-btn">
            ← Back to Cart
          </Link>
        </div>

        <div className="buyer-payment-content">
          {/* Payment Form */}
          <section className="payment-form-card">
            <div className="payment-card-header">
              <div>
                <h2>Payment Details</h2>
                <p>Choose your preferred payment method.</p>
              </div>

              <span className="secure-payment-badge">🔒 Secure</span>
            </div>

            <div className="payment-methods">
              <button type="button" className="payment-method active">
                <span>💳</span>

                <div>
                  <strong>Card</strong>
                  <small>Credit / Debit Card</small>
                </div>
              </button>

              <button type="button" className="payment-method">
                <span>📱</span>

                <div>
                  <strong>UPI</strong>
                  <small>Google Pay / PhonePe</small>
                </div>
              </button>

              <button type="button" className="payment-method">
                <span>💵</span>

                <div>
                  <strong>Cash</strong>
                  <small>Cash on Delivery</small>
                </div>
              </button>
            </div>

            <div className="payment-input-group">
              <label>Cardholder Name</label>

              <input
                type="text"
                placeholder="Enter cardholder name"
              />
            </div>

            <div className="payment-input-group">
              <label>Card Number</label>

              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength="19"
              />
            </div>

            <div className="payment-input-row">
              <div className="payment-input-group">
                <label>Expiry Date</label>

                <input
                  type="text"
                  placeholder="MM / YY"
                  maxLength="7"
                />
              </div>

              <div className="payment-input-group">
                <label>CVV</label>

                <input
                  type="password"
                  placeholder="•••"
                  maxLength="3"
                />
              </div>
            </div>

            <div className="payment-security-note">
              <span>🔐</span>

              <div>
                <strong>Your payment is secure</strong>

                <p>
                  Your card information is protected and used only for this
                  checkout.
                </p>
              </div>
            </div>
          </section>

          {/* Order Summary */}
          <section className="payment-summary-card">
            <div className="payment-summary-header">
              <h2>Order Summary</h2>
              <span>3 items</span>
            </div>

            <div className="payment-summary-item">
              <div className="summary-item-icon tomato">🍅</div>

              <div className="summary-item-info">
                <strong>Tomato</strong>
                <span>2 kg × ₹40</span>
              </div>

              <strong>₹80</strong>
            </div>

            <div className="payment-summary-item">
              <div className="summary-item-icon potato">🥔</div>

              <div className="summary-item-info">
                <strong>Potato</strong>
                <span>3 kg × ₹30</span>
              </div>

              <strong>₹90</strong>
            </div>

            <div className="payment-summary-item">
              <div className="summary-item-icon onion">🧅</div>

              <div className="summary-item-info">
                <strong>Onion</strong>
                <span>2 kg × ₹35</span>
              </div>

              <strong>₹70</strong>
            </div>

            <div className="payment-summary-divider"></div>

            <div className="payment-summary-row">
              <span>Subtotal</span>
              <strong>₹{subtotal}</strong>
            </div>

            <div className="payment-summary-row">
              <span>Delivery Fee</span>
              <strong>₹{deliveryFee}</strong>
            </div>

            <div className="payment-total-row">
              <span>Total Amount</span>
              <strong>₹{total}</strong>
            </div>

            <Link
              to="/buyer-payment-success"
              className="pay-now-btn"
            >
              Pay ₹{total} →
            </Link>

            <Link
              to="/buyer-cart"
              className="continue-shopping-link"
            >
              ← Back to Cart
            </Link>
          </section>
        </div>

        {/* Delivery Address */}
        <div className="payment-delivery-card">
          <div className="delivery-icon">📍</div>

          <div>
            <span>DELIVERY ADDRESS</span>

            <strong>Ramesh Kumar</strong>

            <p>
              Your saved delivery address will be used for this order.
            </p>
          </div>

          <button
            type="button"
            className="change-address-btn"
          >
            Change
          </button>
        </div>

        <footer className="buyer-payment-footer">
          🌱 Fresh from farmers, delivered to your doorstep.
        </footer>
      </main>
    </div>
  );
}

export default BuyerPayment;