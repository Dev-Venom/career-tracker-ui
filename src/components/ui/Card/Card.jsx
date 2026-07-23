import "./Card.css";

function Card({
  children,
  className = "",
  hover = false,
}) {
  const classes = [
    "card",
    hover ? "card--hover" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default Card;