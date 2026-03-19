import "./contact.css"

const EMAIL = "info@weightlossnutrition.com"
const WHATSAPP = "5219039190203" // formato internacional

export default function Contact() {

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

      <h1>Contact Us</h1>
      <p className="contact-sub">
        Start your transformation today. We are here to help you.
      </p>

      <div className="contact-grid">

        {/* EMAIL */}
        <div className="contact-card">
          <h3>Email</h3>
          <p>{EMAIL}</p>

          <button onClick={openEmail}>
            Send Email
          </button>
        </div>

        {/* WHATSAPP */}
        <div className="contact-card">
          <h3>WhatsApp</h3>
          <p>Fast response</p>

          <button onClick={openWhatsApp} className="whatsapp">
            Chat Now
          </button>
        </div>

        {/* HORARIO */}
        <div className="contact-card">
          <h3>Schedule</h3>

          <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
          <p>Saturday: 10:00 AM - 3:00 PM</p>
          <p>Sunday: Closed</p>

        </div>

      </div>

    </div>
  )
}