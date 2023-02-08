import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Form from "./Form";
import NavBar from "./NavBar";
import Log from "./Log";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/log" element={<Log />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
