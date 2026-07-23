import "./Brand.css";

function Brand({
  size = "medium",
}) {
  return (
    <div className={`brand brand--${size}`}>

      <div className="brand__logo">
        CT
      </div>

      <div className="brand__content">

        <span className="brand__title">
          Career Tracker
        </span>

        <span className="brand__subtitle">
          Pro
        </span>

      </div>

    </div>
  );
}

export default Brand;