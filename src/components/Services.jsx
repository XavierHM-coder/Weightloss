import { motion } from 'framer-motion';
import { FiTrendingUp, FiActivity, FiTarget } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Nutrición Inteligente',
    description:
      'Planes personalizados según tu metabolismo para maximizar energía, mejorar composición corporal y evitar dietas restrictivas.',
    icon: FiTrendingUp,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    id: 2,
    title: 'Actividad Efectiva',
    description:
      'Entrenamientos optimizados para lograr resultados reales en menos tiempo, sin rutinas innecesarias ni ejercicio excesivo.',
    icon: FiActivity,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    id: 3,
    title: 'Hábitos Sostenibles',
    description:
      'Sistema basado en psicología del comportamiento para crear cambios permanentes sin frustración ni efecto rebote.',
    icon: FiTarget,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
];

export default function Services() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-800">
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
              NUESTROS PILARES
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            El Camino hacia tu
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Mejor Versión
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Combinamos nutrición científica, entrenamientos inteligentes y cambio de hábitos duraderos para transformar tu vida.
          </motion.p>
        </motion.div>

        {/* Tarjetas de servicios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group h-full"
              >
                <div className={`${service.bgColor} rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-green-500 dark:hover:border-green-400 shadow-sm hover:shadow-lg`}>
                  {/* Icono */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center">
                      <Icon className={`w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`} />
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-left">
                    {service.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-left mb-6">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold group-hover:gap-4 transition-all duration-300">
                    <span>Saber más</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
