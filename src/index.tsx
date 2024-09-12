import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.css"
import Home from "./pages/Home"
import FastTracker from "./pages/FastTracker"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MealLog from "./pages/MealLog"

const rootElement = document.getElementById("root")

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
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
} else {
  console.error(
    "Root element not found. Please ensure the HTML contains an element with id='root'."
  )
}
