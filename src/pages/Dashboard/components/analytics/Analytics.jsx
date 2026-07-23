import "./Analytics.css";

import useAnalytics from "../../../../hooks/useAnalytics";

import StatusChart from "./StatusChart";
import MonthlyApplicationsChart from "./MonthlyApplicationsChart";
import CompanyChart from "./CompanyChart";

function Analytics() {

    const {
        monthly,
        status,
        company,
        loading,
    } = useAnalytics();

    if (loading) {
        return <p>Loading analytics...</p>;
    }

    return (

     <section className="analytics">

    <h2>Analytics</h2>

    <div className="analytics__grid">

        <div className="analytics__card analytics__card--full">
            <MonthlyApplicationsChart
                data={monthly}
            />
        </div>

        <div className="analytics__card">
            <StatusChart
                data={status}
            />
        </div>

        <div className="analytics__card">
            <CompanyChart
                data={company}
            />
        </div>

    </div>

</section>

    );

}

export default Analytics;