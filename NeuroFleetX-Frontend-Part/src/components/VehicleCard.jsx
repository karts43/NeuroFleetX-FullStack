import "./VehicleCard.css";

const VehicleCard = ({ v }) => {
  return (
    <div className="vehicle-card">
      <h4>{v.model}</h4>
      <span className={`status ${v.status.toLowerCase()}`}>
        {v.status}
      </span>

      <p>🔋 Battery: {v.battery}%</p>
      <p>⛽ Fuel: {v.fuel}%</p>
      <p>🚗 Speed: {v.speed} km/h</p>
      <p>📍 {v.latitude.toFixed(4)}, {v.longitude.toFixed(4)}</p>
    </div>
  );
};

export default VehicleCard;
