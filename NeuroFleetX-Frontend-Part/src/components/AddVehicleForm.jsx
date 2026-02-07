import { useState } from "react";

const AddVehicleForm = ({ refresh }) => {
  const [model, setModel] = useState("");
  const [plate, setPlate] = useState("");

  const submit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/vehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        model,
        licensePlate: plate,
      }),
    })
      .then(res => res.json())
      .then(() => {
        setModel("");
        setPlate("");
        refresh();
      });
  };

  return (
    <form onSubmit={submit} className="card">
      <h3>Add New Vehicle</h3>
      <input
        placeholder="Vehicle Model"
        value={model}
        onChange={e => setModel(e.target.value)}
        required
      />
      <input
        placeholder="License Plate"
        value={plate}
        onChange={e => setPlate(e.target.value)}
        required
      />
      <button>Add Vehicle</button>
    </form>
  );
};

export default AddVehicleForm;
