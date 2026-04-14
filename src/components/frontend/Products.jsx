import { useState } from "react"
import "../../styles/products.css"
import { FaShoppingCart } from "react-icons/fa"

// --- Image Imports (Corrected paths and verified filenames) ---
import p1 from "../../../assets/marsh_choc.jpg";
import p2 from "../../../assets/oatmeal_mapple.jpeg";
import p3 from "../../../assets/capu.jpg";
import p4 from "../../../assets/stw_ban.jpg";
import p5 from "../../../assets/hot_chocolate.jpeg";
import p6 from "../../../assets/bbq.jpg";
import p7 from "../../../assets/cocoa.jpg";
import p8 from "../../img/productos.jpg";
import p9 from "../../../assets/vanilla_drink.jpeg";
import p10 from "../../img/productos.jpg";
import p11 from "../../img/productos.jpg";
import p12 from "../../img/2Creamofchiken.jpg";
import p13 from "../../img/productos.jpg";
import p14 from "../../img/productos.jpg";
import p15 from "../../img/productos.jpg";

const WHATSAPP = "19039190203"
const EMAIL = "info@weightlossprofessionalnutrition.com"

const PRODUCTS = [
  {
    id: 1,
    name: "Marshmallow Hot Chocolate", /* | */
    desc: "Hot Chocolate delivers the comforting warmth of a classic favorite with a healthy twist.",
    img: p1,
    tag: "💪 High Protein"
  },
  {
    id: 2,
    name: "Maple Brown Sugar Oatmeal", /* | */
    desc: "Warm and nutritious oatmeal mixed with classic maple and brown sugar flavors, offering a comforting and energizing start to your day.",
    img: p2,
    tag: "🌾 Fiber"
  },
  {
    id: 3,
    name: "Capuccino", /* | */
    desc: "Start your day with the creamy, rich flavor of your favorite coffeehouse drink. Our Cappuccino is high in protein.",
    img: p3,
    tag: "⚡ Energy"
  },
  {
    id: 4,
    name: "Strawberry Banana Smoothie", /* | */
    desc: "Blend up a burst of flavor with our Strawberry Banana Smoothie—high in protein and easy on carbs",
    img: p4,
    tag: "⚡ Energy"
  },
  {
    id: 5,
    name: "Hot Chocolate", /* | */
    desc: "A rich and creamy hot chocolate drink with a smooth cocoa flavor, perfect to warm up and enjoy a sweet moment anytime.",
    img: p5,
    tag: "⚡ Energy"
  },
  {
    id: 6,
    name: "BBQ Crips", /* |  */
    desc: "BBQ Crisps deliver the perfect balance of crunch, flavor, and nutrition",
    img: p6,
    tag: "⚡ Energy"
  },
  {
    id: 7,
    name: "Cocoa Cereal", /* | */
    desc: "Enjoy a classic cereal crunch fused with the rich flavor of chocolate – the perfect way to start your day. ",
    img: p7,
    tag: "⚡ Energy"
  },
  /*
  {
    id: 8,
    name: "Chocolate Drink Mix",
    desc: "A smooth and flavorful chocolate drink mix that creates a rich, satisfying beverage when mixed with milk or water.",
    img: p8,
    tag: "⚡ Energy"
  },*/
  {
    id: 9,
    name: "Vanilla Drink Mix", /* | */
    desc: "A creamy vanilla flavored drink mix with a smooth and sweet taste, perfect for shakes or refreshing beverages.",
    img: p9,
    tag: "⚡ Energy"
  },/*
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
  },*/
  {
    id: 12,
    name: "Cream of Chicken", /* | */
    desc: "A comforting soup with tender pasta and savory chicken flavor, perfect for a warm bowl anytime.",
    img: p12,
    tag: "⚡ Energy"
  },/*
  {
    id: 13,
    name: "Chicken Bouillon",
    desc: "A rich chicken-flavored broth that adds depth and savory flavor to soups, broths, and a variety of recipes.",
    img: p13,
    tag: "⚡ Energy"
  },
  {
    id: 14,
    name: "Buttery Mashed Potatoes",
    desc: "Smooth and creamy mashed potatoes with a rich butter flavor, making it the perfect side dish for any meal.",
    img: p14,
    tag: "⚡ Energy"
  },
  {
    id: 15,
    name: "Ranch Crisps", 
    desc: "Crispy and tasty chips seasoned with classic ranch flavor, perfect as a snack or side.",
    img: p15,
    tag: "⚡ Energy"
  }*/
]

function Products({ limit }) {
  const [cart, setCart] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  /* =========================
  FUNCIONES DEL CARRITO
  ========================= */

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id)
    if (exists) {
      setIsOpen(true);
      return;
    }

    setCart(prev => [...prev, product]);
    setIsOpen(true);
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  /* =========================
  ACCIONES DE CONTACTO
  ========================= */

  const buildMessage = () => {
    const list = cart.map((p, i) =>
      `${i + 1}. ${p.name}`
    ).join("\n")

    return `Hello 👋

I am interested in the following products:

${list}

Could you give me more information about them?

Thank you!`
  }

  const sendWhatsApp = () => {
    if (!cart.length) return

    const text = encodeURIComponent(buildMessage())
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank")
  }

  const sendEmail = () => {
    if (!cart.length) return

    const subject = encodeURIComponent("Product Order")
    const body = encodeURIComponent(buildMessage())

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  /* =========================
  INTERFAZ DE USUARIO (UI)
  ========================= */

  const displayProducts = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

  return (
    <div className="products">

      {/* CABECERA (Header) */}
      <div className="products-header">
        <div className="products-title">
          <h1 style={{ visibility: 'hidden', height: 0, margin: 0 }}>Nuestros Productos</h1>
        </div>

        <div className="floating-cart" onClick={() => setIsOpen(true)}>
          <FaShoppingCart />
          {cart.length > 0 && (
            <span className="floating-count">{cart.length}</span>
          )}
        </div>
      </div>

      {/* CUADRÍCULA DE PRODUCTOS (Grid) */}
      <div className="grid">
        {displayProducts.map(product => (
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

      {/* BOTÓN VER MÁS (Only if limit is set) */}
      {limit && (
        <div className="view-more-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p className="view-more-text">Want to see more products?</p>
          <a href="productos.html" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            View Full Catalog <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      )}

      {/* CAPA DE FONDO (Overlay) */}
      <div className={`overlay ${isOpen ? "show" : ""}`} onClick={() => setIsOpen(false)} />

      {/* PANEL LATERAL (Drawer) */}
      <div className={`drawer ${isOpen ? "show" : ""}`}>
        <div className="drawer-header">
          <h3>Your Selection</h3>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>
        <p className="drawer-sub">
          Place your order by sending an email or via WhatsApp.
        </p>

        {cart.length === 0 ? (
          <p className="empty">You haven't selected any products</p>
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
                💬 Inquire via WhatsApp
              </button>
              <button className="email-btn" onClick={sendEmail}>
                📩 Place Order via Email
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Products
