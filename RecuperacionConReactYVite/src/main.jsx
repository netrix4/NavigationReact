import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/index.css";
import Login from "./Components/login";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Home />} path="/Home" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
