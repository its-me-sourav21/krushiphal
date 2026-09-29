import { Link } from "react-router-dom";
import "./RatingReview.css";

function RatingReview() {
  return (
    <div className="rating-layout">
      <aside className="rating-sidebar">
        <div className="rating-brand">
          <div className="rating-brand-logo">🌿</div>

          <div>
            <h2>Krushiphal</h2>
            <p>Smart Farming, Better Future</p>
          </div>
        </div>

        <nav className="rating-sidebar-nav">
          <Link to="/dashboard" className="rating-nav-link">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link to="/farm-setup" className="rating-nav-link">
            <span>🚜</span>
            My Farm
          </Link>

          <Link to="/my-crops" className="rating-nav-link">
            <span>🌱</span>
            My Crops
          </Link>

          <Link to="/marketplace" className="rating-nav-link">
            <span>🛒</span>
            Marketplace
          </Link>

          <Link to="/dashboard" className="rating-nav-link">
            <span>☀️</span>
            Weather
          </Link>

          <Link to="/reports" className="rating-nav-link">
            <span>▥</span>
            Reports
          </Link>

          <Link to="/advisory" className="rating-nav-link">
            <span>💡</span>
            Advisory
          </Link>

          <Link to="/my-profile" className="rating-nav-link">
            <span>♙</span>
            My Profile
          </Link>
        </nav>

        <div className="rating-sidebar-bottom">
          <div className="rating-green-message">
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

            <div className="rating-farmer-art">👨‍🌾</div>
          </div>

          <Link to="/" className="rating-logout">
            <span>↪</span>
            Logout
          </Link>
        </div>
      </aside>

      <main className="rating-main">
        <header className="rating-header">
          <div>
            <p className="rating-label">KRUSHPHAL MARKET</p>

            <h1>Rate & Review</h1>

            <p className="rating-subtitle">
              Share your experience with the vegetables you received.
            </p>
          </div>

          <Link
            to="/order-tracking"
            className="rating-back-btn"
          >
            ← Order Tracking
          </Link>
        </header>

        <div className="rating-content">
          <section className="review-product-card">
            <div className="review-product-image">
              <img
                src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=85"
                alt="Fresh Tomatoes"
              />
            </div>

            <div className="review-product-info">
              <p>ORDER #KRU-2026-00125</p>

              <h2>Fresh Tomatoes</h2>

              <span>Purchased from Ramesh Kumar</span>

              <small>Delivered successfully</small>
            </div>

            <div className="delivered-badge">
              ✓ Delivered
            </div>
          </section>

          <section className="review-card">
            <div className="review-card-header">
              <div>
                <h2>How was your experience?</h2>

                <p>
                  Your feedback helps farmers improve their products.
                </p>
              </div>

              <span className="review-icon">⭐</span>
            </div>

            <div className="rating-section">
              <h3>Overall Rating</h3>

              <div className="star-rating">
                <button type="button">★</button>
                <button type="button">★</button>
                <button type="button">★</button>
                <button type="button">★</button>
                <button type="button">★</button>
              </div>

              <p className="rating-hint">
                Tap a star to rate this product
              </p>
            </div>

            <div className="review-form">
              <label htmlFor="review">
                Write a Review
              </label>

              <textarea
                id="review"
                rows="6"
                placeholder="Tell us about the quality, freshness and your overall experience..."
              ></textarea>

              <div className="review-form-footer">
                <span>Maximum 500 characters</span>

                <button
                  type="button"
                  className="submit-review-btn"
                >
                  Submit Review →
                </button>
              </div>
            </div>
          </section>

          <section className="review-info-grid">
            <div className="review-info-card">
              <span>🥬</span>

              <div>
                <h3>Freshness</h3>
                <p>How fresh was the vegetable?</p>
              </div>
            </div>

            <div className="review-info-card">
              <span>📦</span>

              <div>
                <h3>Quality</h3>
                <p>How was the overall quality?</p>
              </div>
            </div>

            <div className="review-info-card">
              <span>🚚</span>

              <div>
                <h3>Delivery</h3>
                <p>How was your delivery experience?</p>
              </div>
            </div>
          </section>

          <div className="rating-actions">
            <Link
              to="/dashboard"
              className="rating-dashboard-btn"
            >
              Go to Dashboard
            </Link>

            <Link
              to="/marketplace"
              className="rating-shopping-btn"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RatingReview;