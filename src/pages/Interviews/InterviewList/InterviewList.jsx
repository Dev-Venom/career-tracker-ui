import "./InterviewList.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { deleteInterview } from "../../../services/interviews/interviewService";

import useInterviews from "../../../hooks/useInterviews";

import toast from "react-hot-toast";

import InterviewCard from "../components/InterviewCard/InterviewCard";

import ConfirmModal from "../../../components/ui/ConfirmModal/ConfirmModal";

function InterviewList() {
  const navigate = useNavigate();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedInterviewId, setSelectedInterviewId] = useState(null);

  const { interviews, loading, error, refreshInterviews } = useInterviews();

  function handleDeleteClick(id) {
    setSelectedInterviewId(id);
    setDeleteModalOpen(true);
  }

  async function handleDelete() {
    try {
      await deleteInterview(selectedInterviewId);

      await refreshInterviews();

      toast.success("Interview deleted successfully.");

      setDeleteModalOpen(false);
      setSelectedInterviewId(null);
    } catch (error) {
      console.error("Failed to delete interview:", error);

      toast.error("Failed to delete interview.");
    }
  }

  function handleEdit(interview) {
    navigate(`/interviews/${interview.id}/edit`);
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <main className="interview-list">
      <h1>My Interviews</h1>

      {interviews.length === 0 ? (
        <p>No interviews scheduled yet.</p>
      ) : (
        interviews.map((interview) => (
          <InterviewCard
            key={interview.id}
            interview={interview}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
          />
        ))
      )}

      <ConfirmModal
        isOpen={deleteModalOpen}
        title="Delete interview?"
        message="Are you sure you want to delete this interview? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDelete}
        onCancel={() => {
          setDeleteModalOpen(false);
          setSelectedInterviewId(null);
        }}
      />
    </main>
  );
}

export default InterviewList;
