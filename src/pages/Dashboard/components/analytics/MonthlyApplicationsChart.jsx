import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function MonthlyApplicationsChart({ data }) {

  const chartData = Object.entries(data).map(
    ([month, count]) => ({
      month,
      count,
    })
  );

  return (
    <div>
      <h3>Monthly Applications</h3>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#2563eb"
          />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyApplicationsChart;