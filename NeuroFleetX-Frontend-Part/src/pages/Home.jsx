import "../components/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      {/* HERO SECTION */}
      <section className="hero">
        <h1 className="title">NeuroFleetX</h1>
        <p className="subtitle">
          AI-Driven Urban Fleet & Traffic Intelligence Platform
        </p>

        <div className="heroButtons">
          <Link to="/login" className="primaryBtn">Login</Link>
          <Link to="/register" className="secondaryBtn">Register</Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="section">
        <h2 className="sectionTitle">Platform Capabilities</h2>

        <div className="cardGrid">
          <div className="card">
            <h3>🚦 Smart Traffic Insights</h3>
            <p>AI-based traffic prediction and congestion analysis.</p>
          </div>

          <div className="card">
            <h3>🚗 Fleet Optimization</h3>
            <p>Real-time vehicle tracking and intelligent allocation.</p>
          </div>

          <div className="card">
            <h3>📍 Live Tracking</h3>
            <p>Monitor vehicle locations and routes on live maps.</p>
          </div>
        </div>
      </section>

      {/* ROLES SECTION */}
      <section className="sectionAlt">
        <h2 className="sectionTitle">Who Can Use NeuroFleetX?</h2>

        <div className="cardGrid">
          <div className="roleCard">👨‍💼 Admin<br /><span>System Control & Analytics</span></div>
          <div className="roleCard">🧑‍✈️ Fleet Manager<br /><span>Fleet Monitoring</span></div>
          <div className="roleCard">🚚 Driver<br /><span>Trip Management</span></div>
          <div className="roleCard">👤 Customer<br /><span>Smart Booking</span></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 NeuroFleetX | AI-Driven Urban Mobility
      </footer>
    </div>
  );
}

export default Home;
