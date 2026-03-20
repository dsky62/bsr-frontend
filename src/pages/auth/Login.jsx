import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password
      });

      if (res.data.token) {
        localStorage.setItem("adminToken", res.data.token);
        navigate("/admin");
      } else {
        setError("Invalid login response.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password.");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #444",
    background: "#111",
    color: "white",
    WebkitBoxShadow: "0 0 0 1000px #111 inset",
    WebkitTextFillColor: "white"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "#111",
          padding: "40px",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "400px",
          border: "1px solid #333",
          color: "white"
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Admin Login
        </h1>

        {error && (
          <div
            style={{
              background: "#330000",
              padding: "10px",
              borderRadius: "6px",
              marginBottom: "15px",
              color: "red",
              textAlign: "center"
            }}
          >
            {error}
          </div>
        )}

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#444",
            border: "none",
            borderRadius: "6px",
            color: "white",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

