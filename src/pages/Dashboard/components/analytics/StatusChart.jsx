import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#3b82f6", // Applied
  "#f59e0b", // Interview
  "#22c55e", // Offer
  "#ef4444", // Rejected
];

function StatusChart({ data }) {

  const chartData = Object.entries(data).map(
    ([status, value]) => ({
      name: status,
      value,
    })
  );

  return (

    <div>

      <h3>Status Distribution</h3>

      <ResponsiveContainer
        width="100%"
        height={400}
      >

        <PieChart>

          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >

            {chartData.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );
}

export default StatusChart;