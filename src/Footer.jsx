import { Link } from "react-router-dom"
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa"
import { FiMail, FiPhone } from "react-icons/fi"

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: "Inicio", href: "/" },
    { label: "Beneficios", href: "/benefits" },
    { label: "Productos", href: "/products" },
    { label: "Acerca de", href: "/sobre" },
    { label: "Contacto", href: "/contact" },
  ]

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "info@weightlossnutrition.com",
      href: "mailto:info@weightlossnutrition.com",
    },
    {
      icon: FiPhone,
      label: "WhatsApp",
      value: "+52 1 903 919 0203",
      href: "https://wa.me/5219039190203",
    },
  ]

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/weightlosspronutrition",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://www.facebook.com/share/18QNkc6i2o/?mibextid=wwXIfr",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      href: "https://www.tiktok.com",
    },
  ]

  return (
    <footer className="bg-gray-900 text-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">WL</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  Weightloss<span className="text-green-400">Nutrition</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformamos tu cuerpo con nutrición inteligente y hábitos sostenibles que duran toda la vida.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contacto</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact) => {
                const Icon = contact.icon
                return (
                  <li key={contact.label}>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition-colors duration-300 group"
                    >
                      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">{contact.label}</p>
                        <p className="text-sm group-hover:text-green-400">{contact.value}</p>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Síguenos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-green-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© {currentYear} Weightloss Nutrition — Todos los derechos reservados</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-green-400 transition-colors">
              Privacidad
            </Link>
            <Link to="#" className="hover:text-green-400 transition-colors">
              Términos
            </Link>
            <Link to="#" className="hover:text-green-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer