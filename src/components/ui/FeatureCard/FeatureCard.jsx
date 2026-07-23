import "./FeatureCard.css";

function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <article className="feature-card hover-lift">

      <div className="feature-card__icon">
        {icon}
      </div>

      <div className="feature-card__content">

        <h3 className="feature-card__title">
          {title}
        </h3>

        <p className="feature-card__description">
          {description}
        </p>

      </div>

    </article>
  );
}

export default FeatureCard;