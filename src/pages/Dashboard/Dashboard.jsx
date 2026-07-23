import "./Dashboard.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeBanner from "./components/WelcomeBanner";
import StatsGrid from "./components/StatsGrid";
import RecentApplications from "./components/RecentApplications";
import UpcomingInterviews from "./components/UpcomingInterviews";
import QuickActions from "./components/QuickActions";
import Analytics from "./components/analytics/Analytics";
import toast from "react-hot-toast";

import ApplicationStatusChart from "../../components/charts/ApplicationStatusChart/ApplicationStatusChart";
import ApplicationTrendChart from "../../components/charts/ApplicationTrendChart/ApplicationTrendChart";

import { deleteApplication } from "../../services/applications/applicationService";

import NotificationBadge from "../../pages/Notifications/components/NotificationBadge/NotificationBadge";

import useNotifications from "../../hooks/useNotifications";

import { useAuth } from "../../hooks";
import useDashboard from "../../hooks/useDashboard";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const { dashboardData, loading, error, refreshDashboard } = useDashboard();

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("ALL");

  const { unreadCount } = useNotifications();


  

  async function handleDelete(id) {
    
    if (!window.confirm("Are you sure you want to delete this application?")) {
    return;
}

    try {
      await deleteApplication(id);
      toast.success("Application deleted successfully!");
      refreshDashboard();
    } catch (error) {
      toast.error("Failed to delete application.");

      
    }
  }

  function handleAddApplication() {
    navigate("/applications/new");
  }

  const applications = dashboardData?.applications || [];

  const filteredApplications = applications.filter((application) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      application.companyName.toLowerCase().includes(search) ||
      application.jobTitle.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "ALL" || application.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <main className="dashboard">
        <h2>Loading dashboard...</h2>
      </main>
    );
  }

  if (error) {
    return (
      <main className="dashboard">
        <h2>{error}</h2>
      </main>
    );
  }

  console.log("Dashboard Data:", dashboardData);

  console.log("Stats:", dashboardData?.stats);

  console.log("Applications:", dashboardData?.applications);

  return (
    <main className="dashboard">
      <WelcomeBanner
        userName={user?.name || "Developer"}
        applicationCount={dashboardData?.stats?.totalApplications || 0}
        onAddApplication={handleAddApplication}
      />

      <StatsGrid
        stats={
          dashboardData?.stats || {
            totalApplications: 0,
            applied: 0,
            interview: 0,
            offer: 0,
            rejected: 0,
          }
        }
      />

      <div className="dashboard__search">
        <input
          type="text"
          placeholder="Search company or role..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div className="dashboard__filters">
        {["ALL", "APPLIED", "INTERVIEW", "OFFER", "REJECTED"].map((status) => (
          <button
            key={status}
            className={
              statusFilter === status
                ? "dashboard__filter dashboard__filter--active"
                : "dashboard__filter"
            }
            onClick={() => setStatusFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <RecentApplications
        applications={filteredApplications}
        onDelete={handleDelete}
      />

      <Analytics />

      <UpcomingInterviews
        interviews={dashboardData?.upcomingInterviews || []}
      />

      <ApplicationStatusChart dashboard={dashboardData} />

      <ApplicationTrendChart applications={applications} />

      

      <QuickActions />
    </main>
  );
}

export default Dashboard;
