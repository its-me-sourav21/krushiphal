import { Link } from "react-router-dom";
import "./OrderTracking.css";

function OrderTracking() {
  const trackingSteps = [
    {
      id: 1,
      icon: "✓",
      title: "Order Confirmed",
      description: "Your order has been confirmed.",
      date: "Today, 10:30 AM",
      completed: true,
    },
    {
      id: 2,
      icon: "📦",
      title: "Processing",
      description: "Farmer is preparing your vegetables.",
      date: "Today, 11:15 AM",
      completed: true,
    },
    {
      id: 3,
      icon: "🚚",
      title: "Shipped",
      description: "Your order has been shipped.",
      date: "Expected Today",
      completed: true,
    },
    {
      id: 4,
      icon: "🛵",
      title: "Out for Delivery",
      description: "Your order is on the way.",
      date: "Expected Soon",
      completed: false,
    },
    {
      id: 5,
      icon: "🏠",
      title: "Delivered",
      description: "Your vegetables will be delivered.",
      date: "Expected Today",
      completed: false,
    },
  ];

  return (
    <div className="tracking-layout">
      {/* Sidebar */}
      <aside className="tracking-sidebar">
        <div className="tracking-brand">
          <div className="tracking-brand-logo">🌿</div>

          <div>
            <h2>Krushiphal</h2>
            <p>Smart Farming, Better Future</p>
          </div>
        </div>

        <nav className="tracking-sidebar-nav">
          <Link to="/dashboard" className="tracking-nav-link">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link to="/farm-setup" className="tracking-nav-link">
            <span>🚜</span>
            My Farm
          </Link>

          <Link to="/my-crops" className="tracking-nav-link">
            <span>🌱</span>
            My Crops
          </Link>

          <Link to="/marketplace" className="tracking-nav-link">
            <span>🛒</span>
            Marketplace
          </Link>

          <Link to="/reports" className="tracking-nav-link">
            <span>▥</span>
            Reports
          </Link>

          <Link to="/advisory" className="tracking-nav-link">
            <span>💡</span>
            Advisory
          </Link>

          <Link to="/my-profile" className="tracking-nav-link">
            <span>♙</span>
            My Profile
          </Link>
        </nav>

        <div className="tracking-sidebar-bottom">
          <div className="tracking-green-message">
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

            <div className="tracking-farmer-art">
              👨‍🌾
            </div>
          </div>

          <Link to="/" className="tracking-logout">
            <span>↪</span>
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="tracking-main">
        <header className="tracking-header">
          <div>
            <p className="tracking-label">
              KRUSHPHAL MARKET
            </p>

            <h1>Order Tracking</h1>

            <p className="tracking-subtitle">
              Track your vegetable order from farm to doorstep.
            </p>
          </div>

          <Link
            to="/marketplace"
            className="tracking-back-btn"
          >
            ← Marketplace
          </Link>
        </header>

        <div className="tracking-content">
          {/* Order Overview */}
          <section className="tracking-overview">
            <div className="tracking-overview-top">
              <div>
                <p className="overview-label">ORDER ID</p>
                <h2>#KRU-2026-00125</h2>
              </div>

              <span className="tracking-status">
                In Transit
              </span>
            </div>

            <div className="tracking-overview-details">
              <div>
                <span>Order Date</span>
                <strong>Today, 10:30 AM</strong>
              </div>

              <div>
                <span>Total Amount</span>
                <strong>₹185</strong>
              </div>

              <div>
                <span>Delivery</span>
                <strong>Free</strong>
              </div>
            </div>
          </section>

          {/* Tracking */}
          <section className="tracking-card">
            <div className="tracking-card-header">
              <div>
                <h2>Delivery Status</h2>
                <p>
                  Follow your order's journey.
                </p>
              </div>

              <span className="delivery-icon-header">
                🚚
              </span>
            </div>

            <div className="tracking-timeline">
              {trackingSteps.map((step, index) => (
                <div
                  className={`tracking-step ${
                    step.completed ? "completed" : ""
                  }`}
                  key={step.id}
                >
                  <div className="timeline-left">
                    <div className="timeline-icon">
                      {step.icon}
                    </div>

                    {index !== trackingSteps.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>

                  <div className="timeline-content">
                    <div className="timeline-title-row">
                      <h3>{step.title}</h3>
                      <span>{step.date}</span>
                    </div>

                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Grid */}
          <div className="tracking-bottom-grid">
            {/* Delivery Address */}
            <section className="delivery-info-card">
              <div className="small-card-header">
                <span>📍</span>

                <div>
                  <h2>Delivery Address</h2>
                  <p>Where your order will arrive</p>
                </div>
              </div>

              <div className="address-box">
                <strong>Ramesh Kumar</strong>

                <p>
                  Raipur, Chhattisgarh
                  <br />
                  India
                </p>

                <span>📞 +91 98765 43210</span>
              </div>
            </section>

            {/* Order Items */}
            <section className="delivery-info-card">
              <div className="small-card-header">
                <span>🛒</span>

                <div>
                  <h2>Order Items</h2>
                  <p>2 vegetables selected</p>
                </div>
              </div>

              <div className="tracking-product">
                <div className="tracking-product-image">
                  <img
                    src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80"
                    alt="Fresh Tomatoes"
                  />
                </div>

                <div>
                  <strong>Fresh Tomatoes</strong>
                  <span>2 kg × ₹40</span>
                </div>

                <b>₹80</b>
              </div>

              <div className="tracking-product">
                <div className="tracking-product-image">
                  <img
                    src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=300&q=80"
                    alt="Fresh Potatoes"
                  />
                </div>

                <div>
                  <strong>Fresh Potatoes</strong>
                  <span>3 kg × ₹35</span>
                </div>

                <b>₹105</b>
              </div>
            </section>
          </div>

          <div className="tracking-actions">
            <Link
              to="/dashboard"
              className="tracking-dashboard-btn"
            >
              Go to Dashboard
            </Link>

            <Link
              to="/marketplace"
              className="tracking-shopping-btn"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OrderTracking;