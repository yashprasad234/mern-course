/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import axios from "axios";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/signup", {
        username: username,
        password: password,
      });
      setUsername("");
      setPassword("");
      console.log(response.data);
      console.log("Signed up successfully");
    } catch (error) {
      console.error("Failed to sign up: ", error);
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
      <h1>Signup to the website</h1>
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
          <button type="submit">Sign Up</button>
        </div>
      </form>
      Already a user? <a href="/login">Login</a>
    </div>
  );
}

export default Signup;
