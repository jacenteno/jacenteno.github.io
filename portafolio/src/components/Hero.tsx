"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.section 
      className="w-full py-20 text-center flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <Image
          src="/images/jacCV.jpg"
          alt="Jorge Centeno"
          width={120}
          height={120}
          className="rounded-full border-4 border-border-color shadow-apple-subtle"
        />
      </div>
      <h1 className="text-4xl font-bold text-text-primary">
        Full-Stack Engineer <br /> <span className="text-accent-blue">iOS • Android • IA</span>
      </h1>
      <p className="mt-4 text-lg text-text-secondary max-w-md">
        Arquitecturas móviles nativas y backends escalables con IA integrada. Desde la idea hasta producción con calidad enterprise.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8"
      >
        <Link href="#proyectos" className="inline-block bg-accent-blue hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-apple-subtle">
          Ver Proyectos
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
