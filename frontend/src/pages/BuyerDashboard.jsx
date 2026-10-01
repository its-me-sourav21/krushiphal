import { Link } from "react-router-dom";
import "./BuyerDashboard.css";

function BuyerDashboard() {
  return (
    <div className="buyer-dashboard">

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
              className="buyer-nav-link active"
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
              className="buyer-nav-link"
            >
              <span>📦</span>
              My Orders
            </Link>

            {/* BUYER NOTIFICATIONS */}
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

            {/* CLICKABLE NOTIFICATION BELL */}
            <Link
              to="/buyer-notifications"
              className="buyer-notification"
              aria-label="Notifications"
            >
              🔔
              <i></i>
            </Link>

            <Link
              to="/buyer-cart"
              className="header-cart"
            >
              🛒
              <span>Cart</span>
              <b>2</b>
            </Link>

            <Link
              to="/buyer-my-profile"
              className="buyer-profile"
            >
              <div className="buyer-avatar">R</div>

              <div>
                <strong>Ramesh Kumar</strong>
                <span>Buyer</span>
              </div>

              <em>⌄</em>
            </Link>

          </div>
        </header>

        {/* HERO */}
        <section className="buyer-hero">

          <div className="hero-text">

            <span className="hero-small">
              WELCOME BACK 👋
            </span>

            <h1>
              Good Morning, <span>Ramesh!</span>
            </h1>

            <p>
              Fresh vegetables directly from trusted local
              farmers, delivered to your doorstep.
            </p>

            <div className="hero-actions">

              <Link
                to="/buyer-marketplace"
                className="shop-now-btn"
              >
                Shop Vegetables →
              </Link>

              <Link
                to="/buyer-order-tracking"
                className="orders-btn"
              >
                View Orders
              </Link>

            </div>

          </div>

          <div className="hero-visual">

            <div className="hero-circle"></div>

            <div className="hero-basket">
              🧺
            </div>

            <div className="hero-tomato">
              🍅
            </div>

            <div className="hero-carrot">
              🌽
            </div>

            <div className="hero-leaf">
              🌿
            </div>

          </div>

        </section>

        {/* STATS */}
        <section className="buyer-stats">

          <div className="stat-card">

            <div className="stat-icon green-icon">
              🛒
            </div>

            <div>
              <span>Cart Items</span>
              <strong>02</strong>
            </div>

            <Link to="/buyer-cart">
              View →
            </Link>

          </div>

          <div className="stat-card">

            <div className="stat-icon blue-icon">
              📦
            </div>

            <div>
              <span>Total Orders</span>
              <strong>08</strong>
            </div>

            <Link to="/buyer-order-tracking">
              View →
            </Link>

          </div>

          <div className="stat-card">

            <div className="stat-icon orange-icon">
              💰
            </div>

            <div>
              <span>Total Spent</span>
              <strong>₹4,280</strong>
            </div>

            <Link to="/buyer-order-tracking">
              Details →
            </Link>

          </div>

          <div className="stat-card">

            <div className="stat-icon purple-icon">
              ⭐
            </div>

            <div>
              <span>Reviews Given</span>
              <strong>06</strong>
            </div>

            <Link to="/buyer-rating-review">
              Reviews →
            </Link>

          </div>

        </section>

        {/* VEGETABLE SHOPPING */}
        <section className="vegetable-shopping">

          <div className="section-heading">

            <div>
              <span>FRESH VEGETABLES</span>
              <h2>Shop Vegetables</h2>
            </div>

            <Link to="/buyer-marketplace">
              View All →
            </Link>

          </div>

          <div className="vegetable-shopping-card">

            <div className="vegetable-big-icon">
              🥬
            </div>

            <div className="vegetable-shopping-content">

              <span>DIRECT FROM FARMERS</span>

              <h2>
                Fresh vegetables for your everyday needs.
              </h2>

              <p>
                Choose from fresh tomatoes, potatoes, onions,
                maize and other locally grown vegetables.
              </p>

              <Link to="/buyer-marketplace">
                Browse Vegetables →
              </Link>

            </div>

            <div className="vegetable-decoration">
              <span>🍅</span>
              <span>🥔</span>
              <span>🧅</span>
              <span>🌽</span>
            </div>

          </div>

        </section>

        {/* ORDER + PRICE */}
        <section className="buyer-content-grid">

          {/* RECENT ORDER */}
          <div className="order-panel">

            <div className="section-heading">

              <div>
                <span>YOUR ACTIVITY</span>
                <h2>Recent Vegetable Order</h2>
              </div>

              <Link to="/buyer-order-tracking">
                View All →
              </Link>

            </div>

            <div className="order-main">

              <div className="order-icon">
                📦
              </div>

              <div className="order-info">

                <strong>Order #KP2048</strong>

                <span>
                  Tomato, Potato & Onion
                </span>

                <small>
                  3 items • ₹480
                </small>

              </div>

              <b>
                Delivered
              </b>

            </div>

            <div className="order-progress">

              <div className="progress-line"></div>

              <div className="progress-step active">
                <i>✓</i>
                <span>Placed</span>
              </div>

              <div className="progress-step active">
                <i>✓</i>
                <span>Confirmed</span>
              </div>

              <div className="progress-step active">
                <i>✓</i>
                <span>Delivered</span>
              </div>

            </div>

            <div className="order-footer">

              <span>
                Delivered today, 10:30 AM
              </span>

              <Link to="/buyer-order-tracking">
                Track Order →
              </Link>

            </div>

          </div>

          {/* VEGETABLE PRICES */}
          <div className="price-panel">

            <div className="section-heading">

              <div>
                <span>VEGETABLE MARKET</span>
                <h2>Today's Prices</h2>
              </div>

              <Link to="/buyer-marketplace">
                Shop →
              </Link>

            </div>

            <div className="price-list">

              <div className="price-row">

                <div className="price-product">

                  <span>🍅</span>

                  <div>
                    <strong>Tomato</strong>
                    <small>per kg</small>
                  </div>

                </div>

                <strong>₹40</strong>

                <em className="price-up">
                  +3.2%
                </em>

              </div>

              <div className="price-row">

                <div className="price-product">

                  <span>🥔</span>

                  <div>
                    <strong>Potato</strong>
                    <small>per kg</small>
                  </div>

                </div>

                <strong>₹30</strong>

                <em className="price-up">
                  +1.8%
                </em>

              </div>

              <div className="price-row">

                <div className="price-product">

                  <span>🧅</span>

                  <div>
                    <strong>Onion</strong>
                    <small>per kg</small>
                  </div>

                </div>

                <strong>₹35</strong>

                <em className="price-down">
                  -1.5%
                </em>

              </div>

              <div className="price-row">

                <div className="price-product">

                  <span>🌽</span>

                  <div>
                    <strong>Maize</strong>
                    <small>per kg</small>
                  </div>

                </div>

                <strong>₹35</strong>

                <em className="price-up">
                  +2.1%
                </em>

              </div>

            </div>

          </div>

        </section>

        {/* VEGETABLE BUYING TIP */}
        <section className="vegetable-tip">

          <div className="tip-icon">
            🌱
          </div>

          <div className="tip-content">

            <span>
              SMART VEGETABLE BUYING TIP
            </span>

            <h2>
              Buy Fresh. Buy Local.
            </h2>

            <p>
              Buying vegetables directly from local farmers
              helps you get fresh produce while supporting
              farming communities.
            </p>

          </div>

          <Link to="/buyer-marketplace">
            Explore Vegetables →
          </Link>

          <div className="tip-decoration">
            🥬
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

export default BuyerDashboard;