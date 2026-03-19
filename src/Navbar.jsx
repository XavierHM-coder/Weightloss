import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import logo from "./assets/logo.png"

function Navbar() {

  const [show, setShow] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll) {
        setShow(false) // 🔥 baja → oculta
      } else {
        setShow(true) // 🔥 sube → muestra
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [lastScroll])

  return (
    <nav className={`navbar ${show ? "nav-show" : "nav-hide"}`}>

      <div className="nav-container">

        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <h2 className="brand">
            Weightloss <span>Nutrition</span>
          </h2>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>

    </nav>
  )
}

export default Navbar