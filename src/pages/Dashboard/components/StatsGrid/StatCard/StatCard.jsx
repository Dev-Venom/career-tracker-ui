import "./StatCard.css";

import { Card } from "../../../../../components/ui";

function StatCard({
  icon,
  title,
  value,
  description,
}) {
  return (
    <Card className="stat-card">
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

        {description && (
          <p className="stat-card__description">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
}

export default StatCard;