import { Link, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const navigate = useNavigate();

  const product = {
    crop: "Tomato",
    variety: "Fresh Tomato",
    price: "₹1,800",
    unit: "per quintal",
    quantity: "50 Quintal",
    seller: "Amit Verma",
    location: "Bilaspur, Chhattisgarh",
    quality: "Fresh & Good Quality",
    harvestDate: "15 Sep 2026",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=1200&q=85",
  };

  const handleBuyNow = () => {
    navigate("/payment");
  };

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="product-details-layout">

      {/* ================= SIDEBAR ================= */}

      <aside className="product-details-sidebar">

        <div>

          <div className="product-details-brand">

            <div className="product-details-brand-logo">
              🌿
            </div>

            <div>
              <h2>Krushiphal</h2>
              <p>Smart Farming, Better Future</p>
            </div>

          </div>


          <nav className="product-details-sidebar-nav">

            <Link
              to="/dashboard"
              className="product-details-nav-link"
            >
              <span>⌂</span>
              Dashboard
            </Link>

            <Link
              to="/farm-setup"
              className="product-details-nav-link"
            >
              <span>🚜</span>
              My Farm
            </Link>

            <Link
              to="/my-crops"
              className="product-details-nav-link"
            >
              <span>🌱</span>
              My Crops
            </Link>

            <Link
              to="/marketplace"
              className="product-details-nav-link active"
            >
              <span>🛒</span>
              Marketplace
            </Link>

            <Link
              to="/reports"
              className="product-details-nav-link"
            >
              <span>▥</span>
              Reports
            </Link>

            <Link
              to="/advisory"
              className="product-details-nav-link"
            >
              <span>💡</span>
              Advisory
            </Link>

            <Link
              to="/my-profile"
              className="product-details-nav-link"
            >
              <span>♙</span>
              My Profile
            </Link>

          </nav>

        </div>


        <Link
          to="/"
          className="product-details-logout"
        >
          <span>↪</span>
          Logout
        </Link>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="product-details-main">

        {/* HEADER */}

        <header className="product-details-header">

          <div>

            <p className="product-details-label">
              KRUSHPHAL MARKET
            </p>

            <h1>
              Product Details
            </h1>

            <p className="product-details-subtitle">
              View complete information about this vegetable listing.
            </p>

          </div>


          <Link
            to="/marketplace"
            className="product-details-back-btn"
          >
            ← Back to Marketplace
          </Link>

        </header>


        {/* ================= PRODUCT ================= */}

        <section className="product-details-card">

          <div className="product-details-image-section">

            <div className="product-details-image">
              <img
                src={product.image}
                alt={product.crop}
              />

              <span className="product-details-available">
                Available
              </span>
            </div>

          </div>


          <div className="product-details-content">

            <span className="product-details-category">
              🌱 VEGETABLE
            </span>

            <h2>
              {product.crop}
            </h2>

            <p className="product-details-variety">
              {product.variety}
            </p>


            <div className="product-details-price">

              <strong>
                {product.price}
              </strong>

              <span>
                {product.unit}
              </span>

            </div>


            <div className="product-details-rating">
              <span>★★★★★</span>
              <p>Fresh farm produce</p>
            </div>


            <div className="product-details-info-grid">

              <div>
                <span>Available Quantity</span>
                <strong>{product.quantity}</strong>
              </div>

              <div>
                <span>Quality</span>
                <strong>{product.quality}</strong>
              </div>

              <div>
                <span>Harvest Date</span>
                <strong>{product.harvestDate}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{product.location}</strong>
              </div>

            </div>


            <div className="product-details-seller">

              <div className="seller-avatar">
                A
              </div>

              <div>
                <span>Seller</span>
                <strong>{product.seller}</strong>
                <p>{product.location}</p>
              </div>

            </div>


            <div className="product-details-actions">

              <button
                type="button"
                className="add-to-cart-btn"
                onClick={handleAddToCart}
              >
                🛒 Add to Cart
              </button>

              <button
                type="button"
                className="buy-now-btn"
                onClick={handleBuyNow}
              >
                Buy Now →
              </button>

            </div>

          </div>

        </section>


        {/* ================= PRODUCT INFORMATION ================= */}

        <section className="product-details-info-card">

          <div className="product-details-section-header">

            <div>
              <span>
                🌱 PRODUCT INFORMATION
              </span>

              <h2>
                About This Produce
              </h2>
            </div>

          </div>


          <div className="product-details-description">

            <p>
              This is fresh tomato produce directly listed by the farmer.
              The vegetables are available for purchase in the listed quantity
              and can be ordered through Krushiphal Marketplace.
            </p>

          </div>


          <div className="product-details-features">

            <div>
              <span>🌱</span>
              <div>
                <strong>Fresh Produce</strong>
                <p>Farm-fresh vegetables</p>
              </div>
            </div>

            <div>
              <span>📦</span>
              <div>
                <strong>Bulk Quantity</strong>
                <p>Available in quintals</p>
              </div>
            </div>

            <div>
              <span>🚚</span>
              <div>
                <strong>Delivery Available</strong>
                <p>Delivery to selected location</p>
              </div>
            </div>

            <div>
              <span>👨‍🌾</span>
              <div>
                <strong>Direct Farmer</strong>
                <p>Buy directly from seller</p>
              </div>
            </div>

          </div>

        </section>


        {/* ================= SELLER INFORMATION ================= */}

        <section className="product-details-seller-card">

          <div className="product-details-section-header">

            <div>
              <span>
                👨‍🌾 SELLER INFORMATION
              </span>

              <h2>
                Farmer Details
              </h2>
            </div>

          </div>


          <div className="seller-details-wrapper">

            <div className="seller-large-avatar">
              A
            </div>

            <div className="seller-details-text">

              <h3>
                {product.seller}
              </h3>

              <p>
                Farmer • {product.location}
              </p>

              <span>
                ✓ Verified Seller
              </span>

            </div>

            <div className="seller-location-box">

              <span>
                📍 Location
              </span>

              <strong>
                {product.location}
              </strong>

            </div>

          </div>

        </section>


        {/* ================= ACTIONS ================= */}

        <div className="product-details-bottom-actions">

          <Link
            to="/marketplace"
            className="back-marketplace-btn"
          >
            ← Continue Shopping
          </Link>

          <Link
            to="/cart"
            className="view-cart-btn"
          >
            🛒 View Cart
          </Link>

        </div>

      </main>

    </div>
  );
}

export default ProductDetails;