import "./Button.css";

import Spinner from "../Spinner";

function Button({
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
}) {
  const className = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    fullWidth ? "button--full-width" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={className}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <>
          <Spinner size="small" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && (
            <span className="button__icon">
              {leftIcon}
            </span>
          )}

          <span className="button__label">
            {children}
          </span>

          {rightIcon && (
            <span className="button__icon">
              {rightIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
}

export default Button;