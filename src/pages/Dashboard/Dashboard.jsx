import "./Dashboard.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeBanner from "./components/WelcomeBanner";
import StatsGrid from "./components/StatsGrid";
import RecentApplications from "./components/RecentApplications";
import UpcomingInterviews from "./components/UpcomingInterviews";
import QuickActions from "./components/QuickActions";

import toast from "react-hot-toast";

import { deleteApplication } from "../../services/applications/applicationService";

import useNotifications from "../../hooks/useNotifications";
import { useAuth } from "../../hooks";
import useDashboard from "../../hooks/useDashboard";

import ConfirmModal from "../../components/ui/ConfirmModal/ConfirmModal";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const { dashboardData, loading, error, refreshDashboard } = useDashboard();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const { unreadCount } = useNotifications();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);

  function handleDeleteClick(id) {
    setSelectedApplicationId(id);
    setDeleteModalOpen(true);
  }

  async function handleDelete() {
    try {
      await deleteApplication(selectedApplicationId);

      toast.success("Application deleted successfully!");

      await refreshDashboard();

      setDeleteModalOpen(false);
      setSelectedApplicationId(null);
    } catch (error) {
      console.error("Failed to delete application:", error);

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

  return (
    <main className="dashboard">
      <WelcomeBanner
        userName={user?.name || "Developer"}
        applicationCount={dashboardData?.stats?.applications || 0}
        onAddApplication={handleAddApplication}
      />

      <StatsGrid
        stats={
          dashboardData?.stats || {
            applications: 0,
            applied: 0,
            interviews: 0,
            offers: 0,
            rejections: 0,
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
        onDelete={handleDeleteClick}
      />

      <UpcomingInterviews
        interviews={dashboardData?.upcomingInterviews || []}
      />

      <QuickActions />

      <ConfirmModal
        isOpen={deleteModalOpen}
        title="Delete application?"
        message="Are you sure you want to delete this application? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDelete}
        onCancel={() => {
          setDeleteModalOpen(false);
          setSelectedApplicationId(null);
        }}
      />
    </main>
  );
}

export default Dashboard;
