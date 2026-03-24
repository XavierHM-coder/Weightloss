import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center pt-20 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-6"
          >
            {/* Etiqueta */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 w-fit">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                Transformación Real, Resultados Comprobados
              </span>
            </motion.div>

            {/* Título principal */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Tu Transformación
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Física y Energética
              </span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Logra el cuerpo que deseas mediante nutrición inteligente, entrenamientos efectivos y hábitos sostenibles. Sin complicaciones, sin promesas falsas, solo resultados reales.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Comenzar Ahora
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-green-600 dark:hover:border-green-400 transition-all duration-300">
                Ver Planes
              </button>
            </motion.div>

            {/* Indicadores */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">+5,000</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Transformaciones exitosas</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">98%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Satisfacción garantizada</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">24/7</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Soporte dedicado</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagen derecha */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full aspect-square max-w-md">
              {/* Círculo de fondo decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-full blur-3xl"></div>

              {/* Contenedor de imagen */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 opacity-10 flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-green-600 dark:text-green-400 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
