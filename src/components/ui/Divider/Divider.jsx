import "./Divider.css";

function Divider({
  text = "",
}) {
  return (
    <div className="divider">

      <span className="divider__line"></span>

      {text && (
        <span className="divider__text">
          {text}
        </span>
      )}

      <span className="divider__line"></span>

    </div>
  );
}

export default Divider;