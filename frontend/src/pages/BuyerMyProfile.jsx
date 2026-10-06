import { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import "./BuyerMyProfile.css"; 
 
function BuyerMyProfile() { 
  const navigate = useNavigate();

  const [isEditingProfile, setIsEditingProfile] = useState(false); 
  const [isEditingAddress, setIsEditingAddress] = useState(false); 
 
  const [profile, setProfile] = useState({ 
    name: "Ramesh Kumar", 
    phone: "+91 98765 43210", 
    email: "ramesh.kumar@gmail.com", 
  }); 
 
  const [address, setAddress] = useState({ 
    name: "Ramesh Kumar", 
    area: "Shankar Nagar, Raipur", 
    state: "Chhattisgarh", 
    pincode: "492007", 
  }); 
 
  const [tempProfile, setTempProfile] = useState(profile); 
  const [tempAddress, setTempAddress] = useState(address); 
 
  const handleEditProfile = () => { 
    setTempProfile(profile); 
    setIsEditingProfile(true); 
  }; 
 
  const handleSaveProfile = () => { 
    setProfile(tempProfile); 
    setIsEditingProfile(false); 
  }; 
 
  const handleCancelProfile = () => { 
    setIsEditingProfile(false); 
  }; 
 
  const handleEditAddress = () => { 
    setTempAddress(address); 
    setIsEditingAddress(true); 
  }; 
 
  const handleSaveAddress = () => { 
    setAddress(tempAddress); 
    setIsEditingAddress(false); 
  }; 
 
  const handleCancelAddress = () => { 
    setIsEditingAddress(false); 
  }; 
 
  return ( 
    <div className="buyer-my-profile-layout"> 
 
      {/* Sidebar - Same as Buyer Dashboard */} 
      <aside className="buyer-sidebar"> 
        <div> 
          <Link to="/buyer-dashboard" className="buyer-brand"> 
            <div className="buyer-brand-logo">🌾</div> 
 
            <div> 
              <h2>Krushiphal</h2> 
              <p>Smart Farming, Better Future</p> 
            </div> 
          </Link> 
 
          <nav className="buyer-nav"> 
            <Link 
              to="/buyer-dashboard" 
              className="buyer-nav-link" 
            > 
              <span>⌂</span> 
              Dashboard 
            </Link> 
 
            <Link 
              to="/buyer-marketplace" 
              className="buyer-nav-link" 
            > 
              <span>🥬</span> 
              Vegetables 
            </Link> 
 
            <Link 
              to="/buyer-cart" 
              className="buyer-nav-link" 
            > 
              <span>🛒</span> 
              My Cart 
              <b className="nav-badge">2</b> 
            </Link> 
 
            <Link 
              to="/buyer-order-tracking" 
              className="buyer-nav-link" 
            > 
              <span>📦</span> 
              My Orders 
            </Link> 
 
            <Link 
              to="/buyer-notifications" 
              className="buyer-nav-link" 
            > 
              <span>🔔</span> 
              Notifications 
              <b className="nav-badge">3</b> 
            </Link> 
 
            <Link 
              to="/buyer-my-profile" 
              className="buyer-nav-link active" 
            > 
              <span>♙</span> 
              My Profile 
            </Link> 
          </nav> 
        </div> 
 
        <Link
          to="/login"
          className="buyer-logout"
          onClick={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
        > 
          <span>↪</span> 
          Logout 
        </Link> 
      </aside> 
 
      {/* Main Content */} 
      <main className="buyer-my-profile-main"> 
        <header className="buyer-my-profile-header"> 
          <div> 
            <p className="buyer-profile-label">ACCOUNT</p> 
            <h1>My Profile</h1> 
            <p className="buyer-profile-subtitle"> 
              Manage your personal information and delivery details. 
            </p> 
          </div> 
        </header> 
 
        {/* Profile Overview */} 
        <section className="buyer-profile-overview-card"> 
          <div className="buyer-profile-avatar">RK</div> 
 
          <div className="buyer-profile-overview-info"> 
            <h2>{profile.name}</h2> 
            <p>Buyer · Krushiphal</p> 
            <span>📍 Raipur, Chhattisgarh</span> 
          </div> 
 
          <button 
            type="button" 
            className="edit-profile-btn" 
            onClick={handleEditProfile} 
          > 
            ✎ Edit Profile 
          </button> 
        </section> 
 
        {/* Personal Information */} 
        <section className="buyer-profile-card"> 
          <div className="buyer-profile-section-heading"> 
            <div> 
              <span>PERSONAL DETAILS</span> 
              <h2>Personal Information</h2> 
            </div> 
          </div> 
 
          {isEditingProfile ? ( 
            <div className="buyer-profile-grid"> 
              <div className="buyer-profile-field"> 
                <label>Full Name</label> 
                <input 
                  type="text" 
                  value={tempProfile.name} 
                  onChange={(e) => 
                    setTempProfile({ 
                      ...tempProfile, 
                      name: e.target.value, 
                    }) 
                  } 
                /> 
              </div> 
 
              <div className="buyer-profile-field"> 
                <label>Phone Number</label> 
                <input 
                  type="text" 
                  value={tempProfile.phone} 
                  onChange={(e) => 
                    setTempProfile({ 
                      ...tempProfile, 
                      phone: e.target.value, 
                    }) 
                  } 
                /> 
              </div> 
 
              <div className="buyer-profile-field"> 
                <label>Email Address</label> 
                <input 
                  type="email" 
                  value={tempProfile.email} 
                  onChange={(e) => 
                    setTempProfile({ 
                      ...tempProfile, 
                      email: e.target.value, 
                    }) 
                  } 
                /> 
              </div> 
 
              <div className="buyer-profile-field"> 
                <label>Account Type</label> 
                <div className="buyer-profile-value">Buyer</div> 
              </div> 
 
              <div className="profile-edit-actions"> 
                <button 
                  type="button" 
                  className="save-profile-btn" 
                  onClick={handleSaveProfile} 
                > 
                  Save Changes 
                </button> 
 
                <button 
                  type="button" 
                  className="cancel-profile-btn" 
                  onClick={handleCancelProfile} 
                > 
                  Cancel 
                </button> 
              </div> 
            </div> 
          ) : ( 
            <div className="buyer-profile-grid"> 
              <div className="buyer-profile-field"> 
                <label>Full Name</label> 
                <div className="buyer-profile-value"> 
                  {profile.name} 
                </div> 
              </div> 
 
              <div className="buyer-profile-field"> 
                <label>Phone Number</label> 
                <div className="buyer-profile-value"> 
                  {profile.phone} 
                </div> 
              </div> 
 
              <div className="buyer-profile-field"> 
                <label>Email Address</label> 
                <div className="buyer-profile-value"> 
                  {profile.email} 
                </div> 
              </div> 
 
              <div className="buyer-profile-field"> 
                <label>Account Type</label> 
                <div className="buyer-profile-value">Buyer</div> 
              </div> 
            </div> 
          )} 
        </section> 
 
        {/* Delivery Address */} 
        <section className="buyer-profile-card"> 
          <div className="buyer-profile-section-heading"> 
            <div> 
              <span>DELIVERY DETAILS</span> 
              <h2>Delivery Address</h2> 
            </div> 
          </div> 
 
          {isEditingAddress ? ( 
            <div className="buyer-profile-grid"> 
              <div className="buyer-profile-field"> 
                <label>Name</label> 
                <input 
                  type="text" 
                  value={tempAddress.name} 
                  onChange={(e) => 
                    setTempAddress({ 
                      ...tempAddress, 
                      name: e.target.value, 
                    }) 
                  } 
                /> 
              </div> 
 
              <div className="buyer-profile-field"> 
                <label>Area / City</label> 
                <input 
                  type="text" 
                  value={tempAddress.area} 
                  onChange={(e) => 
                    setTempAddress({ 
                      ...tempAddress, 
                      area: e.target.value, 
                    }) 
                  } 
                /> 
              </div> 
 
              <div className="buyer-profile-field"> 
                <label>State</label> 
                <input 
                  type="text" 
                  value={tempAddress.state} 
                  onChange={(e) => 
                    setTempAddress({ 
                      ...tempAddress, 
                      state: e.target.value, 
                    }) 
                  } 
                /> 
              </div> 
 
              <div className="buyer-profile-field"> 
                <label>Pincode</label> 
                <input 
                  type="text" 
                  value={tempAddress.pincode} 
                  onChange={(e) => 
                    setTempAddress({ 
                      ...tempAddress, 
                      pincode: e.target.value, 
                    }) 
                  } 
                /> 
              </div> 
 
              <div className="profile-edit-actions"> 
                <button 
                  type="button" 
                  className="save-profile-btn" 
                  onClick={handleSaveAddress} 
                > 
                  Save Address 
                </button> 
 
                <button 
                  type="button" 
                  className="cancel-profile-btn" 
                  onClick={handleCancelAddress} 
                > 
                  Cancel 
                </button> 
              </div> 
            </div> 
          ) : ( 
            <div className="buyer-address-card"> 
              <div className="buyer-address-icon">📍</div> 
 
              <div className="buyer-address-content"> 
                <div className="buyer-address-top"> 
                  <strong>Home</strong> 
                  <span>Default</span> 
                </div> 
 
                <p> 
                  {address.name} 
                  <br /> 
                  {address.area} 
                  <br /> 
                  {address.state} - {address.pincode} 
                  <br /> 
                  India 
                </p> 
              </div> 
 
              <button 
                type="button" 
                className="edit-address-btn" 
                onClick={handleEditAddress} 
              > 
                Edit 
              </button> 
            </div> 
          )} 
        </section> 
 
        {/* Account Information */} 
        <section className="buyer-profile-card"> 
          <div className="buyer-profile-section-heading"> 
            <div> 
              <span>ACCOUNT</span> 
              <h2>Account Information</h2> 
            </div> 
          </div> 
 
          <div className="buyer-account-info-list"> 
            <div className="buyer-account-info-item"> 
              <div> 
                <strong>Member Since</strong> 
                <p>September 2026</p> 
              </div> 
 
              <span>🌱</span> 
            </div> 
 
            <div className="buyer-account-info-item"> 
              <div> 
                <strong>Total Orders</strong> 
                <p>12 completed orders</p> 
              </div> 
 
              <span>📦</span> 
            </div> 
 
            <div className="buyer-account-info-item"> 
              <div> 
                <strong>Reviews Given</strong> 
                <p>12 reviews</p> 
              </div> 
 
              <span>⭐</span> 
            </div> 
          </div> 
        </section> 
 
        <footer className="buyer-my-profile-footer"> 
          🌱 Fresh from farmers, delivered to your doorstep. 
        </footer> 
      </main> 
    </div> 
  ); 
} 
 
export default BuyerMyProfile;