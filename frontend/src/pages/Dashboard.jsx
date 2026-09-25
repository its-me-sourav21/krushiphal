import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const crops = [
    {
      name: "Wheat",
      area: "2.0 Acres",
      status: "Healthy",
      progress: 60,
      emoji: "🌾",
    },
    {
      name: "Maize",
      area: "1.5 Acres",
      status: "Healthy",
      progress: 45,
      emoji: "🌽",
    },
    {
      name: "Rice",
      area: "1.2 Acres",
      status: "Moderate",
      progress: 35,
      emoji: "🌱",
    },
    {
      name: "Cotton",
      area: "0.5 Acres",
      status: "Good",
      progress: 30,
      emoji: "☁️",
    },
  ];

  const marketPrices = [
    { crop: "Wheat", emoji: "🌾", price: "₹2,450", change: "↑ 3.2%" },
    { crop: "Maize", emoji: "🌽", price: "₹2,180", change: "↑ 1.8%" },
    { crop: "Rice", emoji: "🌱", price: "₹3,120", change: "↓ 0.7%" },
    { crop: "Cotton", emoji: "☁️", price: "₹5,600", change: "↑ 2.4%" },
  ];

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-logo">🌿</div>
          <div>
            <h2>Krushiphal</h2>
            <p>Smart Farming, Better Future</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link to="/dashboard" className="nav-link active">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link to="/farm-setup" className="nav-link">
            <span>🚜</span>
            My Farm
          </Link>

          <div className="nav-link">
            <span>🌱</span>
            My Crops
          </div>

          <Link to="/marketplace" className="nav-link">
            <span>🛒</span>
            Marketplace
          </Link>

          <div className="nav-link">
            <span>☀️</span>
            Weather
          </div>

          <div className="nav-link">
            <span>▥</span>
            Reports
          </div>

          <div className="nav-link">
            <span>💡</span>
            Advisory
          </div>

          <Link to="/my-profile" className="nav-link">
            <span>♙</span>
            My Profile
          </Link>
        </nav>

        <div className="green-message">
          <h3>Together<br />for a Greener<br />Tomorrow</h3>
          <p>
            Better farming<br />
            for a sustainable<br />
            future.
          </p>
          <div className="farmer-art">👨‍🌾</div>
        </div>

        <div className="logout">
          <span>↪</span>
          Logout
        </div>

      </aside>

      {/* MAIN AREA */}
      <main className="main-content">

        {/* TOPBAR */}
        <header className="topbar">

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search anything..."
            />
          </div>

          <div className="top-right">
            <button className="notification">
              🔔
              <i></i>
            </button>

            <Link to="/my-profile" className="user-info">
              <div className="user-avatar">R</div>

              <div>
                <strong>Ramesh Kumar</strong>
                <small>Farmer</small>
              </div>

              <span>⌄</span>
            </Link>
          </div>

        </header>

        {/* WELCOME + WEATHER */}
        <section className="hero-section">

          <div className="welcome-banner">

            <div className="welcome-content">
              <h1>Good Morning, Ramesh! 👋</h1>

              <p>
                Your farm, your future — let's grow together.
              </p>

              <div className="farm-info">

                <div className="info-pill">
                  <span>📍</span>
                  Raipur, Chhattisgarh
                </div>

                <div className="info-pill">
                  <span>🚜</span>
                  <div>
                    <small>Farm Area</small>
                    <strong>5.2 Acres</strong>
                  </div>
                </div>

                <div className="info-pill">
                  <span>🌿</span>
                  <div>
                    <small>Active Crops</small>
                    <strong>4</strong>
                  </div>
                </div>

              </div>
            </div>

            <div className="field-image">
              🌅
              <span>👨‍🌾</span>
            </div>

          </div>

          {/* WEATHER */}
          <div className="weather-card">

            <div className="weather-main">
              <div className="weather-symbol">🌤️</div>

              <div>
                <h2>28°C</h2>
                <strong>Partly Cloudy</strong>
                <p>Raipur, Chhattisgarh</p>
              </div>
            </div>

            <div className="weather-stats">

              <div>
                <span>💧</span>
                <small>Humidity</small>
                <strong>68%</strong>
              </div>

              <div>
                <span>≋</span>
                <small>Wind</small>
                <strong>12 km/h</strong>
              </div>

              <div>
                <span>☂</span>
                <small>Rain Chance</small>
                <strong>20%</strong>
              </div>

            </div>

          </div>

        </section>

        {/* QUICK ACTIONS */}
        <section className="quick-actions">

          <Link to="/farm-setup" className="quick-card green">
            <div className="quick-icon">🌿</div>
            <div>
              <h3>Add Crop</h3>
              <p>Start tracking your crops</p>
            </div>
            <span>→</span>
          </Link>

          <Link to="/farm-setup" className="quick-card yellow">
            <div className="quick-icon">🚜</div>
            <div>
              <h3>Manage Farm</h3>
              <p>Update farm details</p>
            </div>
            <span>→</span>
          </Link>

          <Link to="/marketplace" className="quick-card blue">
            <div className="quick-icon">🛒</div>
            <div>
              <h3>Marketplace</h3>
              <p>Buy & sell products</p>
            </div>
            <span>→</span>
          </Link>

          <div className="quick-card purple">
            <div className="quick-icon">💡</div>
            <div>
              <h3>Get Advisory</h3>
              <p>Expert farming tips</p>
            </div>
            <span>→</span>
          </div>

        </section>

        {/* DASHBOARD GRID */}
        <section className="dashboard-grid">

          {/* MY CROPS */}
          <div className="panel crops-panel">

            <div className="panel-title">
              <div>
                <h2>🌿 My Crops</h2>
                <p>Total 4 crops • 5.2 acres</p>
              </div>

              <button>View All →</button>
            </div>

            <div className="crop-grid">

              {crops.map((crop) => (
                <div className="crop-card" key={crop.name}>

                  <div className="crop-picture">
                    {crop.emoji}
                    <span className={crop.status.toLowerCase()}>
                      ✓ {crop.status}
                    </span>
                  </div>

                  <div className="crop-name">
                    <strong>{crop.name}</strong>
                    <span>⋮</span>
                  </div>

                  <p>{crop.area}</p>
                  <small>Growing</small>

                  <div className="progress-row">
                    <div className="progress">
                      <div
                        style={{ width: `${crop.progress}%` }}
                      ></div>
                    </div>

                    <span>{crop.progress}%</span>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* FARM OVERVIEW */}
          <div className="panel farm-overview">

            <div className="panel-title">
              <div>
                <h2>🌿 Farm Overview</h2>
                <p>Your farm distribution</p>
              </div>

              <button>View Details</button>
            </div>

            <div className="farm-chart">

              <div className="donut">
                <div>
                  <strong>5.2</strong>
                  <span>Acres</span>
                </div>
              </div>

              <div className="legend">

                <div>
                  <i className="dot wheat"></i>
                  <span>Wheat</span>
                  <strong>2.0 ac</strong>
                </div>

                <div>
                  <i className="dot maize"></i>
                  <span>Maize</span>
                  <strong>1.5 ac</strong>
                </div>

                <div>
                  <i className="dot rice"></i>
                  <span>Rice</span>
                  <strong>1.2 ac</strong>
                </div>

                <div>
                  <i className="dot cotton"></i>
                  <span>Cotton</span>
                  <strong>0.5 ac</strong>
                </div>

              </div>

            </div>

            <button className="map-button">
              🗺 View Farm Map
            </button>

          </div>

          {/* MARKET PRICES */}
          <div className="panel market-panel">

            <div className="panel-title">
              <div>
                <h2>📊 Market Prices</h2>
              </div>

              <Link to="/marketplace">
                View All →
              </Link>
            </div>

            <div className="market-header">
              <span>Crop</span>
              <span>Price / Quintal</span>
              <span>Change</span>
            </div>

            {marketPrices.map((item) => (
              <div className="market-row" key={item.crop}>

                <div className="market-crop">
                  <span>{item.emoji}</span>
                  <strong>{item.crop}</strong>
                </div>

                <strong>{item.price}</strong>

                <span
                  className={
                    item.change.includes("↓")
                      ? "price-down"
                      : "price-up"
                  }
                >
                  {item.change}
                </span>

              </div>
            ))}

          </div>

          {/* RECENT ACTIVITIES */}
          <div className="panel activity-panel">

            <div className="panel-title">
              <div>
                <h2>◷ Recent Activities</h2>
              </div>

              <button>View All →</button>
            </div>

            <div className="activity">

              <span className="activity-icon green-icon">
                🌿
              </span>

              <div>
                <strong>
                  You updated your crop details (Wheat)
                </strong>
                <small>Today, 09:45 AM</small>
              </div>

            </div>

            <div className="activity">

              <span className="activity-icon blue-icon">
                ☁️
              </span>

              <div>
                <strong>
                  Weather alert: Light rain expected tomorrow
                </strong>
                <small>Today, 07:20 AM</small>
              </div>

            </div>

            <div className="activity">

              <span className="activity-icon yellow-icon">
                🌽
              </span>

              <div>
                <strong>
                  Market price of Maize increased by 1.8%
                </strong>
                <small>Yesterday, 06:30 PM</small>
              </div>

            </div>

            <div className="activity">

              <span className="activity-icon green-icon">
                🌱
              </span>

              <div>
                <strong>
                  You added a new farm field
                </strong>
                <small>Yesterday, 04:15 PM</small>
              </div>

            </div>

          </div>

          {/* CROP HEALTH */}
          <div className="panel health-panel">

            <div className="panel-title">
              <div>
                <h2>🌱 Crop Health</h2>
              </div>

              <button>View Report →</button>
            </div>

            <div className="health-content">

              <div className="health-circle">
                <div>
                  <span>🌿</span>
                  <strong>Good</strong>
                  <small>Overall Health</small>
                </div>
              </div>

              <div className="health-list">

                <div>
                  <i className="health-good"></i>
                  <span>Good</span>
                  <strong>3 crops</strong>
                </div>

                <div>
                  <i className="health-medium"></i>
                  <span>Moderate</span>
                  <strong>1 crop</strong>
                </div>

                <div>
                  <i className="health-bad"></i>
                  <span>Needs Attention</span>
                  <strong>0 crops</strong>
                </div>

              </div>

            </div>

          </div>

          {/* SOIL ADVISORY */}
          <div className="soil-card">

            <div>
              <h2>Healthy Soil<br />Healthy Harvest</h2>

              <p>
                Better soil management<br />
                for higher productivity.
              </p>

              <button>
                Learn More →
              </button>
            </div>

            <div className="soil-image">
              🌱
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Dashboard;