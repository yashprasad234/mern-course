/* eslint-disable no-unused-vars */
// App.js
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import NoMatch from "./Components/NoMatch";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
