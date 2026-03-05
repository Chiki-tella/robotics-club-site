import { useEffect } from "react";
import { useNavigate } from "react-router";
import { AdminDashboard } from "../admin/AdminDashboard";

export function AdminPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is admin
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus !== "true") {
      // Redirect to home if not admin
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return <AdminDashboard onLogout={handleLogout} />;
}
