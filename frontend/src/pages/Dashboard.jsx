import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const crops = [
    {
      name: "Tomato",
      area: "2.0 Acres",
      status: "Healthy",
      progress: 72,
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=85",
    },
    {
      name: "Potato",
      area: "1.5 Acres",
      status: "Healthy",
      progress: 65,
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=85",
    },
    {
      name: "Onion",
      area: "1.2 Acres",
      status: "Moderate",
      progress: 52,
      image:
        "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=500&q=85",
    },
    {
      name: "Maize",
      area: "0.5 Acres",
      status: "Good",
      progress: 70,
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=500&q=85",
    },
  ];

  const marketPrices = [
    {
      name: "Tomato",
      price: "₹1,800",
      change: "+3.2%",
      image: crops[0].image,
    },
    {
      name: "Potato",
      price: "₹1,650",
      change: "+1.8%",
      image: crops[1].image,
    },
    {
      name: "Onion",
      price: "₹2,200",
      change: "+2.4%",
      image: crops[2].image,
    },
    {
      name: "Maize",
      price: "₹2,050",
      change: "-1.5%",
      image: crops[3].image,
    },
  ];

  return (
    <div className="dashboard-layout">

      {/* ================= SIDEBAR ================= */}

      <aside className="dashboard-sidebar">
        <div>

          <div className="dashboard-brand">
            <div className="dashboard-brand-logo">🌿</div>

            <div>
              <h2>Krushiphal</h2>
              <p>Smart Farming, Better Future</p>
            </div>
          </div>

          <nav className="dashboard-sidebar-nav">

            <Link
              to="/dashboard"
              className="dashboard-nav-link active"
            >
              <span>⌂</span>
              Dashboard
            </Link>

            <Link
              to="/farm-setup"
              className="dashboard-nav-link"
            >
              <span>🚜</span>
              My Farm
            </Link>

            <Link
              to="/my-crops"
              className="dashboard-nav-link"
            >
              <span>🌱</span>
              My Crops
            </Link>

            <Link
              to="/marketplace"
              className="dashboard-nav-link"
            >
              <span>🛒</span>
              Marketplace
            </Link>

            <Link
              to="/ai-prediction"
              className="dashboard-nav-link"
            >
              <span>🤖</span>
              AI Prediction
            </Link>

            <Link
              to="/reports"
              className="dashboard-nav-link"
            >
              <span>▥</span>
              Reports
            </Link>

            <Link
              to="/advisory"
              className="dashboard-nav-link"
            >
              <span>💡</span>
              Advisory
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

        <Link
          to="/"
          className="dashboard-logout"
        >
          <span>↪</span>
          Logout
        </Link>

      </aside>

      {/* ================= MAIN ================= */}

      <main className="dashboard-main">

        {/* Top Header */}

        <header className="dashboard-topbar">

          <div className="dashboard-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search anything..."
            />

          </div>


          <div className="dashboard-user-area">

            <button className="notification-btn">
              🔔
            </button>


            {/* Profile Clickable */}

            <Link
              to="/my-profile"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >

              <div className="dashboard-user">

                <div className="user-avatar">
                  R
                </div>

                <div>
                  <strong>Ramesh Kumar</strong>
                  <span>Farmer</span>
                </div>

              </div>

            </Link>

          </div>

        </header>


        {/* Welcome + Weather */}

        <section className="dashboard-top-grid">

          <div className="dashboard-welcome-card">

            <div className="welcome-content">

              <p className="welcome-small">
                WELCOME BACK
              </p>

              <h1>
                Good Morning, Ramesh! 👋
              </h1>

              <p className="welcome-text">
                Your farm, your future — let&apos;s grow together.
              </p>

              <div className="welcome-details">

                <div>

                  <span>📍</span>

                  <div>

                    <small>Location</small>

                    <strong>
                      Raipur, Chhattisgarh
                    </strong>

                  </div>

                </div>


                <div>

                  <span>🚜</span>

                  <div>

                    <small>Farm Area</small>

                    <strong>
                      5.2 Acres
                    </strong>

                  </div>

                </div>


                <div>

                  <span>🌱</span>

                  <div>

                    <small>Active Crops</small>

                    <strong>
                      4
                    </strong>

                  </div>

                </div>

              </div>

            </div>


            <div className="welcome-illustration">

              <div className="sun">
                ☀️
              </div>

              <div className="farmer-emoji">
                👨‍🌾
              </div>

              <div className="plant-decoration">
                🌿
              </div>

            </div>

          </div>


          <div className="weather-card">

            <div className="weather-top">

              <div className="weather-icon">
                🌤️
              </div>

              <div>

                <small>
                  Today&apos;s Weather
                </small>

                <h2>
                  28°C
                </h2>

                <p>
                  Partly Cloudy
                </p>

                <span>
                  Raipur, Chhattisgarh
                </span>

              </div>

            </div>


            <div className="weather-divider"></div>


            <div className="weather-stats">

              <div>

                <span>
                  💧
                </span>

                <small>
                  Humidity
                </small>

                <strong>
                  68%
                </strong>

              </div>


              <div>

                <span>
                  💨
                </span>

                <small>
                  Wind
                </small>

                <strong>
                  12 km/h
                </strong>

              </div>


              <div>

                <span>
                  ☂️
                </span>

                <small>
                  Rain Chance
                </small>

                <strong>
                  20%
                </strong>

              </div>

            </div>

          </div>

        </section>


        {/* Quick Actions */}

        <section className="quick-actions">

          <Link
            to="/farm-setup"
            className="quick-action-card green"
          >

            <div className="quick-icon">
              🌿
            </div>

            <div>

              <h3>
                Add Crop
              </h3>

              <p>
                Start tracking your crops
              </p>

            </div>

            <span className="quick-arrow">
              →
            </span>

          </Link>


          <Link
            to="/farm-setup"
            className="quick-action-card yellow"
          >

            <div className="quick-icon">
              🚜
            </div>

            <div>

              <h3>
                Manage Farm
              </h3>

              <p>
                Update farm details
              </p>

            </div>

            <span className="quick-arrow">
              →
            </span>

          </Link>


          <Link
            to="/marketplace"
            className="quick-action-card blue"
          >

            <div className="quick-icon">
              🛒
            </div>

            <div>

              <h3>
                Marketplace
              </h3>

              <p>
                Buy & sell vegetables
              </p>

            </div>

            <span className="quick-arrow">
              →
            </span>

          </Link>


          <div className="quick-action-card purple">

            <div className="quick-icon">
              💡
            </div>

            <div>

              <h3>
                Get Advisory
              </h3>

              <p>
                Expert farming tips
              </p>

            </div>

            <span className="quick-arrow">
              →
            </span>

          </div>

        </section>


        {/* Crops + AI Prediction */}

        <section className="dashboard-content-grid">

          <div className="dashboard-card crops-card">

            <div className="card-header">

              <div>

                <span className="section-label">
                  🌱 FARM MANAGEMENT
                </span>

                <h2>
                  My Crops
                </h2>

                <p>
                  Total 4 crops • 5.2 acres
                </p>

              </div>


              <button type="button">
                View All →
              </button>

            </div>


            <div className="crop-grid">

              {crops.map((crop) => (

                <div
                  className="crop-card"
                  key={crop.name}
                >

                  <div className="crop-image">

                    <img
                      src={crop.image}
                      alt={crop.name}
                    />

                    <span
                      className={`crop-status ${
                        crop.status === "Moderate"
                          ? "moderate"
                          : "healthy"
                      }`}
                    >
                      ✓ {crop.status}
                    </span>

                  </div>


                  <div className="crop-info">

                    <h3>
                      {crop.name}
                    </h3>

                    <p>
                      {crop.area}
                    </p>


                    <div className="crop-progress-row">

                      <div className="crop-progress">

                        <span
                          style={{
                            width: `${crop.progress}%`,
                          }}
                        ></span>

                      </div>


                      <strong>
                        {crop.progress}%
                      </strong>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* AI Prediction */}

          <div className="dashboard-card farm-overview-card">

            <div className="card-header">

              <div>

                <span className="section-label">
                  🤖 AI PREDICTION
                </span>

                <h2>
                  Vegetable Price Prediction
                </h2>

                <p>
                  Expected market prices for 7 days
                </p>

              </div>

            </div>


            <div className="farm-overview-body">

              <div className="farm-donut">

                <div className="donut-inner">

                  <strong>
                    7
                  </strong>

                  <span>
                    Days
                  </span>

                </div>

              </div>


              <div className="farm-legend">

                <div>

                  <span className="legend-dot tomato"></span>

                  <span>
                    District
                  </span>

                  <strong>
                    Select
                  </strong>

                </div>


                <div>

                  <span className="legend-dot potato"></span>

                  <span>
                    Mandi
                  </span>

                  <strong>
                    Select
                  </strong>

                </div>


                <div>

                  <span className="legend-dot onion"></span>

                  <span>
                    Vegetable
                  </span>

                  <strong>
                    Select
                  </strong>

                </div>


                <div>

                  <span className="legend-dot maize"></span>

                  <span>
                    Forecast
                  </span>

                  <strong>
                    7 Days
                  </strong>

                </div>

              </div>

            </div>


            <Link
              to="/ai-prediction"
              className="farm-map-btn"
              style={{
                textDecoration: "none",
              }}
            >
              🤖 Start AI Prediction →
            </Link>

          </div>

        </section>


        {/* Bottom Content */}

        <section className="dashboard-bottom-grid">

          {/* Market */}

          <div className="dashboard-card market-card">

            <div className="card-header">

              <div>

                <span className="section-label">
                  🌱 MARKET
                </span>

                <h2>
                  Vegetable Market Prices
                </h2>

                <p>
                  Latest market prices
                </p>

              </div>


              <Link to="/marketplace">
                View Marketplace →
              </Link>

            </div>


            <div className="market-grid">

              {marketPrices.map((item) => (

                <div
                  className="market-item"
                  key={item.name}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <h3>
                    {item.name}
                  </h3>

                  <strong>
                    {item.price}
                  </strong>

                  <span
                    className={
                      item.change.startsWith("-")
                        ? "price-down"
                        : "price-up"
                    }
                  >
                    ↑ {item.change}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* Activities */}

          <div className="dashboard-card activity-card">

            <div className="card-header">

              <div>

                <span className="section-label">
                  🌱 ACTIVITY
                </span>

                <h2>
                  Recent Activities
                </h2>

                <p>
                  Latest updates from your farm
                </p>

              </div>

            </div>


            <div className="activity-list">

              <div className="activity-item">

                <span>
                  🍅
                </span>

                <div>

                  <p>
                    You updated your Tomato crop details
                  </p>

                  <small>
                    Today, 09:45 AM
                  </small>

                </div>

              </div>


              <div className="activity-item">

                <span>
                  🌧️
                </span>

                <div>

                  <p>
                    Weather alert: Light rain expected tomorrow
                  </p>

                  <small>
                    Today, 07:20 AM
                  </small>

                </div>

              </div>


              <div className="activity-item">

                <span>
                  🧅
                </span>

                <div>

                  <p>
                    Onion market price increased by 2.4%
                  </p>

                  <small>
                    Yesterday, 06:30 PM
                  </small>

                </div>

              </div>


              <div className="activity-item">

                <span>
                  🌽
                </span>

                <div>

                  <p>
                    You added a new Maize field
                  </p>

                  <small>
                    Yesterday, 04:15 PM
                  </small>

                </div>

              </div>

            </div>

          </div>


          {/* Health */}

          <div className="dashboard-card health-card">

            <div className="card-header">

              <div>

                <span className="section-label">
                  🌱 CROP HEALTH
                </span>

                <h2>
                  Vegetable Health
                </h2>

                <p>
                  Current health status
                </p>

              </div>


              <button type="button">
                View Report →
              </button>

            </div>


            <div className="health-content">

              <div className="health-donut">

                <div>

                  <strong>
                    Good
                  </strong>

                  <span>
                    Overall Health
                  </span>

                </div>

              </div>


              <div className="health-list">

                <div>

                  <span className="health-dot good"></span>

                  <span>
                    Good
                  </span>

                  <strong>
                    3 crops
                  </strong>

                </div>


                <div>

                  <span className="health-dot moderate"></span>

                  <span>
                    Moderate
                  </span>

                  <strong>
                    1 crop
                  </strong>

                </div>


                <div>

                  <span className="health-dot attention"></span>

                  <span>
                    Needs Attention
                  </span>

                  <strong>
                    0 crops
                  </strong>

                </div>

              </div>

            </div>

          </div>


          {/* Smart Tip */}

          <div className="smart-tip">

            <div className="tip-icon">
              🌱
            </div>

            <div>

              <span>
                SMART FARMING TIP
              </span>

              <h2>
                Healthy Soil = Healthy Vegetables
              </h2>

              <p>
                Better soil management for healthier vegetables.
              </p>

            </div>

            <button type="button">
              Learn More →
            </button>

            <div className="tip-decoration">
              🌿
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;