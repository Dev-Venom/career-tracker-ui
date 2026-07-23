import "./ApplicationStatusChart.css";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

function ApplicationStatusChart({ dashboard }) {

    if (!dashboard) {
        return null;
    }

    const data = [
        {
            name: "Applied",
            value: dashboard.applied,
        },
        {
            name: "Interview",
            value: dashboard.interview,
        },
        {
            name: "Offer",
            value: dashboard.offer,
        },
        {
            name: "Rejected",
            value: dashboard.rejected,
        },
    ];

    const COLORS = [
        "#3B82F6",
        "#F59E0B",
        "#10B981",
        "#EF4444",
    ];

    return (
        <section className="application-status-chart">

            <h2>Applications by Status</h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={120}
                        label
                    >

                        {
                            data.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />

                            ))
                        }

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </section>
    );
}

export default ApplicationStatusChart;