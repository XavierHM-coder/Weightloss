import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'María García',
    role: 'Empresaria',
    text: 'Perdí 15 kg en 3 meses sin sacrificar mi comida favorita. El sistema es tan simple que se convirtió en mi estilo de vida. Realmente funciona.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos López',
    role: 'Ingeniero',
    text: 'Nunca pensé que pudiera lograr tanta energía. Los entrenamientos son cortos pero efectivos. Ahora tengo más tiempo con mi familia y me siento increíble.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sofia Rodríguez',
    role: 'Docente',
    text: 'Lo mejor fue entender por qué comía emocional. El cambio de hábitos fue gradual pero permanente. Hace un año terminé el programa y mantengo mis resultados.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Juan Martínez',
    role: 'Desarrollador',
    text: 'Como trabajo todo el día en la computadora, creía que era imposible transformarme. Con este programa logré cambiar sin cambiar mi rutina laboral.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Laura Sánchez',
    role: 'Diseñadora Gráfica',
    text: 'El soporte fue increíble. Tuve dudas en el camino y siempre encontré respuestas rápidas. Perdí 12 kg y gaté mucha confianza en mí misma.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + testimonials.length) % testimonials.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-700 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
              LO QUE DICEN NUESTROS CLIENTES
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Historias de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Transformación Real
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Miles de personas ya han logrado sus objetivos. Tú puedes ser el siguiente.
          </motion.p>
        </motion.div>

        {/* Carrusel de testimonios */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="w-full"
            >
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-gray-600">
                {/* Estrellas */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Texto del testimonio */}
                <p className="text-xl md:text-2xl text-gray-900 dark:text-white font-medium mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Información del autor */}
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Controles de navegación */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Botón anterior */}
            <button
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-green-500 hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-300 transform hover:scale-110 active:scale-95"
              aria-label="Testimonio anterior"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicadores */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-green-600 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 w-2'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            {/* Botón siguiente */}
            <button
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-green-500 hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-300 transform hover:scale-110 active:scale-95"
              aria-label="Siguiente testimonio"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Contador */}
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
            {currentIndex + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}
