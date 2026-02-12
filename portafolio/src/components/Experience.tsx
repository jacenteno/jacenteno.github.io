"use client";

import { motion } from "framer-motion";

const experienceData = [
  {
    date: "2022 - Presente",
    company: "Desarrollador Freelance",
    position: "Full-Stack & AI Developer",
    description: "Desarrollo de aplicaciones móviles nativas y backends escalables con integración de IA. Especializado en arquitecturas end-to-end y consultoría tecnológica.",
  },
  {
    date: "2019 - 2022",
    company: "Proyectos Enterprise",
    position: "Senior Mobile Developer",
    description: "Liderazgo en desarrollo de aplicaciones iOS nativas para sistemas ERP y CRM empresariales. Implementación de arquitecturas MVVM y patrones de Clean Architecture.",
  },
  {
    date: "2016 - 2019",
    company: "Desarrollo Multi-plataforma",
    position: "Full-Stack Developer",
    description: "Creación de plataformas web robustas y aplicaciones Android nativas. Enfoque en optimización de performance y experiencia de usuario.",
  },
  {
    date: "2014 - 2016",
    company: "Inicios en Desarrollo",
    position: "Junior Developer",
    description: "Fundamentos en desarrollo backend con Python y primeras experiencias en desarrollo móvil. Aprendizaje de metodologías ágiles y mejores prácticas.",
  },
];

const Experience = () => {
  return (
    <motion.section 
      className="w-full py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-center mb-12 text-text-primary">Experiencia Profesional</h2>
      <div className="mt-8 space-y-8 relative pl-4 md:pl-0">
        {/* Timeline line */}
        <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border-color"></div>

        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:odd:flex-row-reverse group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            {/* Date */}
            <div className="md:w-1/2 text-left md:text-right pr-8 md:pr-16 mb-2 md:mb-0">
              <span className="inline-block bg-background-light text-text-secondary text-sm font-semibold px-4 py-2 rounded-full shadow-apple-subtle">
                {item.date}
              </span>
            </div>

            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 mt-2 w-4 h-4 bg-accent-blue rounded-full z-10 border-2 border-background-light group-hover:scale-125 transition-transform duration-300 shadow-apple-subtle"></div>

            {/* Content Card */}
            <div className="md:w-1/2 bg-background-card p-6 rounded-lg shadow-apple-subtle border border-border-color ml-8 md:ml-0">
              <h3 className="text-xl font-bold text-text-primary">{item.company}</h3>
              <p className="text-accent-blue text-md mb-2">{item.position}</p>
              <p className="text-text-secondary text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
