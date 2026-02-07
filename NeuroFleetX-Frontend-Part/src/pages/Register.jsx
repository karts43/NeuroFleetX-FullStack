import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CUSTOMER");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
        }),
      });

      if (response.ok) {
        alert("Registered successfully! Please login.");
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      alert("Backend not running");
      console.error(error);
    }
  };


  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2 className="register-title">NeuroFleetX Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="ADMIN">Admin</option>
          <option value="MANAGER">Fleet Manager</option>
          <option value="DRIVER">Driver</option>
          <option value="CUSTOMER">Customer</option>
        </select>

        <button type="submit">Register</button>

        <p className="register-text">
          Already have an account?{" "}
          <Link to="/login" className="register-link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
