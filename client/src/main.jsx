import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Suppress React Router v7 Warnings
const routerOptions = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
}; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter {...routerOptions}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
