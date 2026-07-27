import "./Analytics.css";

import AnalyticsHero from "./components/AnalyticsHero/AnalyticsHero";
import CareerSnapshot from "./components/CareerSnapshot/CareerSnapshot";
import CareerJourney from "./components/CareerJourney/CareerJourney";
import useAnalytics from "../../hooks/useAnalytics";
import CareerStatistics from "./components/CareerStatistics/CareerStatistics";

function Analytics() {
  const { analytics, error, loading } = useAnalytics();
  return (
    <main className="analytics-page">
      <AnalyticsHero />

      <CareerSnapshot insight={analytics?.careerInsight} />

      <CareerJourney journey={analytics?.careerJourney} />

      <CareerStatistics statistics={analytics?.statistics} />
    </main>
  );
}

export default Analytics;
