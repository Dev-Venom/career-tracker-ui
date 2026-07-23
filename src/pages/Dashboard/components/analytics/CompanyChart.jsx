import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function CompanyChart({ data }) {

  const chartData = Object.entries(data).map(
    ([company, count]) => ({
      company,
      count,
    })
  );

  return (

    <div>

      <h3>Top Companies</h3>

      <ResponsiveContainer
        width="100%"
        height={400}
      >

        <BarChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="company" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#10b981"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default CompanyChart;