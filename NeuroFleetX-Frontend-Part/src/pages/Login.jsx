import "../components/Login.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill email and password");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        alert("Invalid credentials");
        return;
      }

      const data = await res.json();

      // ✅ SAVE JWT + ROLE
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // ✅ REDIRECT BY ROLE (backend decides)
      if (data.role === "ADMIN") navigate("/admin");
      else if (data.role === "MANAGER") navigate("/manager");
      else if (data.role === "DRIVER") navigate("/driver");
      else navigate("/customer");

    } catch (err) {
      alert("Server error");
    }
  };



  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-info">
          <h1>NeuroFleetX</h1>
          <p>AI-Powered Urban Mobility Platform</p>
        </div>

        <div className="login-card">
          <h2>Login</h2>

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

          {/* REMOVE role dropdown (backend decides role)

👉 Delete ONLY this part from Login.jsx: */}
          {/* <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="ADMIN">ADMIN</option>
            <option value="MANAGER">MANAGER</option>
            <option value="DRIVER">DRIVER</option>
            <option value="CUSTOMER">CUSTOMER</option>
          </select> */}

          <button onClick={handleLogin}>Login</button>

          <p style={{ textAlign: "center", marginTop: "15px", fontSize: "14px" }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#667eea", fontWeight: "bold" }}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
