import "./Select.css";

function Select({
  label,
  name,
  value,
  onChange,
  options = [],
}) {
  return (
    <div className="select">
      {label && (
        <label
          htmlFor={name}
          className="select__label"
        >
          {label}
        </label>
      )}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="select__field"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;