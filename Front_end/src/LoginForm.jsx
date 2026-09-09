import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginFrom.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember me:", rememberMe);

    // Add your login/API logic here
  };

  return (
    <div className="login-container">

      {/* Background glow */}
      <div className="login-glow login-glow-one"></div>
      <div className="login-glow login-glow-two"></div>

      <div className="login-box">

        {/* Header */}
        <div className="login-header">
          <h2>Welcome Back</h2>

          <p className="login-subtitle">
            Please sign in to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">

            <div className="password-label-row">
              <label htmlFor="password">
                Password
              </label>

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword
                  ? "Hide password"
                  : "Show password"}
              </button>
            </div>

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              autoComplete="current-password"
              required
            />
          </div>

          {/* Remember + Forgot */}
          <div className="form-options">

            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(e.target.checked)
                }
              />

              <span>Remember me</span>
            </label>

            <Link
              to="/forgot-password"
              className="forgot-password"
            >
              Forgot password?
            </Link>

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="login-button"
          >
            Sign In
          </button>

        </form>

        {/* Signup */}
        <p className="signup-text">
          Don't have an account?{" "}

          <Link
            to="/signup"
            className="signup-link"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
