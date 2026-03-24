import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import logo from "./assets/logo.png"
import LanguageToggle from "./LanguageToggle"
import { FiMenu, FiX } from "react-icons/fi"
import { motion } from "framer-motion"

function Navbar() {

  const [show, setShow] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShow(false)
      } else {
        setShow(true)
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [lastScroll])

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/benefits", label: "Beneficios" },
    { to: "/products", label: "Productos" },
    { to: "/sobre", label: "Acerca de" },
    { to: "/contact", label: "Contacto" },
  ]

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-md border-b border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Logo y Brand */}
        <Link to="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
            <img src={logo} alt="logo" className="w-6 h-6 opacity-0" />
            <span className="text-white font-bold text-lg">WL</span>
          </div>
          <div className="hidden sm:block">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Weightloss
              <span className="text-green-600">Nutrition</span>
            </h2>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-gray-700 dark:text-gray-300 font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Right side - Language Toggle + CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <LanguageToggle />
          
          {/* CTA Button Desktop */}
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 active:scale-95">
            Comenzar
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6 text-gray-900 dark:text-white" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all">
              Comenzar
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar