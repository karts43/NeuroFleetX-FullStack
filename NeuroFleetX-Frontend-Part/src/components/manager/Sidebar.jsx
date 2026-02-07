import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Manager</h2>

      <nav className="sidebar-menu">
        <Link to="/manager" className="menu-item">Dashboard</Link>
        <Link to="/manager/fleet" className="menu-item">Fleet</Link>
        <Link to="/manager/drivers" className="menu-item">Drivers</Link>
        <Link to="/manager/map" className="menu-item">Live Map</Link>
        <Link to="/profile" className="menu-item">Profile</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
