import { useEffect, useState } from "react";

import {
    getMyInterviews,
} from "../services/interviews/interviewService";

function useInterviews() {

    const [interviews, setInterviews] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    async function refreshInterviews() {

        try {

            setLoading(true);

            const data = await getMyInterviews();

            setInterviews(data);

            setError("");

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        refreshInterviews();

    }, []);

    return {

        interviews,

        loading,

        error,

        refreshInterviews,

    };

}

export default useInterviews;