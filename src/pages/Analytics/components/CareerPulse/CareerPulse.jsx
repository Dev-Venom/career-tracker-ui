import "./CareerPulse.css";

function CareerPulse() {
  return (
    <section className="career-pulse">

      <div className="career-pulse__content">

        <span className="career-pulse__eyebrow">
          CAREER PULSE
        </span>

        <h2 className="career-pulse__title">
          You're building momentum.
        </h2>

        <p className="career-pulse__message">
          Your application activity is moving in the right direction.
          Keep applying consistently to maintain your momentum.
        </p>

      </div>

      <div className="career-pulse__indicator">

        <span className="career-pulse__indicator-label">
          Momentum
        </span>

        <strong className="career-pulse__indicator-value">
          Strong
        </strong>

      </div>

    </section>
  );
}

export default CareerPulse;