import "./Checkbox.css";

function Checkbox({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
}) {
  return (
    <label
      htmlFor={id}
      className={`checkbox ${
        disabled ? "checkbox--disabled" : ""
      }`}
    >
      <input
        id={id}
        className="checkbox__input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />

      <span className="checkbox__box"></span>

      {label && (
        <span className="checkbox__label">
          {label}
        </span>
      )}
    </label>
  );
}

export default Checkbox;