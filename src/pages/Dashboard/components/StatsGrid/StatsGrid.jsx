import "./StatsGrid.css";

import StatCard from "./StatCard";

import { DASHBOARD_STATS } from "../../../../constants/dashboard";

function StatsGrid({ stats = {} }) {
  return (
    <section className="stats-grid">
      {DASHBOARD_STATS.map((item) => {
        const Icon = item.icon;

        return (
          <StatCard
            key={item.key}
            icon={<Icon />}
            title={item.title}
            value={stats[item.key] ?? 0}
            description={item.description}
          />
        );
      })}
    </section>
  );
}

export default StatsGrid;