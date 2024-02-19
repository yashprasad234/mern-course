/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import axios from "axios";

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.clear();
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/login",
        null,
        {
          headers: {
            username: username,
            password: password,
          },
        }
      );
      setUsername("");
      setPassword("");

      sessionStorage.setItem("admin", response.data.token);
      console.log("Logged In Successfully");
    } catch (error) {
      console.error("Failed to log in: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div>
      <h1>Login to the Website</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Email:</label>
          <input
            type="username"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      New here? <a href="/register">Register</a>
    </div>
  );
}

export default Login;