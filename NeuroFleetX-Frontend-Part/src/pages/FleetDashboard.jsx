import { useEffect, useState } from "react";
import VehicleCard from "../components/VehicleCard";
import AddVehicleForm from "../components/AddVehicleForm"; // ✅ ADD THIS LINE
import "./FleetDashboard.css";


const FleetDashboard = () => {
  const [vehicles, setVehicles] = useState([]);

  const loadVehicles = () => {
    fetch("http://localhost:8080/api/vehicles", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  };

  useEffect(() => {
    loadVehicles();
    const interval = setInterval(loadVehicles, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fleet-page">
      <h2 className="page-title">Fleet Inventory Dashboard</h2>

      <AddVehicleForm refresh={loadVehicles} />

      <div className="vehicle-grid">
        {vehicles.map((v) => (
          <VehicleCard key={v.id} v={v} />
        ))}
      </div>
    </div>
  );

};

export default FleetDashboard;
