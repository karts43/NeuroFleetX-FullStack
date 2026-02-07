import "./CustomerDashboard.css";
import { Link } from "react-router-dom";
import LogoutButton from "../../pages/commonlogButton/LogoutButton";

const CustomerDashboard = () => {
  return (
    <div className="dashboard-container">

      {/* HEADER */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Customer Dashboard</h1>

        <div className="dashboard-actions">
          <Link to="/profile">
            <button className="profile-btn">Profile</button>
          </Link>

          <LogoutButton />
        </div>
      </div>


      <p className="dashboard-subtitle">
        Bookings & service overview
      </p>

      {/* DASHBOARD CARDS */}
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Bookings</h3>
          <p className="dashboard-number">12</p>
        </div>

        <div className="dashboard-card">
          <h3>Active Bookings</h3>
          <p className="dashboard-number">2</p>
        </div>

        <div className="dashboard-card">
          <h3>Completed Trips</h3>
          <p className="dashboard-number">10</p>
        </div>

        <div className="dashboard-card">
          <h3>Available Vehicles</h3>
          <p className="dashboard-number">18</p>
        </div>
      </div>

    </div>
  );
};

export default CustomerDashboard;
