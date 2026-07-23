import "./ProfileStats.css";

import { useEffect, useState } from "react";

import { getDashboardData } from "../../../../services/dashboard/dashboardService";

function ProfileStats() {

  const [stats, setStats] = useState({
    applications: 0,
    interviews: 0,
    offers: 0,
    rejections: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {

        const data = await getDashboardData();

        setStats(data.stats);

      } catch (error) {
        console.error(error);
      }
    }

    loadStats();
  }, []);

  return (
    <section className="profile-stats">

      <div className="profile-stats__card">

        <h3>Applications</h3>

        <p>{stats.applications}</p>

      </div>

      <div className="profile-stats__card">

        <h3>Interviews</h3>

        <p>{stats.interviews}</p>

      </div>

      <div className="profile-stats__card">

        <h3>Offers</h3>

        <p>{stats.offers}</p>

      </div>

      <div className="profile-stats__card">

        <h3>Rejected</h3>

        <p>{stats.rejections}</p>

      </div>

    </section>
  );
}

export default ProfileStats;