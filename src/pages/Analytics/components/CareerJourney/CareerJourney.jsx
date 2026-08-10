import "./CareerJourney.css";

import {
  FaFileAlt,
  FaUserTie,
  FaTrophy,
  FaCheckCircle,
} from "react-icons/fa";

function CareerJourney() {
  const stages = [
    {
      id: "applied",
      label: "Applied",
      description: "Application submitted",
      icon: <FaFileAlt />,
      completed: true,
    },
    {
      id: "interview",
      label: "Interview",
      description: "Interview stage",
      icon: <FaUserTie />,
      completed: true,
    },
    {
      id: "offer",
      label: "Offer",
      description: "Offer received",
      icon: <FaTrophy />,
      completed: false,
    },
    {
      id: "hired",
      label: "Hired",
      description: "Career milestone",
      icon: <FaCheckCircle />,
      completed: false,
    },
  ];

  return (
    <section className="career-journey">

      <div className="career-journey__header">

        <div>
          <span className="career-journey__eyebrow">
            CAREER JOURNEY
          </span>

          <h2 className="career-journey__title">
            Your progress at a glance.
          </h2>
        </div>

        <p className="career-journey__description">
          Follow your applications as they move through
          the hiring journey.
        </p>

      </div>

      <div className="career-journey__timeline">

        {stages.map((stage, index) => (
          <div
            className="career-journey__stage-wrapper"
            key={stage.id}
          >

            <div
              className={`career-journey__stage ${
                stage.completed
                  ? "career-journey__stage--complete"
                  : ""
              }`}
            >

              <div className="career-journey__icon">
                {stage.icon}
              </div>

              <div className="career-journey__stage-content">

                <h3>
                  {stage.label}
                </h3>

                <p>
                  {stage.description}
                </p>

              </div>

            </div>

            {index < stages.length - 1 && (
              <div
                className={`career-journey__line ${
                  stage.completed
                    ? "career-journey__line--complete"
                    : ""
                }`}
              />
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default CareerJourney;