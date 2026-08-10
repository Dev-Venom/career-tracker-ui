import { useEffect, useState } from "react";

import { getAnalytics } from "../services/analytics/analyticsService";

function useAnalytics() {
  const [analytics, setAnalytics] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);

        const data = await getAnalytics();

        setAnalytics(data);
      } catch (err) {
        console.error("Failed to load analytics:", err);

        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  return {
    analytics,
    loading,
    error,
  };
}

export default useAnalytics;
