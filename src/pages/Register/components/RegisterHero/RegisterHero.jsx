import "./RegisterHero.css";

import { FaRocket } from "react-icons/fa";

function RegisterHero() {
  return (
    <div className="register-hero">

      <div className="register-hero__icon">
        <FaRocket />
      </div>

      <h1 className="register-hero__title">
        Start Your Career Journey
      </h1>

      <p className="register-hero__subtitle">
        Create your Career Tracker account and organize
        applications, interviews, offers, and career
        progress—all in one place.
      </p>

      <div className="register-hero__features">

        <div className="register-hero__feature">
          ✓ Track Job Applications
        </div>

        <div className="register-hero__feature">
          ✓ Schedule Interviews
        </div>

        <div className="register-hero__feature">
          ✓ Get Smart Insights
        </div>

        <div className="register-hero__feature">
          ✓ Stay Organized
        </div>

      </div>

    </div>
  );
}

export default RegisterHero;