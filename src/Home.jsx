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
      title: "Transforma tu Cuerpo y Mente",
      subtitle: "Un plan maestro basado en ciencia para esculpir tu mejor versión."
    },
    {
      img: img2,
      title: "Actividad Estratégica",
      subtitle: "Movimiento inteligente que genera resultados reales y sostenibles."
    },
    {
      img: img3,
      title: "Construye Hábitos de Acero",
      subtitle: "Disciplina transformadora para una vida llena de energía y poder."
    }
  ]

  return (
    <div className="home">

      {/* 1. HERO CON PROPUESTA DE VALOR */}
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
                  <h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <Link to="/products" className="cta">
                    Comienza Hoy
                  </Link>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 2. SECCIÓN DE 3 BENEFICIOS PRINCIPALES (Tríada) */}
      <section className="benefits" style={{ paddingBottom: '40px' }}>
        {[
          { 
            title: "Nutrición Inteligente", 
            desc: "Alimentación diseñada específicamente para tu metabolismo, maximizando energía y recomposición corporal."
          },
          { 
            title: "Actividad Efectiva", 
            desc: "Programas de movimiento optimizados para resultados reales sin pasar horas innecesarias entrenando."
          },
          { 
            title: "Hábitos Sostenibles", 
            desc: "Psicología del comportamiento para asegurar que tus cambios sean permanentes y disfrutes del proceso."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ delay:i*0.2 }}
            viewport={{ once: true }}
          >
            <h3>{item.title}</h3>
            <p style={{ marginTop: '10px', color: '#666' }}>{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Apoyo visual antes del proceso */}
      <section className="premium-section reverse" style={{ padding: '80px 20px', paddingTop: '40px' }}>
        <div className="premium-container" style={{ gap: '40px', alignItems: 'center' }}>
          <div className="premium-text">
            <h2>Siente la Diferencia Cada Día</h2>
            <p>
              Nuestro enfoque no solo transforma tu exterior. 
              Optimiza tu claridad mental, eleva tu energía diaria y mejora tu calidad 
              de vida mediante una sinergia perfecta entre Nutrición, Actividad y Hábitos.
            </p>
          </div>
          <div className="premium-image" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
            <img src={im2} alt="Sinergia y Hábitos" style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 3. PROCESO DE 4 PASOS */}
      <section className="premium-section" style={{ background: '#f8fcf5', textAlign: 'center', padding: '100px 20px' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '10px' }}>Tu Camino al Éxito</h2>
        <p style={{ color: '#666', marginBottom: '60px', fontSize: '18px' }}>
          Un método clínico de 4 pasos comprobado para alcanzar tus metas.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { step: "1", title: "Evaluación", desc: "Análisis exhaustivo de tu estado actual y estilo de vida." },
            { step: "2", title: "Plan Personalizado", desc: "Creación de tu ruta de nutrición y actividad personalizada." },
            { step: "3", title: "Implementación", desc: "Acompañamiento cercano para instaurar hábitos de acero." },
            { step: "4", title: "Resultados", desc: "Mide tu progreso, ajusta y alcanza la meta definitiva." }
          ].map((s, i) => (
            <motion.div 
              key={i} 
              className="card" 
              style={{ padding: '40px 20px' }}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ delay:i*0.15 }}
              viewport={{ once: true }}
            >
              <div style={{ fontSize: '48px', fontWeight: '900', color: '#69a824', marginBottom: '15px' }}>{s.step}</div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ fontSize: '15px', color: '#555' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apoyo visual antes del cierre */}
      <section className="premium-section" style={{ padding: '80px 20px' }}>
        <div className="premium-container" style={{ gap: '40px', alignItems: 'center' }}>
          <div className="premium-text">
            <h2>Nutrición Diseñada Exclusivamente Para Ti</h2>
            <p>
              Un abordaje profesional que se moldea a tu biología,
              tus tiempos y tus ritmos naturales para garantizar resultados que duren toda la vida.
            </p>
          </div>
          <div className="premium-image" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
            <img src={im1} alt="Nutrición Profesional" style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* TESTIMONIOS (Mantenemos la estructura original) */}
      <section className="testimonials">
        <h2>Lo Que Dicen Nuestros Clientes</h2>
        <p className="test-sub">
          Historias reales de éxito garantizado
        </p>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>“Bajé 10kg en 3 meses. El programa clínico cambió mi vida y mi forma de ver la comida.”</p>
            <div className="client">
              <strong>Maria G.</strong><span>Clienta de Nutrición</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>“Despierto con más energía, tengo un enfoque brutal y por fin me siento cómodo en mi propia piel.”</p>
            <div className="client">
              <strong>Daniel R.</strong><span>Cliente Activo</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>“Guía estrictamente científica y resultados absolutos. 100% recomendado si buscas cambios de verdad.”</p>
            <div className="client">
              <strong>Sofia L.</strong><span>Clienta de Hábitos</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CIERRE CON CTA PROFESIONAL (Llamado a la acción) */}
      <section className="cta-section">
        <motion.div
          className="cta-box"
          initial={{ opacity:0, y:60 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once: true }}
        >
          <h2>Toma la Decisión Más Importante: <span>Tu Salud</span></h2>
          <p>
            Reclama tu bienestar hoy mismo. Únete a nuestro programa premium y 
            descubre el impacto de una transformación estructurada por profesionales.
          </p>
          <Link to="/products" className="cta-btn">
            Iniciar Mi Transformación
          </Link>
        </motion.div>
      </section>

    </div>
  )
}

export default Home