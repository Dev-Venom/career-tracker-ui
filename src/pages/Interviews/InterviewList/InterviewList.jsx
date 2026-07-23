import "./InterviewList.css";

import { useNavigate } from "react-router-dom";

import {
  deleteInterview,
} from "../../../services/interviews/interviewService";

import useInterviews from "../../../hooks/useInterviews";

import InterviewCard from "../components/InterviewCard/InterviewCard";

function InterviewList() {
  const navigate = useNavigate();

  const {
    interviews,
    loading,
    error,
    refreshInterviews,
  } = useInterviews();

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this interview?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteInterview(id);

      await refreshInterviews();

      alert("Interview deleted successfully.");
    } catch (error) {
      console.error(error);

      alert("Failed to delete interview.");
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
            onDelete={handleDelete}
          />
        ))
      )}
    </main>
  );
}

export default InterviewList;