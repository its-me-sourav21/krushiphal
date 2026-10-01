import { Link } from "react-router-dom";
import "./BuyerRatingReview.css";

function BuyerRatingReview() {
  const reviews = [
    {
      id: 1,
      product: "Tomato",
      farmer: "Amit Verma",
      location: "Bilaspur, Chhattisgarh",
      rating: 5,
      review:
        "Fresh and good quality tomatoes. Packaging was also neat.",
      date: "12 Sep 2026",
      icon: "🍅",
    },
    {
      id: 2,
      product: "Potato",
      farmer: "Mohan Sahu",
      location: "Rajnandgaon, Chhattisgarh",
      rating: 4,
      review:
        "Good quality potatoes and delivery was on time.",
      date: "08 Sep 2026",
      icon: "🥔",
    },
  ];

  return (
    <div className="buyer-rating-review-layout">
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

      {/* MAIN CONTENT */}
      <main className="buyer-rating-review-main">
        <header className="buyer-rating-review-header">
          <div>
            <p className="buyer-rating-review-label">
              YOUR FEEDBACK
            </p>

            <h1>Ratings & Reviews</h1>

            <p className="buyer-rating-review-subtitle">
              Share your experience with vegetables and farmers.
            </p>
          </div>
        </header>

        {/* REVIEW SUMMARY */}
        <section className="rating-summary-card">
          <div className="rating-summary-score">
            <strong>4.5</strong>

            <div className="rating-stars">
              ★★★★★
            </div>

            <span>Based on 12 reviews</span>
          </div>

          <div className="rating-summary-message">
            <span>🌱</span>

            <div>
              <strong>Your feedback matters</strong>

              <p>
                Your reviews help farmers improve their produce
                and help other buyers make better choices.
              </p>
            </div>
          </div>
        </section>

        {/* WRITE REVIEW */}
        <section className="write-review-card">
          <div className="section-heading">
            <div>
              <span>SHARE YOUR EXPERIENCE</span>
              <h2>Write a Review</h2>
            </div>
          </div>

          <div className="review-product-select">
            <div className="review-product-icon">🍅</div>

            <div>
              <strong>Tomato</strong>
              <span>Amit Verma · Bilaspur</span>
            </div>
          </div>

          <div className="rating-input-section">
            <label>Your Rating</label>

            <div className="rating-input-stars">
              <button type="button">★</button>
              <button type="button">★</button>
              <button type="button">★</button>
              <button type="button">★</button>
              <button type="button">★</button>
            </div>
          </div>

          <div className="review-input-group">
            <label>Your Review</label>

            <textarea
              placeholder="Tell us about the quality, freshness and delivery..."
              rows="5"
            ></textarea>
          </div>

          <button
            type="button"
            className="submit-review-btn"
          >
            Submit Review →
          </button>
        </section>

        {/* PREVIOUS REVIEWS */}
        <section className="previous-reviews-section">
          <div className="section-heading">
            <div>
              <span>YOUR FEEDBACK</span>
              <h2>Previous Reviews</h2>
            </div>

            <strong>{reviews.length} reviews</strong>
          </div>

          <div className="previous-reviews-list">
            {reviews.map((review) => (
              <article
                className="previous-review-card"
                key={review.id}
              >
                <div className="previous-review-top">
                  <div className="review-product-info">
                    <div className="review-product-icon">
                      {review.icon}
                    </div>

                    <div>
                      <h3>{review.product}</h3>

                      <p>
                        {review.farmer} · {review.location}
                      </p>
                    </div>
                  </div>

                  <span className="review-date">
                    {review.date}
                  </span>
                </div>

                <div className="previous-review-rating">
                  <span className="review-stars">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </span>

                  <strong>{review.rating}.0</strong>
                </div>

                <p className="previous-review-text">
                  {review.review}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="buyer-rating-review-footer">
          🌱 Fresh from farmers, delivered to your doorstep.
        </footer>
      </main>
    </div>
  );
}

export default BuyerRatingReview;