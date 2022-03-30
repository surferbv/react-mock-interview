import "./App.css";
import React from "react";
import Home from "./components/Home";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Launches from "./components/Launches";
import Missions from "./components/Missions";
import LaunchPad from "./components/LaunchPad";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="launches" element={<Launches />} />
            <Route path="launch_pad" element={<LaunchPad />} />
            <Route path="missions" element={<Missions />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
