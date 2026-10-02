import { Link } from "react-router-dom";
import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: "Ramesh Kumar",
    mobile: "+91 98765 43210",
    email: "ramesh.kumar@example.com",
    state: "Chhattisgarh",
    district: "Raipur",
    city: "Raipur",
  });

  const [editData, setEditData] = useState(profileData);

  const handleEdit = () => {
    setEditData(profileData);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="profile-sidebar">

        <div>

          <div className="profile-sidebar-brand">

            <div className="profile-brand-logo">
              🌿
            </div>

            <div>
              <h2>Krushiphal</h2>
              <span>Smart Farming, Better Future</span>
            </div>

          </div>

          <nav className="profile-sidebar-nav">

            <Link
              to="/dashboard"
              className="profile-nav-item"
            >
              <span>⌂</span>
              Dashboard
            </Link>

            <Link
              to="/farm-setup"
              className="profile-nav-item"
            >
              <span>🚜</span>
              My Farm
            </Link>

            <Link
              to="/my-crops"
              className="profile-nav-item"
            >
              <span>🌱</span>
              My Crops
            </Link>

            <Link
              to="/marketplace"
              className="profile-nav-item"
            >
              <span>🛒</span>
              Marketplace
            </Link>

            <Link
              to="/ai-prediction"
              className="profile-nav-item"
            >
              <span>🤖</span>
              AI Prediction
            </Link>

            <Link
              to="/reports"
              className="profile-nav-item"
            >
              <span>▥</span>
              Reports
            </Link>

            <Link
              to="/advisory"
              className="profile-nav-item"
            >
              <span>💡</span>
              Advisory
            </Link>

            <Link
              to="/my-profile"
              className="profile-nav-item active"
            >
              <span>♙</span>
              My Profile
            </Link>

          </nav>

        </div>

        <Link
          to="/"
          className="profile-logout"
        >
          <span>↪</span>
          Logout
        </Link>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="profile-main">

        {/* HEADER */}

        <header className="profile-header">

          <div>
            <p className="profile-label">
              MY PROFILE
            </p>

            <h1>
              Profile
            </h1>

            <p className="profile-subtitle">
              Manage your personal information and account details.
            </p>
          </div>

        </header>


        {/* PROFILE HERO */}

        <section className="profile-hero-card">

          <div className="profile-avatar">
            {profileData.fullName.charAt(0)}
          </div>

          <div className="profile-hero-info">

            <h2>
              {profileData.fullName}
            </h2>

            <p>
              Farmer • {profileData.district}, {profileData.state}
            </p>

            <span className="profile-status">
              ● Active Farmer
            </span>

          </div>

          {!isEditing ? (
            <button
              type="button"
              className="profile-edit-btn"
              onClick={handleEdit}
            >
              ✎ Edit Profile
            </button>
          ) : (
            <div className="profile-edit-actions">

              <button
                type="button"
                className="profile-cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="button"
                className="profile-save-btn"
                onClick={handleSave}
              >
                ✓ Save Changes
              </button>

            </div>
          )}

        </section>


        {/* ================= CONTENT ================= */}

        <div className="profile-content-grid">

          {/* PERSONAL DETAILS */}

          <section className="profile-card">

            <div className="profile-card-header">

              <div>
                <h2>
                  Personal Details
                </h2>

                <p>
                  Your basic personal information
                </p>
              </div>

            </div>


            <div className="profile-details-grid">

              <div className="profile-detail-item">

                <span>Full Name</span>

                {isEditing ? (
                  <input
                    type="text"
                    name="fullName"
                    value={editData.fullName}
                    onChange={handleChange}
                    className="profile-edit-input"
                  />
                ) : (
                  <strong>
                    {profileData.fullName}
                  </strong>
                )}

              </div>


              <div className="profile-detail-item">

                <span>Mobile Number</span>

                {isEditing ? (
                  <input
                    type="tel"
                    name="mobile"
                    value={editData.mobile}
                    onChange={handleChange}
                    className="profile-edit-input"
                  />
                ) : (
                  <strong>
                    {profileData.mobile}
                  </strong>
                )}

              </div>


              <div className="profile-detail-item">

                <span>Email Address</span>

                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                    className="profile-edit-input"
                  />
                ) : (
                  <strong>
                    {profileData.email}
                  </strong>
                )}

              </div>


              <div className="profile-detail-item">

                <span>State</span>

                {isEditing ? (
                  <input
                    type="text"
                    name="state"
                    value={editData.state}
                    onChange={handleChange}
                    className="profile-edit-input"
                  />
                ) : (
                  <strong>
                    {profileData.state}
                  </strong>
                )}

              </div>


              <div className="profile-detail-item">

                <span>District</span>

                {isEditing ? (
                  <input
                    type="text"
                    name="district"
                    value={editData.district}
                    onChange={handleChange}
                    className="profile-edit-input"
                  />
                ) : (
                  <strong>
                    {profileData.district}
                  </strong>
                )}

              </div>


              <div className="profile-detail-item">

                <span>Village / City</span>

                {isEditing ? (
                  <input
                    type="text"
                    name="city"
                    value={editData.city}
                    onChange={handleChange}
                    className="profile-edit-input"
                  />
                ) : (
                  <strong>
                    {profileData.city}
                  </strong>
                )}

              </div>

            </div>

          </section>


          {/* MY FARM */}

          <section className="profile-card">

            <div className="profile-card-header">

              <div>
                <h2>
                  My Farm
                </h2>

                <p>
                  Current farm information
                </p>
              </div>

              <span className="profile-card-icon">
                🚜
              </span>

            </div>


            <div className="profile-farm-info">

              <div className="profile-farm-stat">
                <span>Farm Area</span>
                <strong>5.2 Acres</strong>
              </div>

              <div className="profile-farm-stat">
                <span>Active Vegetables</span>
                <strong>4</strong>
              </div>

              <div className="profile-farm-stat">
                <span>Location</span>
                <strong>{profileData.district}</strong>
              </div>

            </div>


            <Link
              to="/farm-setup"
              className="profile-manage-btn"
            >
              Manage Farm →
            </Link>

          </section>

        </div>


        {/* ACCOUNT SETTINGS */}

        <section className="profile-card profile-settings-card">

          <div className="profile-card-header">

            <div>
              <h2>
                Account Settings
              </h2>

              <p>
                Manage your account preferences
              </p>
            </div>

          </div>


          <div className="profile-settings-list">

            {/* LOGIN & SECURITY */}

            <Link
              to="/login-security"
              className="profile-setting-item"
            >

              <div className="profile-setting-icon">
                🔐
              </div>

              <div>
                <strong>
                  Login &amp; Security
                </strong>

                <p>
                  Manage password and account security
                </p>
              </div>

              <span>
                →
              </span>

            </Link>


            {/* NOTIFICATIONS */}

            <Link
              to="/notifications"
              className="profile-setting-item"
            >

              <div className="profile-setting-icon">
                🔔
              </div>

              <div>
                <strong>
                  Notifications
                </strong>

                <p>
                  Manage alerts and notifications
                </p>
              </div>

              <span>
                →
              </span>

            </Link>


            {/* HELP & SUPPORT */}

            <Link
              to="/help-support"
              className="profile-setting-item"
            >

              <div className="profile-setting-icon">
                ❓
              </div>

              <div>
                <strong>
                  Help &amp; Support
                </strong>

                <p>
                  Get help with your Krushiphal account
                </p>
              </div>

              <span>
                →
              </span>

            </Link>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Profile;