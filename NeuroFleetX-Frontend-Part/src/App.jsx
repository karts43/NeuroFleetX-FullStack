import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManagerDashboard from "./pages/manager/ManagerDashboard";
import DriverDashboard from "./pages/driver/DriverDashboard";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/profile/Profile";
import FleetDashboard from "./pages/FleetDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* MANAGER → FLEET DASHBOARD */}
        <Route
          path="/manager"
          element={
            <ProtectedRoute allowedRole="MANAGER">
              <ManagerDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<FleetDashboard />} />
        </Route>


        {/* DRIVER */}
        <Route
          path="/driver"
          element={
            <ProtectedRoute allowedRole="DRIVER">
              <DriverDashboard />
            </ProtectedRoute>
          }
        />

        {/* CUSTOMER */}
        <Route
          path="/customer"
          element={
            <ProtectedRoute allowedRole="CUSTOMER">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />

        {/* PROFILE */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
