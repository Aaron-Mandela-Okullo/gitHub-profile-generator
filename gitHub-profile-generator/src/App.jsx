import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo";
import UserDetail from "./components/UserDetail";
import Users from "./Routes/Users";
function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Logo />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users/>} />
            <Route path="/:name" element={<UserDetail/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
