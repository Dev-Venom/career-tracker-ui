import "./CareerJourney.css";

import { FaFileAlt, FaEye, FaUserTie, FaTrophy } from "react-icons/fa";

function CareerJourney({ journey }) {
  return (
    <section className="career-journey">
      <div className="career-journey__header">
        <h2>Career Journey</h2>

        <p>Track every milestone of your job search.</p>
      </div>

      <div className="career-journey__timeline">
        {/* Applied */}
        <div
          className={journey?.applied ? "career-step complete" : "career-step"}
        >
          <div className="career-step__icon">
            <FaFileAlt />
          </div>

          <span>Applied</span>
        </div>

        {/* Line */}
        <div
          className={journey?.applied ? "career-line complete" : "career-line"}
        ></div>

        {/* Resume Viewed (Temporary) */}
        <div className="career-step complete">
          <div className="career-step__icon">
            <FaEye />
          </div>

          <span>Resume Viewed</span>
        </div>

        {/* Line */}
        <div
          className={
            journey?.interview ? "career-line complete" : "career-line"
          }
        ></div>

        {/* Interview */}
        <div
          className={
            journey?.interview ? "career-step complete" : "career-step"
          }
        >
          <div className="career-step__icon">
            <FaUserTie />
          </div>

          <span>Interview</span>
        </div>

        {/* Line */}
        <div
          className={journey?.offer ? "career-line complete" : "career-line"}
        ></div>

        {/* Offer */}
        <div
          className={journey?.offer ? "career-step complete" : "career-step"}
        >
          <div className="career-step__icon">
            <FaTrophy />
          </div>

          <span>Offer</span>
        </div>
      </div>
    </section>
  );
}

export default CareerJourney;
