import { Link } from "react-router-dom";
import "./BuyerMarketplace.css";

function BuyerMarketplace() {
  const products = [
    {
      id: 1,
      name: "Tomato",
      icon: "🍅",
      variety: "Fresh Red Tomato",
      price: "₹40",
      unit: "per kg",
      farmer: "Amit Verma",
      location: "Bilaspur, Chhattisgarh",
      quantity: "120 kg available",
      image:
        "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "Potato",
      icon: "🥔",
      variety: "Fresh Farm Potato",
      price: "₹30",
      unit: "per kg",
      farmer: "Mohan Sahu",
      location: "Rajnandgaon, Chhattisgarh",
      quantity: "200 kg available",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Onion",
      icon: "🧅",
      variety: "Fresh Red Onion",
      price: "₹35",
      unit: "per kg",
      farmer: "Rajesh Yadav",
      location: "Korba, Chhattisgarh",
      quantity: "150 kg available",
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Maize",
      icon: "🌽",
      variety: "Fresh Farm Maize",
      price: "₹35",
      unit: "per kg",
      farmer: "Suresh Patel",
      location: "Durg, Chhattisgarh",
      quantity: "180 kg available",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="buyer-marketplace-layout">

      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">
        <div>
          <Link
            to="/buyer-dashboard"
            className="dashboard-brand"
          >
            <div className="dashboard-brand-logo">
              🌾
            </div>

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
              className="dashboard-nav-link active"
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
          to="/"
          className="dashboard-logout"
        >
          <span>↪</span>
          Logout
        </Link>
      </aside>

      {/* MAIN CONTENT */}
      <main className="buyer-marketplace-main">

        {/* HEADER */}
        <header className="buyer-marketplace-header">
          <div>
            <p className="buyer-marketplace-label">
              KRUSHPHAL SHOP
            </p>

            <h1>Fresh Vegetables</h1>

            <p className="buyer-marketplace-subtitle">
              Buy fresh vegetables directly from local farmers.
            </p>
          </div>

          <Link
            to="/buyer-cart"
            className="buyer-cart-button"
          >
            <span>🛒</span>
            View Cart
          </Link>
        </header>

        {/* BANNER */}
        <section className="buyer-marketplace-banner">

          <div className="banner-content">
            <span className="banner-small">
              DIRECT FROM LOCAL FARMERS
            </span>

            <h2>
              Fresh vegetables,
              <span> straight from the farm.</span>
            </h2>

            <p>
              Buy fresh and locally grown vegetables directly from
              trusted farmers across Chhattisgarh.
            </p>

            <div className="banner-tags">
              <span>🌱 Fresh Produce</span>
              <span>🚜 Local Farmers</span>
              <span>📦 Easy Delivery</span>
            </div>
          </div>

          <div className="banner-visual">
            <div className="banner-circle">
              <span>🍅</span>
              <span>🥔</span>
              <span>🧅</span>
              <span>🌽</span>
            </div>
          </div>

        </section>

        {/* SEARCH + FILTER */}
        <section className="buyer-marketplace-tools">

          <div className="buyer-search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search vegetables..."
            />
          </div>

          <select className="buyer-filter-select">
            <option>All Vegetables</option>
            <option>Tomato</option>
            <option>Potato</option>
            <option>Onion</option>
            <option>Maize</option>
          </select>

        </section>

        {/* PRODUCTS HEADING */}
        <section className="buyer-products-heading">

          <div>
            <p>AVAILABLE TODAY</p>
            <h2>Fresh Vegetables</h2>
          </div>

          <span>
            {products.length} products available
          </span>

        </section>

        {/* PRODUCT GRID */}
        <section className="buyer-product-grid">

          {products.map((product) => (
            <article
              className="buyer-product-card"
              key={product.id}
            >

              {/* PRODUCT IMAGE */}
              <div className="buyer-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="buyer-fresh-badge">
                  FRESH
                </span>

                <div className="buyer-product-icon">
                  {product.icon}
                </div>

              </div>

              {/* PRODUCT CONTENT */}
              <div className="buyer-product-content">

                <div className="buyer-product-title-row">

                  <div>
                    <h3>{product.name}</h3>

                    <p>{product.variety}</p>
                  </div>

                  <div className="buyer-product-price">
                    <strong>{product.price}</strong>
                    <span>{product.unit}</span>
                  </div>

                </div>

                {/* PRODUCT INFO */}
                <div className="buyer-product-info">

                  <div>
                    <span>Farmer</span>
                    <strong>{product.farmer}</strong>
                  </div>

                  <div>
                    <span>Location</span>
                    <strong>{product.location}</strong>
                  </div>

                </div>

                {/* PRODUCT BOTTOM */}
                <div className="buyer-product-bottom">

                  <span className="buyer-quantity">
                    {product.quantity}
                  </span>

                  <div className="buyer-product-actions">

                    <Link
                      to="/buyer-product-details"
                      className="buyer-view-btn"
                    >
                      View Details
                    </Link>

                    <Link
                      to="/buyer-cart"
                      className="buyer-add-btn"
                    >
                      Add to Cart
                    </Link>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </section>

        {/* SHOPPING TIP */}
        <section className="buyer-shopping-tip">

          <div className="tip-icon">
            🌱
          </div>

          <div>
            <strong>
              Smart Vegetable Buying
            </strong>

            <p>
              Buying directly from local farmers helps you get fresh
              vegetables while supporting farming communities.
            </p>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="buyer-marketplace-footer">
          <span>🌿</span>
          Fresh vegetables. Healthy living. Better farming.
        </footer>

      </main>
    </div>
  );
}

export default BuyerMarketplace;