import { Routes, Route, BrowserRouter } from "react-router-dom"  
import Navbar from "./Navbar"
import Home from "./Home"
import Products from "./Products"
import Benefits from "./Benefits"
import Sobre from "./Sobre"
import Contact from "./Contact"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"


function App() {
  return (
    <div>
      <Navbar />
       <ScrollToTop />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<Benefits />} />  
        <Route path="/products" element={<Products />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App