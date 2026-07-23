import "./LoginForm.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaEnvelope, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";

import { useAuth } from "../../../hooks";

import {
  Brand,
  Button,
  Card,
  Checkbox,
  Divider,
  Input,
} from "../../../components/ui";

function LoginForm() {
  const navigate = useNavigate();

  const { login, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    const result = await login(formData);

    if (result.success) {
      toast.success("Login successful!");
      navigate("/dashboard");
      return;
    }

    setError(result.message);
  }

  return (
    <Card className="login-form scale-in">
      <div className="login-form__header">
        <Brand />

        <h2 className="login-form__title">
          Welcome Back
        </h2>

        <p className="login-form__subtitle">
          Sign in to continue your career journey.
        </p>
      </div>

      <form
        className="login-form__form"
        onSubmit={handleSubmit}
      >
        <Input
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          leftIcon={<FaEnvelope />}
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          leftIcon={<FaLock />}
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="login-form__options">
          <Checkbox
            id="remember"
            label="Remember me"
            checked={rememberMe}
            onChange={(e) =>
              setRememberMe(e.target.checked)
            }
          />

          <Link
            to="/forgot-password"
            className="login-form__forgot"
          >
            Forgot Password?
          </Link>
        </div>

        {error && (
          <p className="login-form__error">
            {error}
          </p>
        )}

        <Button
          type="submit"
          fullWidth
          loading={isLoading}
          loadingText="Signing In..."
        >
          Login
        </Button>
      </form>

      <Divider text="OR" />

      <p className="login-form__footer">
        Don't have an account?

        <Link to="/register">
          Create Account
        </Link>
      </p>
    </Card>
  );
}

export default LoginForm;