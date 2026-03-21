import { Link } from "react-router-dom"
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>
            Weightloss <span>Nutrition</span>
          </h2>
          <p>
            Transform your body with elite nutrition and sustainable habits.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-col">
          <h4>Navigation</h4>

          <Link to="/">Home</Link>
          <Link to="/benefits">Benefits</Link>
          <Link to="/products">Products</Link>
          <Link to="/sobre">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>

          <a href="mailto:info@weightlossnutrition.com">
            info@weightlossnutrition.com
          </a>

          <a href="https://wa.me/5219039190203" target="_blank">
            WhatsApp Chat
          </a>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h4>Follow Us</h4>

          <div className="social-icons">

            <a href="https://www.instagram.com/weightlosspronutrition" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/share/18QNkc6i2o/?mibextid=wwXIfr" target="_blank">
              <FaFacebookF />
            </a>

            <a href="https://www.tiktok.com" target="_blank">
              <FaTiktok />
            </a>

          </div>

        </div>

      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2026 Weightloss Nutrition — All rights reserved
      </div>

    </footer>
  )
}

export default Footer