import "./ManagerDashboard.css";
import { Link, Outlet } from "react-router-dom";
import LogoutButton from "../commonlogButton/LogoutButton";
import Sidebar from "../../components/manager/Sidebar";

const ManagerDashboard = () => {
  return (
    <div className="manager-layout">

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT */}
      <div className="manager-main">

        {/* HEADER */}
        <div className="manager-header">
          <h2>Fleet Manager Panel</h2>

          <div className="manager-actions">
            <Link to="/profile">
              <button className="profile-btn">Profile</button>
            </Link>
            <LogoutButton />
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="manager-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default ManagerDashboard;
