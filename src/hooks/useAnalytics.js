import { useEffect, useState } from "react";

import {
  getMonthlyStats,
  getStatusStats,
  getCompanyStats,
} from "../services/analytics/analyticsService";

function useAnalytics() {

  const [monthly, setMonthly] = useState({});

  const [status, setStatus] = useState({});

  const [company, setCompany] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadAnalytics() {

      try {

        const [
          monthlyRes,
          statusRes,
          companyRes,
        ] = await Promise.all([

          getMonthlyStats(),
          getStatusStats(),
          getCompanyStats(),

        ]);

        setMonthly(monthlyRes.data);
        setStatus(statusRes.data);
        setCompany(companyRes.data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    loadAnalytics();

  }, []);

  return {
    monthly,
    status,
    company,
    loading,
  };
}

export default useAnalytics;