import "./AdminDashboard.css";
import LogoutButton from "../../pages/commonlogButton/LogoutButton";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Fleet Manager Dashboard</h1>

        <div style={{ display: "flex", gap: "12px" }}>
          <Link to="/profile">
            <button className="profile-btn">Profile</button>
          </Link>

          <LogoutButton />
        </div>
      </div>
      <p className="dashboard-subtitle">
        System overview & analytics
      </p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Users</h3>
          <p className="dashboard-number">124</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Vehicles</h3>
          <p className="dashboard-number">56</p>
        </div>

        <div className="dashboard-card">
          <h3>Active Bookings</h3>
          <p className="dashboard-number">32</p>
        </div>

        <div className="dashboard-card">
          <h3>Traffic Alerts</h3>
          <p className="dashboard-number">5</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
