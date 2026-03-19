import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
setInterval(() => {
  const banner = document.querySelector("iframe.goog-te-banner-frame")
  if (banner) {
    banner.style.display = "none"
  }
}, 500)