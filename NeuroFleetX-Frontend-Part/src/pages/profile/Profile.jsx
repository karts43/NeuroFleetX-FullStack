// import "./Profile.css";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     fetch("http://localhost:8080/api/profile", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Unauthorized");
//         return res.json();
//       })
//       .then((data) => {
//         setUser(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         alert("Session expired. Please login again.");
//         localStorage.clear();
//         navigate("/login");
//       });
//   }, [navigate]);

//   if (loading) return <p style={{ textAlign: "center" }}>Loading profile...</p>;

//   return (
//     <div className="profile-container">
//       <div className="profile-card">

//         <div className="profile-header">
//           <h2>NeuroFleetX Profile</h2>
//           <button className="back-btn" onClick={() => navigate(-1)}>
//             Back
//           </button>
//         </div>

//         <div className="profile-avatar">
//           <div className="avatar-circle">
//             {user.email.charAt(0).toUpperCase()}
//           </div>
//         </div>

//         <div className="profile-field">
//           <label>Email</label>
//           <p>{user.email}</p>
//         </div>

//         <div className="profile-field">
//           <label>Role</label>
//           <p>{user.role}</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Profile;

import "./Profile.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Check only token presence (no backend call)
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      navigate("/login");
      return;
    }

    // ✅ Dummy profile data
    setTimeout(() => {
      setUser({
        email: "demo@neurofleetx.com",
        role: role || "FLEET_MANAGER",
      });
      setLoading(false);
    }, 300); // small delay for UX
  }, [navigate]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading profile...</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">

        <div className="profile-header">
          <h2>NeuroFleetX Profile</h2>
          <button className="back-btn" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>

        <div className="profile-avatar">
          <div className="avatar-circle">
            {user.email.charAt(0).toUpperCase()}
          </div>
        </div>

        <div className="profile-field">
          <label>Email</label>
          <p>{user.email}</p>
        </div>

        <div className="profile-field">
          <label>Role</label>
          <p>{user.role}</p>
        </div>

      </div>
    </div>
  );
};

export default Profile;

