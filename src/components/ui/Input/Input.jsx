import "./Input.css";

import { forwardRef, useState } from "react";

import {
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

const Input = forwardRef(
    (
        {
            id,
            label,
            error,
            helperText,
            leftIcon,
            type = "text",
            required = false,
            ...props
        },
        ref
    ) => {

        const [showPassword, setShowPassword] =
            useState(false);

        const isPassword =
            type === "password";

        const inputType =
            isPassword && showPassword
                ? "text"
                : type;

        return (
            <div className="input">

                {label && (

                    <label
                        htmlFor={id}
                        className="input__label"
                    >

                        {label}

                        {required && (
                            <span className="input__required">
                                *
                            </span>
                        )}

                    </label>

                )}

                <div
                    className={`input__wrapper ${
                        error
                            ? "input__wrapper--error"
                            : ""
                    }`}
                >

                    {leftIcon && (
                        <span className="input__icon">

                            {leftIcon}

                        </span>
                    )}

                    <input
                        ref={ref}
                        id={id}
                        className="input__field"
                        type={inputType}
                        aria-invalid={!!error}
                        {...props}
                    />

                    {isPassword && (

                        <button
                            type="button"
                            className="input__toggle"
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                        >

                            {showPassword
                                ? <FaEyeSlash />
                                : <FaEye />}

                        </button>

                    )}

                </div>

                {error ? (

                    <p className="input__error">

                        {error}

                    </p>

                ) : helperText ? (

                    <p className="input__helper">

                        {helperText}

                    </p>

                ) : null}

            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;