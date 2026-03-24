import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import im4 from "./assets/im4.jpeg";

function Benefits() {

  const benefitss = [
    {
      text: "Productos de proteína de alta calidad diseñados para apoyar tu proceso de pérdida de peso.",
      name: "Suplementos premium",
    },
    {
      text: "Ponte en forma desde casa con un entrenador y rutinas adaptadas a ti. No necesitas experiencia ni equipo.",
      name: "Entrenamiento personal en línea",
    },
    {
      text: "Creamos planes nutricionales personalizados adaptados a tus necesidades y presupuesto.",
      name: "Planes de salud",
    },
  ];

  return (
    <div>

      {/* SECCIÓN CON IMAGEN */}
      <section className="premium-section" style={{ padding: '80px 20px' }}>
        <div className="premium-container" style={{ gap: '40px', alignItems: 'center' }}>
          
          <div className="premium-text">
            <h2>Transforma tu Energía y tu Estilo de Vida</h2>
            <p>
              No se trata solo de bajar de peso. Se trata de recuperar tu energía,
              mejorar tu enfoque y construir una relación saludable con tu cuerpo.
              Nuestro enfoque combina nutrición, hábitos y estrategia para lograr resultados reales.
            </p>
          </div>

          <div
            className="premium-image"
            style={{
              width: '100%',
              maxWidth: '500px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <img
              src={im4}
              alt="Transformación física y mental"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                objectFit: 'cover'
              }}
            />
          </div>

        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="testimonials">
        <h2>Resultados Reales, Beneficios Reales</h2>
        <p className="test-sub">
          Lo que puedes lograr cuando tu nutrición trabaja a tu favor
        </p>

        <div className="testimonial-grid">
          {benefitss.map((b, i) => (
            <div className="flip-card">
  <div className="flip-card-inner">

    {/* FRONT */}
    <div className="flip-card-front">
      <h3>{b.name}</h3>
    </div>

    {/* BACK */}
    <div className="flip-card-back">
      <p>{b.text}</p>
    </div>

  </div>
</div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <motion.div
          className="cta-box"
          initial={{ opacity:0, y:60 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once: true }}
        >
          <h2>Empieza a Sentir Estos Cambios en Tu Vida</h2>
          <p>
            No es suerte, es un sistema adaptado para transformar tu cuerpo, tu energía y tu mentalidad.
            Da el primer paso hoy.
          </p>

          <Link to="/products" className="cta-btn">
            Ver Productos Disponibles
          </Link>
        </motion.div>
      </section>

    </div>
  );
}

export default Benefits;