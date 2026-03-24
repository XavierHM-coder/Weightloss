import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-700 dark:to-blue-700">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          ¿Listo para tu transformación?
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Únete a miles de personas que ya han logrado sus objetivos. Tu historia de transformación comienza hoy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Comienza Gratis
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-300"
          >
            Agendar Consulta
          </motion.button>
        </div>

        <p className="text-white/80 text-sm mt-6">
          Sin tarjeta de crédito. Acceso inmediato.
        </p>
      </motion.div>
    </section>
  );
}
