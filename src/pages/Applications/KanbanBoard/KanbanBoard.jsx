import "./KanbanBoard.css";

import useDashboard from "../../../hooks/useDashboard";

import KanbanColumn from "./KanbanColumn";

import { useState, useEffect } from "react";

import { updateApplicationStatus } from "../../../services/applications/applicationService";

import { DragDropContext } from "@hello-pangea/dnd";

import toast from "react-hot-toast";

function KanbanBoard() {
  const { dashboardData, loading, error } = useDashboard();

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (dashboardData) {
      setApplications(dashboardData.applications);
    }
  }, [dashboardData]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const applied = applications.filter((app) => app.status === "APPLIED");

  const interview = applications.filter((app) => app.status === "INTERVIEW");

  const offer = applications.filter((app) => app.status === "OFFER");

  const rejected = applications.filter((app) => app.status === "REJECTED");

  async function handleDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId) {
      return;
    }

    const newStatus = destination.droppableId;

    try {
      await updateApplicationStatus(draggableId, newStatus);

      setApplications((previous) =>
        previous.map((application) =>
          application.id === Number(draggableId)
            ? {
                ...application,
                status: newStatus,
              }
            : application,
        ),
      );
    } catch (error) {
      console.error("Failed to update application status:", error);
      toast.error("Failed to update status.");
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <main className="kanban-board">
        <div className="kanban-board__columns">
          <KanbanColumn
            title="Applied"
            status="APPLIED"
            applications={applied}
          />

          <KanbanColumn
            title="Interview"
            status="INTERVIEW"
            applications={interview}
          />

          <KanbanColumn title="Offer" status="OFFER" applications={offer} />

          <KanbanColumn
            title="Rejected"
            status="REJECTED"
            applications={rejected}
          />
        </div>
      </main>
    </DragDropContext>
  );
}

export default KanbanBoard;
