import { Link } from "react-router-dom";
import { useState } from "react";
import "./Notifications.css";

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: "🌧️",
      title: "Weather Alert",
      message: "Rain is expected in your area today.",
      time: "10 minutes ago",
      type: "weather",
      unread: true,
    },
    {
      id: 2,
      icon: "🌱",
      title: "Crop Update",
      message: "Your tomato crop is ready for the next growth stage.",
      time: "1 hour ago",
      type: "crop",
      unread: true,
    },
    {
      id: 3,
      icon: "📈",
      title: "Market Price Update",
      message: "Tomato prices have increased in your nearby market.",
      time: "3 hours ago",
      type: "market",
      unread: true,
    },
    {
      id: 4,
      icon: "💡",
      title: "New Advisory",
      message: "A new farming advisory is available for your crops.",
      time: "Yesterday",
      type: "advisory",
      unread: false,
    },
    {
      id: 5,
      icon: "🛒",
      title: "Marketplace Update",
      message: "Your listed produce received a new inquiry.",
      time: "Yesterday",
      type: "marketplace",
      unread: false,
    },
  ]);

  const [settings, setSettings] = useState({
    weatherAlerts: true,
    cropUpdates: true,
    marketUpdates: true,
    advisoryUpdates: true,
    marketplaceUpdates: true,
  });

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const handleMarkAsRead = (id) => {
    setNotifications((previous) =>
      previous.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((previous) =>
      previous.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  const handleSettingChange = (name) => {
    setSettings((previous) => ({
      ...previous,
      [name]: !previous[name],
    }));
  };

  return (
    <div className="notifications-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="dashboard-sidebar">

        <div>

          <Link
            to="/dashboard"
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
              to="/dashboard"
              className="dashboard-nav-link"
            >
              <span>⌂</span>
              Dashboard
            </Link>

            <Link
              to="/my-farm"
              className="dashboard-nav-link"
            >
              <span>🌱</span>
              My Farm
            </Link>

            <Link
              to="/my-crops"
              className="dashboard-nav-link"
            >
              <span>🌿</span>
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
              to="/reports"
              className="dashboard-nav-link"
            >
              <span>📊</span>
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
              className="dashboard-nav-link active"
            >
              <span>👤</span>
              My Profile
            </Link>

          </nav>

        </div>


        <Link
          to="/login"
          className="dashboard-logout"
        >
          <span>↪</span>
          Logout
        </Link>

      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <main className="notifications-main">

        {/* HEADER */}

        <header className="notifications-header">

          <div>
            <p className="notifications-label">
              ACCOUNT SETTINGS
            </p>

            <h1>
              Notifications
            </h1>

            <p className="notifications-subtitle">
              Manage your alerts and stay updated with your farm.
            </p>
          </div>

          <Link
            to="/my-profile"
            className="notifications-back-btn"
          >
            ← Back to Profile
          </Link>

        </header>


        {/* NOTIFICATION SUMMARY */}

        <section className="notifications-summary-card">

          <div className="notifications-summary-icon">
            🔔
          </div>

          <div className="notifications-summary-content">
            <h2>
              Your Notifications
            </h2>

            <p>
              {unreadCount > 0
                ? `You have ${unreadCount} unread notification${
                    unreadCount > 1 ? "s" : ""
                  }.`
                : "You're all caught up."}
            </p>
          </div>

          <div className="notifications-summary-actions">

            {unreadCount > 0 && (
              <button
                type="button"
                onClick={handleMarkAllAsRead}
                className="notifications-action-btn"
              >
                Mark all as read
              </button>
            )}

            {notifications.length > 0 && (
              <button
                type="button"
                onClick={handleClearAll}
                className="notifications-clear-btn"
              >
                Clear all
              </button>
            )}

          </div>

        </section>


        {/* NOTIFICATION LIST */}

        <section className="notifications-card">

          <div className="notifications-card-header">

            <div>
              <h2>
                Recent Notifications
              </h2>

              <p>
                Important updates related to your farming activities.
              </p>
            </div>

          </div>


          {notifications.length > 0 ? (

            <div className="notifications-list">

              {notifications.map((notification) => (

                <div
                  key={notification.id}
                  className={
                    notification.unread
                      ? "notification-item unread"
                      : "notification-item"
                  }
                >

                  <div
                    className={`notification-icon ${notification.type}`}
                  >
                    {notification.icon}
                  </div>


                  <div className="notification-content">

                    <div className="notification-title-row">

                      <h3>
                        {notification.title}
                      </h3>

                      {notification.unread && (
                        <span className="notification-unread-dot"></span>
                      )}

                    </div>

                    <p>
                      {notification.message}
                    </p>

                    <span className="notification-time">
                      {notification.time}
                    </span>

                  </div>


                  {notification.unread && (
                    <button
                      type="button"
                      className="notification-read-btn"
                      onClick={() =>
                        handleMarkAsRead(notification.id)
                      }
                    >
                      Mark as read
                    </button>
                  )}

                </div>

              ))}

            </div>

          ) : (

            <div className="notifications-empty">

              <div className="notifications-empty-icon">
                🔔
              </div>

              <h3>
                No notifications
              </h3>

              <p>
                You're all caught up. New updates will appear here.
              </p>

            </div>

          )}

        </section>


        {/* NOTIFICATION SETTINGS */}

        <section className="notifications-card">

          <div className="notifications-card-header">

            <div>
              <h2>
                Notification Preferences
              </h2>

              <p>
                Choose which notifications you want to receive.
              </p>
            </div>

          </div>


          <div className="notification-settings-list">


            {/* WEATHER */}

            <div className="notification-setting-item">

              <div className="notification-setting-icon">
                🌧️
              </div>

              <div className="notification-setting-content">
                <strong>
                  Weather Alerts
                </strong>

                <p>
                  Get alerts about rain, temperature and weather changes.
                </p>
              </div>

              <button
                type="button"
                className={
                  settings.weatherAlerts
                    ? "notification-toggle active"
                    : "notification-toggle"
                }
                onClick={() =>
                  handleSettingChange("weatherAlerts")
                }
                aria-label="Toggle weather alerts"
              >
                <span></span>
              </button>

            </div>


            {/* CROP */}

            <div className="notification-setting-item">

              <div className="notification-setting-icon">
                🌱
              </div>

              <div className="notification-setting-content">
                <strong>
                  Crop Updates
                </strong>

                <p>
                  Receive reminders and updates about your crops.
                </p>
              </div>

              <button
                type="button"
                className={
                  settings.cropUpdates
                    ? "notification-toggle active"
                    : "notification-toggle"
                }
                onClick={() =>
                  handleSettingChange("cropUpdates")
                }
                aria-label="Toggle crop updates"
              >
                <span></span>
              </button>

            </div>


            {/* MARKET */}

            <div className="notification-setting-item">

              <div className="notification-setting-icon">
                📈
              </div>

              <div className="notification-setting-content">
                <strong>
                  Market Updates
                </strong>

                <p>
                  Stay informed about crop prices and market changes.
                </p>
              </div>

              <button
                type="button"
                className={
                  settings.marketUpdates
                    ? "notification-toggle active"
                    : "notification-toggle"
                }
                onClick={() =>
                  handleSettingChange("marketUpdates")
                }
                aria-label="Toggle market updates"
              >
                <span></span>
              </button>

            </div>


            {/* ADVISORY */}

            <div className="notification-setting-item">

              <div className="notification-setting-icon">
                💡
              </div>

              <div className="notification-setting-content">
                <strong>
                  Advisory Updates
                </strong>

                <p>
                  Get new farming tips and expert recommendations.
                </p>
              </div>

              <button
                type="button"
                className={
                  settings.advisoryUpdates
                    ? "notification-toggle active"
                    : "notification-toggle"
                }
                onClick={() =>
                  handleSettingChange("advisoryUpdates")
                }
                aria-label="Toggle advisory updates"
              >
                <span></span>
              </button>

            </div>


            {/* MARKETPLACE */}

            <div className="notification-setting-item">

              <div className="notification-setting-icon">
                🛒
              </div>

              <div className="notification-setting-content">
                <strong>
                  Marketplace Updates
                </strong>

                <p>
                  Receive updates about your produce and marketplace activity.
                </p>
              </div>

              <button
                type="button"
                className={
                  settings.marketplaceUpdates
                    ? "notification-toggle active"
                    : "notification-toggle"
                }
                onClick={() =>
                  handleSettingChange("marketplaceUpdates")
                }
                aria-label="Toggle marketplace updates"
              >
                <span></span>
              </button>

            </div>


          </div>

        </section>

      </main>

    </div>
  );
}

export default Notifications;