import "./contact.css"
import { useEffect, useRef } from "react"
import docBroc from "./assets/doc.png"

const EMAIL = "info@weightlossnutrition.com"
const WHATSAPP = "5219039190203"

export default function Contact() {

  const imageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageRef.current.classList.add("show")
        }
      },
      { threshold: 0.3 }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const openEmail = () => {
    window.location.href = `mailto:${EMAIL}?subject=Nutrition Inquiry`
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello, I am interested in your nutrition programs."
    )

    window.open(`https://wa.me/${WHATSAPP}?text=${message}`, "_blank")
  }

  return (
    <div className="contact-page">

      <div className="contact-container">

        {/* IZQUIERDA */}
        <div className="contact-left">

          <h1>Contact Us</h1>
          <p className="contact-sub">
            Start your transformation today. We are here to help you.
          </p>

          <div className="contact-grid">

            <div className="contact-card">
              <h3>Email</h3>
              <p>{EMAIL}</p>
              <button onClick={openEmail}>
                Send Email
              </button>
            </div>

            <div className="contact-card">
              <h3>WhatsApp</h3>
              <p>Fast response</p>
              <button onClick={openWhatsApp} className="whatsapp">
                Chat Now
              </button>
            </div>

            <div className="contact-card">
              <h3>Schedule</h3>
              <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 10:00 AM - 3:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

          </div>
        </div>

        {/* DERECHA (IMAGEN) */}
        <div className="contact-right" ref={imageRef}>
          <img src={docBroc} alt="Doc Broc" />
        </div>

      </div>

    </div>
  )
}