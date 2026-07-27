import "./CareerStatistics.css";

import StatisticCard from "./StatisticCard";

import {
  FaFileAlt,
  FaUserTie,
  FaTrophy,
  FaChartLine,
} from "react-icons/fa";

function CareerStatistics({ statistics }) {
  return (
    <section className="career-statistics">

      <div className="career-statistics__header">

        <h2>Career Statistics</h2>

        <p>
          Your job search performance at a glance.
        </p>

      </div>

      <div className="career-statistics__grid">

        <StatisticCard
          icon={<FaFileAlt />}
          title="Applications"
          value={statistics?.applications ?? 0}
          subtitle="+8 this month"
        />

        <StatisticCard
          icon={<FaUserTie />}
          title="Interview Rate"
          value={`${statistics?.interviewRate ?? 0}%`}
          subtitle="Above average"
        />

        <StatisticCard
          icon={<FaTrophy />}
          title="Offer Rate"
          value={`${statistics?.offerRate ?? 0}%`}
          subtitle="Improving"
        />

        <StatisticCard
          icon={<FaChartLine />}
          title="Response Rate"
          value={`${statistics?.responseRate ?? 0}%`}
          subtitle="Stable"
        />

      </div>

    </section>
  );
}

export default CareerStatistics;