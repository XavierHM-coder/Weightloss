const stats = [
  { number: "Planes de alimentación personalizados", text: "Adaptados a tus necesidades, preferencias y objetivos." },
  { number: "Entrenadores profesionales certificados", text: "Apoyo y motivación para mantenerte en el camino." },
  { number: "Estrategias sostenibles", text: "Hábitos a largo plazo para mantener la pérdida de peso y mejorar la salud en general." },
]

const features = [
  {
    title: "Nutrición Personalizada",
    subtitle:
      "Cada metabolismo es unico, Nuestros programas estan diseñados para tu cuerpo, estilo de vida y metas personales"
  },
  {
    title: "Guia De Expertos",
    subtitle:
      "Nuestro sistema combina estrategias nutricionales profecionales con habitos practicos que ayudan a transformar tu salud"
  },
  {
    title: "Resultados Sostenibles",
    subtitle:
      "Nos enfocamos en resultados a largo plazo construyendo habitos saludables en lugar de dietas temporales"
  }
]
const styles = {
  section: {
    padding: "120px 20px 60px", 
    textAlign: "center",
    background: "linear-gradient(to bottom, #eaf5ef, #f6fbf8)"
  },
  title: {
    fontSize: "36px",
    color: "#2f6b4f",
    marginBottom: "10px"
  },
  subtitle: {
    color: "#6b7280",
    maxWidth: "600px",
    margin: "0 auto 40px"
  },
  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "40px"
  },
  statCard: {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
  },
  statNumber: {
    fontSize: "28px",
    color: "#2f6b4f",
    marginBottom: "5px"
  },
  featuresContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
  },
  featureCard: {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    textAlign: "left",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
  },
  featureTitle: {
    color: "#2f6b4f",
    marginBottom: "10px"
  }
}
function Sobre() {
  return (
    <section style={styles.section}>
      {/* HEADER */}
      <h1 style={styles.title}>Acerca De Nosotros</h1>
      <p style={styles.subtitle}>
        Ayudando a las personas a tener una vida mas saludable
      </p>

      {/* STATS */}
      <div style={styles.statsContainer}>
        {stats.map((item, index) => (
          <div key={index} style={styles.statCard}>
            <h2 style={styles.statNumber}>{item.number}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <div style={styles.featuresContainer}>
        {features.map((item, index) => (
          <div key={index} style={styles.featureCard}>
            <h3 style={styles.featureTitle}>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sobre

