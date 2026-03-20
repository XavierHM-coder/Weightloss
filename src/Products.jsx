import { useState } from "react"
import "./App.css"
import { FaShoppingCart } from "react-icons/fa"

import p1 from "./assets/alfredo_pasta.jpg"
import p2 from "./assets/oatmeal_mapple.jpeg"
import p3 from "./assets/golden_pan.jpeg"
import p4 from "./assets/chocolate_chip.jpeg"
import p5 from "./assets/hot_chocolate.jpeg"
import p6 from "./assets/chocolate_peanut.jpeg"
import p7 from "./assets/Wild_berry.jpg"
import p8 from "./assets/chocolate_drink.jpg"
import p9 from "./assets/vanilla_drink.jpeg"
import p10 from "./assets/mac_chese.jpg"
import p11 from "./assets/chilli_vege.jpg"
import p12 from "./assets/cream_chicken.jpeg"
import p13 from "./assets/chicken_boullion.jpg"
import p14 from "./assets/mashed_potatoes.jpg"
import p15 from "./assets/ranch_crisp.png"


const WHATSAPP = "19039190203"
const EMAIL = "info@weightlossnutrition.com"

const PRODUCTS = [
  {
    id: 1,
    name: "Chicken Alfredo Pasta",
    desc: "Tender pasta combined with a creamy Alfredo-style sauce and savory chicken flavor for a delicious and hearty dish.",
    img: p1,
    tag: "💪 High Protein"
  },
  {
    id: 2,
    name: "Maple Brown Sugar Oatmeal",
    desc: "Warm and hearty oatmeal blended with the classic flavors of maple and brown sugar, offering a comforting and energizing start to your day.",
    img: p2,
    tag: "🌾 Fiber"
  },
  {
    id: 3,
    name: "Golden Pancake",
    desc: "Light and fluffy golden pancakes with a soft texture and delicious flavor. Perfect for a quick and satisfying breakfast with syrup, fruit, or your favorite toppings.",
    img: p3,
    tag: "⚡ Energy"
  },
  {
    id: 4,
    name: "Chocolate Chip Pancake",
    desc: "Soft and fluffy pancakes filled with rich chocolate chips that melt while cooking, creating a sweet and comforting breakfast treat.",
    img: p4,
    tag: "⚡ Energy"
  },
  {
    id: 5,
    name: "Hot Chocolate",
    desc: "A rich and creamy hot chocolate drink with a smooth cocoa flavor, perfect for warming up and enjoying a sweet moment anytime.",
    img: p5,
    tag: "⚡ Energy"
  },
  {
    id: 6,
    name: "Chocolate Peanut Butter Shake/ Pudding",
    desc: "A delicious blend of chocolate and peanut butter flavor that can be enjoyed as a creamy shake or a smooth pudding dessert.",
    img: p6,
    tag: "⚡ Energy"
  },
   {
    id: 7,
    name: "Wild Berry Fruit Drink",
    desc: "A refreshing fruit drink bursting with the sweet and tangy flavors of mixed wild berries.",
    img: p7,
    tag: "⚡ Energy"
  },
  {
    id: 8,
    name: "Chocolate Drink Mix",
    desc: "A smooth and flavorful chocolate drink mix that creates a rich and satisfying beverage when blended with milk or water.",
    img: p8,
    tag: "⚡ Energy"
  },
  {
    id: 9,
    name: "Vanilla Drink Mix",
    desc: "A creamy vanilla-flavored drink mix with a smooth and sweet taste, perfect for shakes or refreshing beverages.",
    img: p9,
    tag: "⚡ Energy"
  },
  {
    id: 10,
    name: "Creamy Mac & Cheese",
    desc: "Classic macaroni pasta coated in a rich and creamy cheese sauce for a comforting and satisfying meal.",
    img: p10,
    tag: "⚡ Energy"
  },
  {
    id: 11,
    name: "Vegetable Chili with Beans",
    desc: "A flavorful chili made with beans and vegetables, seasoned with a blend of spices for a warm and satisfying meal.",
    img: p11,
    tag: "⚡ Energy"
  },
  {
    id: 12,
    name: "Chicken with Pasta Soup",
    desc: "A comforting soup with tender pasta and savory chicken flavor, perfect for a warm and satisfying bowl anytime.",
    img: p12,
    tag: "⚡ Energy"
  },
   {
    id: 13,
    name: "Chicken Bouillon",
    desc: "A rich chicken-flavored bouillon that adds depth and savory taste to soups, broths, and a variety of recipes.",
    img: p13,
    tag: "⚡ Energy"
  },
  {
    id: 14,
    name: "Buttery Mashed Potatoes",
    desc: "Smooth and creamy mashed potatoes with a rich buttery flavor, making a perfect side dish for any meal.",
    img: p14,
    tag: "⚡ Energy"
  },
   {
    id: 15,
    name: "Ranch Crisps",
    desc: "Crunchy and flavorful crisps seasoned with the classic taste of ranch, perfect as a snack or side.",
    img: p15,
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
  const list = cart.map((p, i) =>
    `${i + 1}. ${p.name}`
  ).join("\n")

  return `Hello 👋

I am interested in the following products:

${list}

Could you please provide more information about them?

Thank you!`
}

  const sendWhatsApp = () => {
    if (!cart.length) return

    const text = encodeURIComponent(buildMessage())
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank")
  }

  const sendEmail = () => {
  if (!cart.length) return

  const subject = encodeURIComponent("Product Inquiry")
  const body = encodeURIComponent(buildMessage())

  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
}

  /* =========================
  UI
  ========================= */

  return (
    <div className="products">

      {/* HEADER */}
      <div className="products-header">

        <div className="products-title">
  <h1>
    Our <span>Products</span>
  </h1>

  
</div>

        <div className="floating-cart" onClick={() => setIsOpen(true)}>
  <FaShoppingCart />

  {cart.length > 0 && (
    <span className="floating-count">{cart.length}</span>
  )}
</div>

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

    <img src={item.img} alt={item.name} />

    <div className="cart-info">
      <span className="cart-name">{item.name}</span>
      <span className="cart-tag">{item.tag}</span>
    </div>

    <button onClick={() => removeFromCart(item.id)}>
      ✕
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