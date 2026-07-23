import { useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboard/dashboardService";


function useDashboard() {

  const [searchTerm, setSearchTerm] = useState("");
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function refreshDashboard() {
    try {
      setLoading(true);

      const data = await getDashboardData();

      console.log("HOOK DATA:", data);

      setDashboardData(data);
      setError("");

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshDashboard();
  }, []);

  return {
    dashboardData,
    loading,
    error,
    refreshDashboard,
  };
}

export default useDashboard;