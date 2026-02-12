"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
      className="w-full py-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-text-primary">Contacto</h2>
      <p className="mt-4 text-lg text-text-secondary">¿Interesado en colaborar?</p>
      <a href="mailto:jorge.centeno@floppyfilms.com" className="mt-6 inline-block text-lg font-semibold text-accent-blue hover:underline transition-colors duration-300">
        jorge.centeno@floppyfilms.com
      </a>
    </motion.section>
  );
};

export default Contact;
