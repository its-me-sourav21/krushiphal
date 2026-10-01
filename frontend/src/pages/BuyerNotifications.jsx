import { Link } from "react-router-dom";
import "./BuyerNotifications.css";

function BuyerNotifications() {
  return (
    <div className="buyer-notifications-page">
      {/* SIDEBAR */}
      <aside className="buyer-sidebar">
        <div>
          <Link to="/buyer-dashboard" className="buyer-brand">
            <div className="buyer-brand-logo">🌱</div>

            <div>
              <h2>KrushiPhal</h2>
              <p>Fresh from farmers</p>
            </div>
          </Link>

          <nav className="buyer-nav">
            <Link to="/buyer-dashboard" className="buyer-nav-link">
              <span>🏠</span>
              Dashboard
            </Link>

            <Link to="/buyer-marketplace" className="buyer-nav-link">
              <span>🥕</span>
              Vegetables
            </Link>

            <Link to="/buyer-cart" className="buyer-nav-link">
              <span>🛒</span>
              My Cart
              <b className="nav-badge">2</b>
            </Link>

            <Link to="/buyer-order-tracking" className="buyer-nav-link">
              <span>📦</span>
              My Orders
            </Link>

            <Link
              to="/buyer-notifications"
              className="buyer-nav-link active"
            >
              <span>🔔</span>
              Notifications
              <b className="nav-badge">3</b>
            </Link>

            <Link to="/buyer-my-profile" className="buyer-nav-link">
              <span>👤</span>
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
            <input type="text" placeholder="Search vegetables..." />
          </div>

          <div className="buyer-header-right">
            <Link
              to="/buyer-notifications"
              className="buyer-notification"
              aria-label="Notifications"
            >
              🔔
              <i></i>
            </Link>

            <Link to="/buyer-cart" className="header-cart">
              🛒
              <span>Cart</span>
              <b>2</b>
            </Link>

            <Link to="/buyer-my-profile" className="buyer-profile">
              <div className="buyer-avatar">S</div>

              <div>
                <strong>Sourav</strong>
                <span>Buyer</span>
              </div>

              <em>⌄</em>
            </Link>
          </div>
        </header>

        {/* PAGE HEADING */}
        <section className="notification-heading">
          <div>
            <span>BUYER ACCOUNT</span>
            <h1>Notifications</h1>
            <p>Stay updated with your orders, offers and account activity.</p>
          </div>

          <Link to="/buyer-notifications" className="mark-all-btn">
            Mark all as read
          </Link>
        </section>

        {/* SUMMARY */}
        <section className="notification-summary">
          <Link
            to="/buyer-notifications"
            className="notification-summary-card"
          >
            <div className="summary-icon unread-icon">🔔</div>

            <div>
              <span>Unread notifications</span>
              <strong>3</strong>
            </div>
          </Link>

          <Link
            to="/buyer-order-tracking"
            className="notification-summary-card"
          >
            <div className="summary-icon order-icon-summary">📦</div>

            <div>
              <span>Order updates</span>
              <strong>2</strong>
            </div>
          </Link>

          <Link
            to="/buyer-marketplace"
            className="notification-summary-card"
          >
            <div className="summary-icon offer-icon">🏷️</div>

            <div>
              <span>Offers available</span>
              <strong>4</strong>
            </div>
          </Link>
        </section>

        {/* NOTIFICATION PANEL */}
        <section className="notification-panel">
          <div className="notification-panel-header">
            <div>
              <span>RECENT ACTIVITY</span>
              <h2>All Notifications</h2>
            </div>

            <Link
              to="/buyer-notifications"
              className="notification-filter"
            >
              All
            </Link>
          </div>

          {/* Notification 1 */}
          <Link to="/buyer-order-tracking" className="notification-item unread">
            <div className="notification-item-icon green">📦</div>

            <div className="notification-item-content">
              <div className="notification-title-row">
                <h3>Order confirmed</h3>
                <span>10 min ago</span>
              </div>

              <p>
                Your order <strong>#KP1024</strong> has been confirmed and is
                being prepared by the farmer.
              </p>

              <span className="notification-link">View order →</span>
            </div>

            <div className="unread-dot"></div>
          </Link>

          {/* Notification 2 */}
          <Link to="/buyer-order-tracking" className="notification-item unread">
            <div className="notification-item-icon blue">🚚</div>

            <div className="notification-item-content">
              <div className="notification-title-row">
                <h3>Order is out for delivery</h3>
                <span>1 hour ago</span>
              </div>

              <p>
                Your vegetable order is on the way and will reach your delivery
                address soon.
              </p>

              <span className="notification-link">Track order →</span>
            </div>

            <div className="unread-dot"></div>
          </Link>

          {/* Notification 3 */}
          <Link to="/buyer-marketplace" className="notification-item unread">
            <div className="notification-item-icon orange">🏷️</div>

            <div className="notification-item-content">
              <div className="notification-title-row">
                <h3>Special offer available</h3>
                <span>3 hours ago</span>
              </div>

              <p>
                Fresh seasonal vegetables are available with special discounts
                for buyers today.
              </p>

              <span className="notification-link">Shop now →</span>
            </div>

            <div className="unread-dot"></div>
          </Link>

          {/* Notification 4 */}
          <Link to="/buyer-order-tracking" className="notification-item">
            <div className="notification-item-icon purple">💳</div>

            <div className="notification-item-content">
              <div className="notification-title-row">
                <h3>Payment received</h3>
                <span>Yesterday</span>
              </div>

              <p>
                Payment for order <strong>#KP1019</strong> was successfully
                received.
              </p>

              <span className="notification-link">View order →</span>
            </div>
          </Link>

          {/* Notification 5 */}
          <Link to="/buyer-marketplace" className="notification-item">
            <div className="notification-item-icon red">❤️</div>

            <div className="notification-item-content">
              <div className="notification-title-row">
                <h3>New vegetables added</h3>
                <span>Yesterday</span>
              </div>

              <p>
                Fresh tomatoes, potatoes and onions have been added to the
                marketplace.
              </p>

              <span className="notification-link">Explore vegetables →</span>
            </div>
          </Link>
        </section>

        <footer className="buyer-footer">
          © 2026 KrushiPhal · Fresh from farmers to your home
        </footer>
      </main>
    </div>
  );
}

export default BuyerNotifications;