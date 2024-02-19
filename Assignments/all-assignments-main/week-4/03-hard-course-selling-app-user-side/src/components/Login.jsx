import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
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

      const { token } = response.data;
      sessionStorage.setItem("user", token);
      console.log({
        message: "Logged In Successfully",
        token: sessionStorage.getItem("user"),
      });
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
          <label htmlFor="username">Username:</label>
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
      New here? <a href="/register">Signup</a>
    </div>
  );
}

export default Login;
