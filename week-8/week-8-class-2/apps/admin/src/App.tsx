import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "@repo/ui/Signup";
import Login from "@repo/ui/Login";
import Landing from "./components/Landing.tsx";
import Appbar from "./components/Appbar.tsx";

function App() {
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
