import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Role not allowed
  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  // Access allowed
  return children;
};

export default ProtectedRoute;
