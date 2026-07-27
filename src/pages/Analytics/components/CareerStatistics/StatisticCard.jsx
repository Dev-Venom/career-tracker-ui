import "./StatisticCard.css";

function StatisticCard({
  icon,
  title,
  value,
  subtitle,
}) {
  return (
    <div className="stat-card">

      <div className="stat-card__icon">
        {icon}
      </div>

      <div className="stat-card__content">

        <p className="stat-card__title">
          {title}
        </p>

        <h2 className="stat-card__value">
          {value}
        </h2>

        <p className="stat-card__subtitle">
          {subtitle}
        </p>

      </div>

    </div>
  );
}

export default StatisticCard;