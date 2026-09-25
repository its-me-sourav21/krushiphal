import "./Marketplace.css";

function Marketplace() {
  const products = [
    {
      id: 1,
      crop: "Wheat",
      variety: "Sharbati Wheat",
      price: "₹2,450",
      unit: "per quintal",
      quantity: "120 Quintal",
      seller: "Ramesh Kumar",
      location: "Raipur, Chhattisgarh",
      icon: "🌾",
    },
    {
      id: 2,
      crop: "Rice",
      variety: "Basmati Rice",
      price: "₹4,200",
      unit: "per quintal",
      quantity: "80 Quintal",
      seller: "Suresh Patel",
      location: "Durg, Chhattisgarh",
      icon: "🌾",
    },
    {
      id: 3,
      crop: "Tomato",
      variety: "Fresh Tomato",
      price: "₹1,800",
      unit: "per quintal",
      quantity: "50 Quintal",
      seller: "Amit Verma",
      location: "Bilaspur, Chhattisgarh",
      icon: "🍅",
    },
    {
      id: 4,
      crop: "Potato",
      variety: "Fresh Potato",
      price: "₹1,650",
      unit: "per quintal",
      quantity: "100 Quintal",
      seller: "Mohan Sahu",
      location: "Rajnandgaon, Chhattisgarh",
      icon: "🥔",
    },
    {
      id: 5,
      crop: "Soybean",
      variety: "Yellow Soybean",
      price: "₹4,100",
      unit: "per quintal",
      quantity: "65 Quintal",
      seller: "Vijay Singh",
      location: "Bemetara, Chhattisgarh",
      icon: "🌱",
    },
    {
      id: 6,
      crop: "Onion",
      variety: "Red Onion",
      price: "₹2,200",
      unit: "per quintal",
      quantity: "75 Quintal",
      seller: "Rajesh Yadav",
      location: "Korba, Chhattisgarh",
      icon: "🧅",
    },
  ];

  return (
    <div className="marketplace-page">
      <div className="marketplace-header">
        <div>
          <p className="marketplace-label">KRUSHIPHAL MARKET</p>
          <h1>Farmer Marketplace</h1>
          <p className="marketplace-subtitle">
            Buy and sell agricultural products directly with farmers.
          </p>
        </div>

        <button className="sell-btn">+ Sell Your Crop</button>
      </div>

      <div className="marketplace-toolbar">
        <div className="search-box">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search crops, vegetables..."
          />
        </div>

        <select className="filter-select">
          <option>All Categories</option>
          <option>Grains</option>
          <option>Vegetables</option>
          <option>Pulses</option>
          <option>Oilseeds</option>
        </select>

        <select className="filter-select">
          <option>All Locations</option>
          <option>Raipur</option>
          <option>Durg</option>
          <option>Bilaspur</option>
          <option>Korba</option>
        </select>
      </div>

      <div className="marketplace-info">
        <div>
          <strong>Today's Market</strong>
          <span> Fresh listings from farmers</span>
        </div>

        <span className="listing-count">
          {products.length} Products Available
        </span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <span>{product.icon}</span>

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
                  <strong>{product.quantity}</strong>
                </div>

                <div>
                  <span>Seller</span>
                  <strong>{product.seller}</strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>{product.location}</strong>
                </div>
              </div>

              <button className="details-btn">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;