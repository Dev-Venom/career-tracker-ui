import "./NotFound.css";

import { FaArrowLeft, FaCompass } from "react-icons/fa";

function NotFound() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <main className="not-found">
      <div className="not-found__content">
        <div className="not-found__visual">
          <span className="not-found__number">4</span>

          <div className="not-found__compass">
            <FaCompass />
          </div>

          <span className="not-found__number">4</span>
        </div>

        <span className="not-found__eyebrow">WRONG TURN</span>

        <h1 className="not-found__title">This career path doesn't exist.</h1>

        <p className="not-found__description">
          Looks like you've taken a wrong turn. Let's get you back on track.
        </p>

        <div className="not-found__actions">
          <button
            className="not-found__primary"
            onClick={() => {
              window.location.href = "/dashboard";
            }}
          >
            Back to Dashboard
          </button>

          <button className="not-found__secondary" onClick={handleGoBack}>
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
