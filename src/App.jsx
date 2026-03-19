import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Products from "./Products"
import LanguageToggle from "./LanguageToggle"
import Contact from "./Contact"
import Footer from "./Footer"

function App() {
  return (
    <>
      <Navbar />
      <LanguageToggle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}



export default App