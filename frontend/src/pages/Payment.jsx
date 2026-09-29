import { Link, useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    navigate("/payment-success");
  };

  return (
    <div className="payment-layout">
      {/* Sidebar */}
      <aside className="payment-sidebar">
        <div className="payment-brand">
          <div className="payment-brand-logo">🌿</div>

          <div>
            <h2>Krushiphal</h2>
            <p>Smart Farming, Better Future</p>
          </div>
        </div>

        <nav className="payment-sidebar-nav">
          <Link to="/dashboard" className="payment-nav-link">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link to="/farm-setup" className="payment-nav-link">
            <span>🚜</span>
            My Farm
          </Link>

          <Link to="/my-crops" className="payment-nav-link">
            <span>🌱</span>
            My Crops
          </Link>

          <Link to="/marketplace" className="payment-nav-link">
            <span>🛒</span>
            Marketplace
          </Link>

          <Link to="/dashboard" className="payment-nav-link">
            <span>☀️</span>
            Weather
          </Link>

          <Link to="/reports" className="payment-nav-link">
            <span>▥</span>
            Reports
          </Link>

          <Link to="/advisory" className="payment-nav-link">
            <span>💡</span>
            Advisory
          </Link>

          <Link to="/my-profile" className="payment-nav-link">
            <span>♙</span>
            My Profile
          </Link>
        </nav>

        <div className="payment-sidebar-bottom">
          <div className="payment-green-message">
            <h3>
              Together
              <br />
              for a Greener
              <br />
              Tomorrow
            </h3>

            <p>
              Better farming
              <br />
              for a sustainable
              <br />
              future.
            </p>

            <div className="payment-farmer-art">👨‍🌾</div>
          </div>

          <Link to="/" className="payment-logout">
            <span>↪</span>
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="payment-main">
        <header className="payment-header">
          <div>
            <p className="payment-label">KRUSHPHAL MARKET</p>

            <h1>Secure Payment</h1>

            <p className="payment-subtitle">
              Complete your payment to place the order.
            </p>
          </div>

          <Link to="/cart" className="back-cart-btn">
            ← Back to Cart
          </Link>
        </header>

        <div className="payment-content">
          {/* Payment Form */}
          <section className="payment-form-card">
            <div className="payment-card-title">
              <div>
                <h2>Payment Method</h2>
                <p>Select your preferred payment option.</p>
              </div>

              <span className="secure-badge">🔒 Secure</span>
            </div>

            <div className="payment-methods">
              <label className="payment-method active">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />

                <div className="payment-method-icon">
                  💳
                </div>

                <div>
                  <strong>Credit / Debit Card</strong>
                  <span>Visa, Mastercard, RuPay</span>
                </div>
              </label>

              <label className="payment-method">
                <input type="radio" name="payment" />

                <div className="payment-method-icon">
                  📱
                </div>

                <div>
                  <strong>UPI Payment</strong>
                  <span>Google Pay, PhonePe, Paytm</span>
                </div>
              </label>

              <label className="payment-method">
                <input type="radio" name="payment" />

                <div className="payment-method-icon">
                  💵
                </div>

                <div>
                  <strong>Cash on Delivery</strong>
                  <span>Pay when your order arrives</span>
                </div>
              </label>
            </div>

            <form
              className="payment-form"
              onSubmit={handlePayment}
            >
              <div className="form-section-title">
                <h3>Card Details</h3>
              </div>

              <div className="form-group">
                <label htmlFor="cardName">
                  Cardholder Name
                </label>

                <input
                  id="cardName"
                  type="text"
                  placeholder="Enter cardholder name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cardNumber">
                  Card Number
                </label>

                <input
                  id="cardNumber"
                  type="text"
                  inputMode="numeric"
                  maxLength="19"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="payment-form-row">
                <div className="form-group">
                  <label htmlFor="expiry">
                    Expiry Date
                  </label>

                  <input
                    id="expiry"
                    type="text"
                    placeholder="MM / YY"
                    maxLength="5"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cvv">
                    CVV
                  </label>

                  <input
                    id="cvv"
                    type="password"
                    inputMode="numeric"
                    maxLength="3"
                    placeholder="•••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="pay-now-btn"
              >
                Pay ₹185 →
              </button>

              <p className="payment-security-text">
                🔒 Your payment information is encrypted and secure.
              </p>
            </form>
          </section>

          {/* Order Summary */}
          <aside className="payment-summary">
            <div className="payment-summary-header">
              <h2>Order Summary</h2>
              <span>2 Items</span>
            </div>

            <div className="summary-product">
              <div className="summary-product-image tomato-image">
                <img
                  src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80"
                  alt="Fresh Tomatoes"
                />
              </div>

              <div>
                <h3>Fresh Tomatoes</h3>
                <p>2 kg × ₹40</p>
                <strong>₹80</strong>
              </div>
            </div>

            <div className="summary-product">
              <div className="summary-product-image potato-image">
                <img
                  src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=300&q=80"
                  alt="Fresh Potatoes"
                />
              </div>

              <div>
                <h3>Fresh Potatoes</h3>
                <p>3 kg × ₹35</p>
                <strong>₹105</strong>
              </div>
            </div>

            <div className="payment-summary-divider"></div>

            <div className="payment-summary-row">
              <span>Subtotal</span>
              <strong>₹185</strong>
            </div>

            <div className="payment-summary-row">
              <span>Delivery</span>
              <strong className="payment-free">
                FREE
              </strong>
            </div>

            <div className="payment-summary-total">
              <span>Total Amount</span>
              <strong>₹185</strong>
            </div>

            <div className="payment-trust-box">
              <span>🛡️</span>

              <div>
                <strong>Safe & Secure Payment</strong>
                <p>
                  Your transaction is protected with secure
                  payment processing.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Payment;