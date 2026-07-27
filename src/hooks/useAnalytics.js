import { useEffect, useState } from "react";

import { getAnalytics } from "../services/analytics/analyticsService";

function useAnalytics() {

    const [analytics, setAnalytics] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    async function loadAnalytics() {

        try {

            const data = await getAnalytics();

            setAnalytics(data);

        } catch (err) {

            setError(err);

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        loadAnalytics();

    }, []);

    return {

        analytics,

        loading,

        error,

        refresh: loadAnalytics

    };

}

export default useAnalytics;