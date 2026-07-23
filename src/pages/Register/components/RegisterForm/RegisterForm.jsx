import "./RegisterForm.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../../../../services/auth/registerService";

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

import toast from "react-hot-toast";

import {
  Brand,
  Button,
  Card,
  Checkbox,
  Divider,
  Input,
} from "../../../../components/ui";

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agreeTerms, setAgreeTerms] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  function handleChange(event) {
    

    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    console.log("Form Data:", formData);
    event.preventDefault();

    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");

      return;
    }

    if (!agreeTerms) {
      setError("Please accept the Terms & Conditions.");

      return;
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: "USER",
      };
      console.log("Payload:", payload);

      await register(payload);

      toaster.success("Account created successfully!");

      navigate("/login");
    } catch (error) {
      console.log(error);

      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="register-form scale-in">
      <div className="register-form__header">
        <Brand />

        <h2 className="register-form__title">Create Account</h2>

        <p className="register-form__subtitle">
          Start tracking your career journey today.
        </p>
      </div>

      <form className="register-form__form" onSubmit={handleSubmit}>
        <Input
          id="name"
          name="name"
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          leftIcon={<FaUser />}
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Input
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
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
          placeholder="Create a password"
          leftIcon={<FaLock />}
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Input
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          leftIcon={<FaLock />}
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <Checkbox
          id="terms"
          label="I agree to the Terms & Conditions"
          checked={agreeTerms}
          onChange={(event) => setAgreeTerms(event.target.checked)}
        />

        {error && <p className="register-form__error">{error}</p>}

        <Button
          type="submit"
          fullWidth
          loading={isLoading}
          loadingText="Creating Account..."
        >
          Create Account
        </Button>
      </form>

      <Divider text="OR" />

      <p className="register-form__footer">
        Already have an account?
        <Link to="/login">Sign In</Link>
      </p>
    </Card>
  );
}

export default RegisterForm;
