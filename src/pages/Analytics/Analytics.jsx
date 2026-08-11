import "./Analytics.css";
import useAnalytics from "../../hooks/useAnalytics";

import CareerPulse from "./components/CareerPulse/CareerPulse";
import CareerJourney from "./components/CareerJourney/CareerJourney";
import ApplicationActivity from "./components/ApplicationActivity/ApplicationActivity";
import ApplicationStatus from "./components/ApplicationStatus/ApplicationStatus";

function Analytics({ statusData }) {
  const { analytics, loading, error } = useAnalytics();

  if (loading) {
    return (
      <main className="analytics">
        <p>Loading analytics...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="analytics">
        <p>Unable to load analytics.</p>
      </main>
    );
  }

  return (
    <main className="analytics">
      <section className="analytics__hero">
        <div className="analytics__hero-content">
          <span className="analytics__eyebrow">CAREER INTELLIGENCE</span>

          <h1 className="analytics__title">
            Understand your
            <span> career journey.</span>
          </h1>

          <p className="analytics__description">
            Discover patterns in your job search, measure your progress, and
            make smarter decisions about your next move.
          </p>
        </div>

        <div className="analytics__period">
          <span>Analytics period</span>

          <button type="button">Last 30 Days</button>
        </div>
      </section>

      <CareerPulse />

      <CareerJourney />

      <ApplicationActivity />

      <ApplicationStatus statusData={analytics.applicationStatus} />
    </main>
  );
}

export default Analytics;
