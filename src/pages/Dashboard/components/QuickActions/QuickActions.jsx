import "./QuickActions.css";

import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <section className="quick-actions">
      <div className="quick-actions__header">
        <div>
          <span className="quick-actions__label">
            QUICK ACTIONS
          </span>

          <h2>Keep your career moving.</h2>
        </div>

        <p>
          Manage your applications, interviews, and career progress.
        </p>
      </div>

      <div className="quick-actions__actions">

        <button
          className="quick-actions__button quick-actions__button--primary"
          onClick={() => navigate("/applications/new")}
        >
          <span className="quick-actions__icon">+</span>

          <span>
            <strong>Add Application</strong>
            <small>Track a new opportunity</small>
          </span>
        </button>

        <button
          className="quick-actions__button"
          onClick={() => navigate("/interviews/new")}
        >
          <span className="quick-actions__icon">◷</span>

          <span>
            <strong>Schedule Interview</strong>
            <small>Add an upcoming interview</small>
          </span>
        </button>

        <button
          className="quick-actions__button"
          onClick={() => navigate("/applications/board")}
        >
          <span className="quick-actions__icon">→</span>

          <span>
            <strong>Application Board</strong>
            <small>Manage your pipeline</small>
          </span>
        </button>

        <button
          className="quick-actions__link"
          onClick={() => navigate("/analytics")}
        >
          View Analytics
          <span>↗</span>
        </button>

      </div>
    </section>
  );
}

export default QuickActions;