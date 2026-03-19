import { useState } from "react"
import "./App.css"
import { FaShoppingCart } from "react-icons/fa"

import p1 from "./assets/alfredo_pasta.jpg"
import p2 from "./assets/aloha_mango.jpeg"
import p3 from "./assets/berry_smothie.jpeg"

const WHATSAPP = "521XXXXXXXXXX"
const EMAIL = "info@weightlossnutrition.com"

const PRODUCTS = [
  {
    id: 1,
    name: "Protein Shake",
    desc: "High protein nutrition",
    img: p1,
    tag: "💪 High Protein"
  },
  {
    id: 2,
    name: "Oatmeal",
    desc: "Healthy breakfast",
    img: p2,
    tag: "🌾 Fiber"
  },
  {
    id: 3,
    name: "Energy Drink",
    desc: "Boost your energy",
    img: p3,
    tag: "⚡ Energy"
  }
]

function Products() {
  const [cart, setCart] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  /* =========================
  CART FUNCTIONS
  ========================= */

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id)
    if (exists) return

    setCart(prev => [...prev, product])
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  /* =========================
  CONTACT ACTIONS
  ========================= */

  const buildMessage = () => {
    const list = cart.map(p => `• ${p.name}`).join("\n")

    return `Hello, I am interested in these products:

${list}

Can you give me more information?`
  }

  const sendWhatsApp = () => {
    if (!cart.length) return

    const text = encodeURIComponent(buildMessage())
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank")
  }

  const sendEmail = () => {
    if (!cart.length) return

    const body = encodeURIComponent(buildMessage())

    window.location.href =
      `mailto:${EMAIL}?subject=Product Inquiry&body=${body}`
  }

  /* =========================
  UI
  ========================= */

  return (
    <div className="products">

      {/* HEADER */}
      <div className="products-header">

        <h1>Our Products</h1>

        <button className="cart-btn" onClick={() => setIsOpen(true)}>
          <FaShoppingCart />

          <span className="cart-label">Cart</span>

          {cart.length > 0 && (
            <span className="cart-count">{cart.length}</span>
          )}
        </button>

      </div>

      {/* GRID */}
      <div className="grid">

        {PRODUCTS.map(product => (
          <div key={product.id} className="card">

            <div className="img-wrap">
              <img src={product.img} alt={product.name} />
              <span className="tag">{product.tag}</span>
            </div>

            <div className="card-body">
              <h3>{product.name}</h3>
              <p>{product.desc}</p>

              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* OVERLAY */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* DRAWER */}
      <div className={`drawer ${isOpen ? "show" : ""}`}>

        <div className="drawer-header">
          <h3>Your Selection</h3>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <p className="drawer-sub">
          Request information about these products
        </p>

        {cart.length === 0 ? (
          <p className="empty">No products selected</p>
        ) : (
          <>
            <div className="cart-list">

              {cart.map(item => (
                <div key={item.id} className="cart-item">

                  <span>{item.name}</span>

                  <button onClick={() => removeFromCart(item.id)}>
                    ❌
                  </button>

                </div>
              ))}

            </div>

            <div className="cart-actions">

              <button className="whatsapp-btn" onClick={sendWhatsApp}>
                💬 WhatsApp
              </button>

              <button className="email-btn" onClick={sendEmail}>
                📩 Email
              </button>

            </div>
          </>
        )}

      </div>

    </div>
  )
}

export default Products