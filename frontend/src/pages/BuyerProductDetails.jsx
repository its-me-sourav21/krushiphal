import { Link } from "react-router-dom";
import "./BuyerProductDetails.css";

function BuyerProductDetails() {
  const product = {
    name: "Tomato",
    icon: "🍅",
    variety: "Fresh Red Tomato",
    price: "₹40",
    unit: "per kg",
    farmer: "Amit Verma",
    location: "Bilaspur, Chhattisgarh",
    quantity: "120 kg available",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=1200&q=80",
  };

  return (
    <div className="buyer-product-details-layout">
      {/* MASTER DASHBOARD SIDEBAR */}
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
              className="buyer-nav-link active"
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
              className="buyer-nav-link"
            >
              <span>📦</span>
              My Orders
            </Link>

            <Link
              to="/buyer-notifications"
              className="buyer-nav-link"
            >
              <span>🔔</span>
              Notifications
              <b className="nav-badge">3</b>
            </Link>

            <Link
              to="/buyer-my-profile"
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
      <main className="buyer-product-details-main">
        <div className="buyer-product-details-top">
          <Link
            to="/buyer-marketplace"
            className="back-link"
          >
            ← Back to Vegetables
          </Link>

          <Link
            to="/buyer-cart"
            className="details-cart-button"
          >
            🛒 View Cart
          </Link>
        </div>

        <section className="buyer-product-details-card">
          <div className="buyer-details-image-section">
            <div className="buyer-details-image">
              <img
                src={product.image}
                alt={product.name}
              />

              <span className="details-fresh-badge">
                Fresh Produce
              </span>

              <span className="details-product-icon">
                {product.icon}
              </span>
            </div>
          </div>

          <div className="buyer-details-content">
            <span className="details-label">
              FRESH FROM FARM
            </span>

            <h1>{product.name}</h1>

            <p className="details-variety">
              {product.variety}
            </p>

            <div className="details-rating">
              <span>★★★★★</span>
              <p>4.8 · Fresh local produce</p>
            </div>

            <div className="details-price">
              <strong>{product.price}</strong>
              <span>{product.unit}</span>
            </div>

            <p className="details-description">
              Fresh quality tomatoes directly from a trusted local farmer.
              Carefully selected produce for your everyday cooking needs.
            </p>

            <div className="details-info-grid">
              <div className="details-info-item">
                <span>FARMER</span>
                <strong>
                  👨‍🌾 {product.farmer}
                </strong>
              </div>

              <div className="details-info-item">
                <span>LOCATION</span>
                <strong>
                  📍 {product.location}
                </strong>
              </div>

              <div className="details-info-item">
                <span>AVAILABILITY</span>
                <strong className="available">
                  ✓ {product.quantity}
                </strong>
              </div>

              <div className="details-info-item">
                <span>QUALITY</span>
                <strong>
                  🌱 Fresh & Local
                </strong>
              </div>
            </div>

            <div className="details-quantity">
              <span>Quantity</span>

              <div className="quantity-control">
                <button type="button">−</button>
                <strong>1 kg</strong>
                <button type="button">+</button>
              </div>
            </div>

            <div className="details-actions">
              <Link
                to="/buyer-cart"
                className="details-add-cart"
              >
                🛒 Add to Cart
              </Link>

              <Link
                to="/buyer-cart"
                className="details-buy-now"
              >
                Buy Now →
              </Link>
            </div>

            <div className="details-benefits">
              <div>
                <span>🌱</span>

                <p>
                  <strong>Fresh Produce</strong>
                  <small>Direct from farmer</small>
                </p>
              </div>

              <div>
                <span>🚚</span>

                <p>
                  <strong>Easy Delivery</strong>
                  <small>Delivered to your doorstep</small>
                </p>
              </div>

              <div>
                <span>🤝</span>

                <p>
                  <strong>Local Farmer</strong>
                  <small>Support local farming</small>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="buyer-details-note">
          <div className="details-note-icon">
            💡
          </div>

          <div>
            <strong>Smart Buying Tip</strong>

            <p>
              Buying directly from local farmers helps you get fresh produce
              while supporting farming communities.
            </p>
          </div>
        </section>

        <footer className="buyer-details-footer">
          🌱 Fresh from farmers, delivered to your doorstep.
        </footer>
      </main>
    </div>
  );
}

export default BuyerProductDetails;