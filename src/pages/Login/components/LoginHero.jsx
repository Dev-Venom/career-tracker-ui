import "./LoginHero.css";

import {
  FaBriefcase,
  FaChartLine,
  FaBullseye,
} from "react-icons/fa";

import { FeatureCard } from "../../../components/ui";

function LoginHero() {
  return (
    <div className="login-hero fade-in">

      <span className="login-hero__badge">
        Career Tracker Pro
      </span>

      <h1 className="login-hero__title">
        Track every opportunity.
        <br />
        Build your dream career.
      </h1>

      <p className="login-hero__description">
        Organize your job applications,
        monitor your progress,
        and stay focused on landing your next role.
      </p>

      <div className="login-hero__features">

        <FeatureCard
          icon={<FaBriefcase />}
          title="Track Applications"
          description="Manage every opportunity in one place."
        />

        <FeatureCard
          icon={<FaChartLine />}
          title="Analyze Progress"
          description="Understand your journey through visual insights."
        />

        <FeatureCard
          icon={<FaBullseye />}
          title="Stay Focused"
          description="Keep your career goals organized and achievable."
        />

      </div>

    </div>
  );
}

export default LoginHero;