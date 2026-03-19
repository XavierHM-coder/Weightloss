import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import "swiper/css"
import "swiper/css/effect-fade"

import img1 from "./assets/slider1.jpg"
import img2 from "./assets/slider2.jpg"
import img3 from "./assets/slider3.jpg"
import im1 from "./assets/im1.jpeg"
import im2 from "./assets/im2.jpeg"

function Home() {

  const slides = [
    {
      img: img1,
      title: "Transform Your Body",
      subtitle: "Elite Nutrition System"
    },
    {
      img: img2,
      title: "Discipline & Results",
      subtitle: "Real Sustainable Change"
    },
    {
      img: img3,
      title: "Your Best Version",
      subtitle: "Energy • Balance • Power"
    }
  ]

  return (
    <div className="home"> {/* 🔥 ENVOLVER TODO */}

      {/* HERO */}
      <section className="hero">

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000 }}
          loop
          className="hero-swiper"
        >

          {slides.map((slide, i) => (

            <SwiperSlide key={i}>
              <div className="hero-slide">

                <div
                  className="hero-bg"
                  style={{ backgroundImage: `url(${slide.img})` }}
                />

                <div className="hero-overlay" />

                <motion.div
                  className="hero-content"
                  initial={{ opacity:0, y:80 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ duration:1 }}
                >
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>

                  <Link to="/products" className="cta">
                    Start Now
                  </Link>
                </motion.div>

              </div>
            </SwiperSlide>

          ))}

        </Swiper>

      </section>


      {/* BENEFITS */}
      <section className="benefits">

        {[
          "Personalized Nutrition",
          "Real Results",
          "Sustainable Lifestyle"
        ].map((t,i) => (

          <motion.div
            key={i}
            className="card"
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ delay:i*0.2 }}
          >
            <h3>{t}</h3>
            <p>Designed for your body and goals</p>
          </motion.div>

        ))}

      </section>

      


      <section className="premium-section reverse">

  <div className="premium-container">

    <div className="premium-text">
      <h2>Feel Better Every Day</h2>
      <p>
        Build habits that improve your energy, focus and health.
      </p>
    </div>

    <div className="premium-image">
      <img src={im2} alt="health"/>
    </div>

  </div>

</section>

{/* TESTIMONIOS */}
<section className="testimonials">

  <h2>What Our Clients Say</h2>
  <p className="test-sub">
    Real results from real people
  </p>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <p>
        “I lost 10kg in 3 months. The program changed my life completely.”
      </p>

      <div className="client">
        <strong>Maria G.</strong>
        <span>Client</span>
      </div>
    </div>

    <div className="testimonial-card">
      <p>
        “I feel more energy, better focus and my body looks amazing.”
      </p>

      <div className="client">
        <strong>Daniel R.</strong>
        <span>Client</span>
      </div>
    </div>

    <div className="testimonial-card">
      <p>
        “Professional guidance and real results. Totally recommended.”
      </p>

      <div className="client">
        <strong>Sofia L.</strong>
        <span>Client</span>
      </div>
    </div>

  </div>

</section>

      <section className="premium-section">
{/* Seccion Imagenes*/}
  <div className="premium-container">

    <div className="premium-text">
      <h2>Nutrition Designed For You</h2>
      <p>
        A personalized approach that adapts to your body,
        your lifestyle and your goals.
      </p>
    </div>

    <div className="premium-image">
      <img src={im1} alt="nutrition"/>
    </div>

  </div>

</section>




      {/* CTA FINAL */}
      <section className="cta-section">

  <motion.div
    className="cta-box"
    initial={{ opacity:0, y:60 }}
    whileInView={{ opacity:1, y:0 }}
    transition={{ duration:0.8 }}
  >

    <h2>
      Start Your <span>Transformation</span>
    </h2>

    <p>
      Take control of your health with a personalized nutrition system
      designed for real results.
    </p>

    <Link to="/products" className="cta-btn">
      Get Started
    </Link>

  </motion.div>

</section>

    </div>
  )

}

export default Home