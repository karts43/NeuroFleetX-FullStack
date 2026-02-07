import "./DriverDashboard.css";
import { Link } from "react-router-dom";
import LogoutButton from "../../pages/commonlogButton/LogoutButton";

const DriverDashboard = () => {
  return (
    <div className="dashboard-container">

      {/* HEADER */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Driver Dashboard</h1>

        <div className="dashboard-actions">
          <Link to="/profile">
            <button className="profile-btn">Profile</button>
          </Link>

          <LogoutButton />
        </div>
      </div>

      <p className="dashboard-subtitle">
        Trip assignments & driving status
      </p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Assigned Trips</h3>
          <p className="dashboard-number">8</p>
        </div>

        <div className="dashboard-card">
          <h3>Completed Trips</h3>
          <p className="dashboard-number">124</p>
        </div>

        <div className="dashboard-card">
          <h3>Pending Trips</h3>
          <p className="dashboard-number">3</p>
        </div>

        <div className="dashboard-card">
          <h3>Vehicle Status</h3>
          <p className="dashboard-status">Active</p>
        </div>
      </div>

    </div>
  );
};

export default DriverDashboard;
