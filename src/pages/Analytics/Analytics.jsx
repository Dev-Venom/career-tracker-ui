import "./Analytics.css";

import AnalyticsHero from "./components/AnalyticsHero/AnalyticsHero";
import CareerSnapshot from "./components/CareerSnapshot/CareerSnapshot";
import CareerJourney from "./components/CareerJourney/CareerJourney";

function Analytics() {
  return (
    <main className="analytics-page">
      <AnalyticsHero />

      <CareerSnapshot />

        <CareerJourney />

    </main>
  );
}

export default Analytics;
