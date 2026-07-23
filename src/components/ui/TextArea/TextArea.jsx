import "./TextArea.css";

function TextArea({
  label,
  name,
  value,
  onChange,
  rows = 5,
  placeholder = "",
}) {
  return (
    <div className="textarea">
      {label && (
        <label
          htmlFor={name}
          className="textarea__label"
        >
          {label}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="textarea__field"
      />
    </div>
  );
}

export default TextArea;