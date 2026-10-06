import { Link, useNavigate } from "react-router-dom";
import "./BuyerCart.css";

function BuyerCart() {
  const navigate = useNavigate();

  const cartItems = [
    {
      id: 1,
      name: "Tomato",
      variety: "Fresh Red Tomato",
      farmer: "Amit Verma",
      location: "Bilaspur, Chhattisgarh",
      price: 40,
      quantity: 2,
      unit: "kg",
      icon: "🍅",
      image:
        "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Potato",
      variety: "Fresh Farm Potato",
      farmer: "Mohan Sahu",
      location: "Rajnandgaon, Chhattisgarh",
      price: 30,
      quantity: 3,
      unit: "kg",
      icon: "🥔",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Onion",
      variety: "Fresh Red Onion",
      farmer: "Rajesh Yadav",
      location: "Korba, Chhattisgarh",
      price: 35,
      quantity: 2,
      unit: "kg",
      icon: "🧅",
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = 40;
  const total = subtotal + deliveryFee;

  return (
    <div className="buyer-cart-layout">
      {/* MASTER DASHBOARD SIDEBAR */}
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

            <Link
              to="/buyer-cart"
              className="dashboard-nav-link active"
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
          to="/login"
          className="dashboard-logout"
          onClick={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
        >
          <span>↪</span>
          Logout
        </Link>
      </aside>

      {/* MAIN */}
      <main className="buyer-cart-main">
        <header className="buyer-cart-header">
          <div>
            <p className="buyer-cart-label">YOUR SHOPPING CART</p>

            <h1>My Cart</h1>

            <p className="buyer-cart-subtitle">
              Review your fresh vegetables before placing your order.
            </p>
          </div>

          <Link
            to="/buyer-marketplace"
            className="continue-shopping-btn"
          >
            ← Continue Shopping
          </Link>
        </header>

        <section className="buyer-cart-content">
          {/* CART ITEMS */}
          <div className="buyer-cart-items-section">
            <div className="cart-section-heading">
              <div>
                <span>FRESH PRODUCE</span>
                <h2>Cart Items</h2>
              </div>

              <strong>{cartItems.length} items</strong>
            </div>

            <div className="buyer-cart-items">
              {cartItems.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <article
                    className="buyer-cart-item"
                    key={item.id}
                  >
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />

                      <span>{item.icon}</span>
                    </div>

                    <div className="cart-item-details">
                      <div className="cart-item-title">
                        <div>
                          <h3>{item.name}</h3>
                          <p>{item.variety}</p>
                        </div>

                        <strong>₹{itemTotal}</strong>
                      </div>

                      <div className="cart-item-farmer">
                        <span>
                          👨‍🌾 {item.farmer}
                        </span>

                        <span>
                          📍 {item.location}
                        </span>
                      </div>

                      <div className="cart-item-bottom">
                        <div className="cart-quantity-control">
                          <button type="button">−</button>

                          <strong>
                            {item.quantity} {item.unit}
                          </strong>

                          <button type="button">+</button>
                        </div>

                        <span className="cart-item-price">
                          ₹{item.price} / {item.unit}
                        </span>

                        <button
                          type="button"
                          className="remove-cart-item"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="cart-fresh-note">
              <div className="cart-fresh-icon">🌱</div>

              <div>
                <strong>Fresh from local farmers</strong>

                <p>
                  Your vegetables are sourced directly from trusted farmers.
                </p>
              </div>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <aside className="buyer-order-summary">
            <div className="summary-heading">
              <span>ORDER SUMMARY</span>

              <h2>Price Details</h2>
            </div>

            <div className="summary-row">
              <span>Vegetables</span>
              <strong>₹{subtotal}</strong>
            </div>

            <div className="summary-row">
              <span>Delivery Fee</span>
              <strong>₹{deliveryFee}</strong>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total Amount</span>
              <strong>₹{total}</strong>
            </div>

            <Link
              to="/buyer-payment"
              className="proceed-payment-btn"
            >
              Proceed to Payment →
            </Link>

            <div className="secure-payment">
              <span>🔒</span>

              <div>
                <strong>Secure Checkout</strong>

                <p>
                  Your payment information is protected.
                </p>
              </div>
            </div>

            <div className="summary-delivery">
              <span>🚚</span>

              <div>
                <strong>Easy Delivery</strong>

                <p>
                  Fresh vegetables delivered to your doorstep.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <footer className="buyer-cart-footer">
          🌱 Fresh from farmers, delivered to your doorstep.
        </footer>
      </main>
    </div>
  );
}

export default BuyerCart;