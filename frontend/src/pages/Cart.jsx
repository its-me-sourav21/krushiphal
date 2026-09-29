import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      seller: "Ramesh Kumar",
      location: "Raipur, Chhattisgarh",
      price: 40,
      quantity: 2,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=85",
    },
    {
      id: 2,
      name: "Fresh Potatoes",
      seller: "Mohan Sahu",
      location: "Rajnandgaon, Chhattisgarh",
      price: 35,
      quantity: 3,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=85",
    },
  ];

  return (
    <div className="cart-layout">

      {/* ================= SIDEBAR ================= */}

      <aside className="cart-sidebar">

        <div className="cart-brand">
          <div className="cart-brand-logo">🌿</div>

          <div>
            <h2>Krushiphal</h2>
            <p>Smart Farming, Better Future</p>
          </div>
        </div>

        <nav className="cart-sidebar-nav">

          <Link
            to="/dashboard"
            className="cart-nav-link"
          >
            <span>⌂</span>
            Dashboard
          </Link>

          <Link
            to="/farm-setup"
            className="cart-nav-link"
          >
            <span>🚜</span>
            My Farm
          </Link>

          <Link
            to="/my-crops"
            className="cart-nav-link"
          >
            <span>🌱</span>
            My Crops
          </Link>

          <Link
            to="/marketplace"
            className="cart-nav-link"
          >
            <span>🛒</span>
            Marketplace
          </Link>

          <Link
            to="/reports"
            className="cart-nav-link"
          >
            <span>▥</span>
            Reports
          </Link>

          <Link
            to="/advisory"
            className="cart-nav-link"
          >
            <span>💡</span>
            Advisory
          </Link>

          <Link
            to="/my-profile"
            className="cart-nav-link"
          >
            <span>♙</span>
            My Profile
          </Link>

        </nav>

        <div className="cart-green-message">
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

          <div className="cart-farmer-art">
            👨‍🌾
          </div>
        </div>

        <Link
          to="/"
          className="cart-logout"
        >
          <span>↪</span>
          Logout
        </Link>

      </aside>

      {/* ================= MAIN ================= */}

      <main className="cart-main">

        <header className="cart-header">

          <div>
            <p className="cart-label">
              KRUSHPHAL MARKET
            </p>

            <h1>
              Shopping Cart
            </h1>

            <p className="cart-subtitle">
              Review your selected vegetables before checkout.
            </p>
          </div>

          <Link
            to="/marketplace"
            className="continue-shopping-btn"
          >
            ← Continue Shopping
          </Link>

        </header>

        <div className="cart-content">

          {/* ================= CART ITEMS ================= */}

          <section className="cart-items-section">

            <div className="cart-section-header">

              <div>
                <h2>
                  Your Cart
                </h2>

                <p>
                  {cartItems.length} items selected
                </p>
              </div>

              <span className="cart-item-count">
                {cartItems.length} Items
              </span>

            </div>

            <div className="cart-items">

              {cartItems.map((item) => (
                <div
                  className="cart-item"
                  key={item.id}
                >

                  <div className="cart-item-image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div className="cart-item-info">

                    <div>

                      <h3>
                        {item.name}
                      </h3>

                      <p className="cart-seller">
                        Seller: {item.seller}
                      </p>

                      <p className="cart-location">
                        📍 {item.location}
                      </p>

                    </div>

                    <div className="cart-item-bottom">

                      <div className="cart-quantity">

                        <button type="button">
                          −
                        </button>

                        <span>
                          {item.quantity} {item.unit}
                        </span>

                        <button type="button">
                          +
                        </button>

                      </div>

                      <strong className="cart-item-price">
                        ₹{item.price * item.quantity}
                      </strong>

                    </div>

                  </div>

                  <button
                    type="button"
                    className="remove-cart-item"
                  >
                    ×
                  </button>

                </div>
              ))}

            </div>

          </section>

          {/* ================= ORDER SUMMARY ================= */}

          <aside className="cart-summary">

            <div className="summary-header">

              <h2>
                Order Summary
              </h2>

              <span>
                2 items
              </span>

            </div>

            <div className="summary-row">
              <span>
                Subtotal
              </span>

              <strong>
                ₹185
              </strong>
            </div>

            <div className="summary-row">

              <span>
                Delivery
              </span>

              <strong className="free-text">
                FREE
              </strong>

            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">

              <span>
                Total Amount
              </span>

              <strong>
                ₹185
              </strong>

            </div>

            <button className="checkout-btn">
              Proceed to Checkout →
            </button>

            <div className="secure-payment">

              <span>
                🔒
              </span>

              <div>

                <strong>
                  Secure Checkout
                </strong>

                <p>
                  Your payment information is protected.
                </p>

              </div>

            </div>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default Cart;