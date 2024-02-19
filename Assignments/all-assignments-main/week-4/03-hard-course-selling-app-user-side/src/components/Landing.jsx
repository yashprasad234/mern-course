/* eslint-disable no-unused-vars */

import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>Welcome to course selling website!</h1>
      <Link to="/signup">Signup</Link>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Landing;
