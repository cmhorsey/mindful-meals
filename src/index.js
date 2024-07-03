import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.css"
import Home from "./components/Home"
import FastTracker from "./components/FastTracker"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MealLog from "./components/MealLog"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-log" element={<MealLog />} />
        <Route path="/fast-tracker" element={<FastTracker />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
