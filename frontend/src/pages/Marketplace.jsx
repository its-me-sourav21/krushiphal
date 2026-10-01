import { Link } from "react-router-dom";
import "./Marketplace.css";

function Marketplace() {
  const products = [
    {
      id: 1,
      crop: "Tomato",
      variety: "Fresh Tomato",
      price: "₹1,800",
      unit: "per quintal",
      quantity: "50 Quintal",
      seller: "Amit Verma",
      location: "Bilaspur, Chhattisgarh",
      image:
        "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      crop: "Potato",
      variety: "Fresh Potato",
      price: "₹1,650",
      unit: "per quintal",
      quantity: "100 Quintal",
      seller: "Mohan Sahu",
      location: "Rajnandgaon, Chhattisgarh",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      crop: "Onion",
      variety: "Red Onion",
      price: "₹2,200",
      unit: "per quintal",
      quantity: "75 Quintal",
      seller: "Rajesh Yadav",
      location: "Korba, Chhattisgarh",
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="marketplace-layout">

      {/* ================= SIDEBAR ================= */}

      <aside className="marketplace-sidebar">
        <div>

          <div className="marketplace-brand">
            <div className="marketplace-brand-logo">🌿</div>

            <div>
              <h2>Krushiphal</h2>
              <p>Smart Farming, Better Future</p>
            </div>
          </div>

          <nav className="marketplace-sidebar-nav">

            <Link
              to="/dashboard"
              className="marketplace-nav-link"
            >
              <span>⌂</span>
              Dashboard
            </Link>

            <Link
              to="/farm-setup"
              className="marketplace-nav-link"
            >
              <span>🚜</span>
              My Farm
            </Link>

            <Link
              to="/my-crops"
              className="marketplace-nav-link"
            >
              <span>🌱</span>
              My Crops
            </Link>

            <Link
              to="/marketplace"
              className="marketplace-nav-link active"
            >
              <span>🛒</span>
              Marketplace
            </Link>

            <Link
              to="/reports"
              className="marketplace-nav-link"
            >
              <span>▥</span>
              Reports
            </Link>

            <Link
              to="/advisory"
              className="marketplace-nav-link"
            >
              <span>💡</span>
              Advisory
            </Link>

            <Link
              to="/my-profile"
              className="marketplace-nav-link"
            >
              <span>♙</span>
              My Profile
            </Link>

          </nav>
        </div>

        <Link to="/" className="marketplace-logout">
          <span>↪</span>
          Logout
        </Link>
      </aside>

      {/* ================= MAIN CONTENT ================= */}

      <main className="marketplace-main">

        {/* HEADER */}

        <header className="marketplace-header">

          <div>
            <p className="marketplace-label">
              KRUSHPHAL MARKET
            </p>

            <h1>Vegetable Marketplace</h1>

            <p className="marketplace-subtitle">
              Buy fresh vegetables directly from farmers.
            </p>
          </div>

          <button className="sell-btn">
            + Sell Your Crop
          </button>

        </header>

        {/* SEARCH & FILTERS */}

        <div className="marketplace-toolbar">

          <div className="search-box">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search vegetables..."
            />
          </div>

          <select className="filter-select">
            <option>All Vegetables</option>
            <option>Tomato</option>
            <option>Potato</option>
            <option>Onion</option>
          </select>

          <select className="filter-select">
            <option>All Locations</option>
            <option>Raipur</option>
            <option>Durg</option>
            <option>Bilaspur</option>
            <option>Korba</option>
          </select>

        </div>

        {/* MARKET INFO */}

        <div className="marketplace-info">

          <div>
            <strong>Today's Vegetable Market</strong>
            <span> Fresh listings from farmers</span>
          </div>

          <span className="listing-count">
            {products.length} Products Available
          </span>

        </div>

        {/* PRODUCT CARDS */}

        <div className="product-grid">

          {products.map((product) => (
            <div
              className="product-card"
              key={product.id}
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.crop}
                />

                <span className="available-badge">
                  Available
                </span>

              </div>

              <div className="product-content">

                <div className="product-title-row">

                  <div>
                    <h2>{product.crop}</h2>
                    <p>{product.variety}</p>
                  </div>

                  <div className="price">

                    <strong>{product.price}</strong>

                    <span>{product.unit}</span>

                  </div>

                </div>

                <div className="product-details">

                  <div>
                    <span>Quantity</span>

                    <strong>
                      {product.quantity}
                    </strong>
                  </div>

                  <div>
                    <span>Seller</span>

                    <strong>
                      {product.seller}
                    </strong>
                  </div>

                  <div>
                    <span>Location</span>

                    <strong>
                      {product.location}
                    </strong>
                  </div>

                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginTop: "16px",
                  }}
                >

                  <Link
                    to="/product-details"
                    className="details-btn"
                    style={{
                      flex: 1,
                      textAlign: "center",
                    }}
                  >
                    View Details →
                  </Link>

                  <Link
                    to="/cart"
                    className="details-btn"
                    style={{
                      flex: 1,
                      textAlign: "center",
                    }}
                  >
                    🛒 Cart
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}

export default Marketplace;