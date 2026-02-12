"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  return (
    <motion.section 
      className="w-full py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2 className="text-2xl font-bold text-center mb-12 text-text-primary">Proyectos Destacados</h2>
      <div className="mt-8 grid grid-cols-1 gap-8">
        {/* iOsSig Project Card */}
        <div className="bg-background-card p-8 rounded-lg shadow-apple-subtle border border-border-color">
          <h3 className="text-xl font-bold text-accent-blue mb-4">iOsSig - Cliente ERP Móvil Enterprise</h3>
          <p className="text-text-secondary mb-6">
            Aplicación iOS nativa para la gestión de inventarios y operaciones de ERP en entornos empresariales.
          </p>

          {/* Video Demo */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-text-primary mb-2">🎥 Demo en Vivo</h4>
            <div className="relative w-full max-w-xs mx-auto rounded-lg overflow-hidden shadow-apple-subtle border border-border-color">
              <video controls className="w-full h-auto">
                <source src="/videos/demo1.mov" type="video/quicktime" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-text-primary mb-2">🎯 Problema</h4>
            <p className="text-text-secondary">
              Los gestores de inventario necesitaban acceso móvil a sistemas ERP complejos, pero las soluciones web responsivas eran <strong>70% más lentas</strong> y limitadas para funciones críticas como escaneo de códigos.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-text-primary mb-2">💡 Solución Swift</h4>
            <p className="text-text-secondary">
              Desarrollé una app iOS nativa que integra directamente con APIs ERP existentes, usando <strong>SwiftUI + Combine</strong> para interfaces reactivas y <strong>AVFoundation</strong> para escaneo nativo ultra-rápido.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-text-primary mb-2">📈 Impacto Medible</h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-background-light p-4 rounded-md shadow-apple-subtle">
                <span className="block text-2xl font-bold text-accent-green">60%</span>
                <span className="text-sm text-text-secondary">Reducción tiempo gestión</span>
              </div>
              <div className="bg-background-light p-4 rounded-md shadow-apple-subtle">
                <span className="block text-2xl font-bold text-accent-blue">95%</span>
                <span className="text-sm text-text-secondary">Mejora en precisión</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-text-primary mb-2">📱 Screenshots de la Aplicación</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Image src="/images/iosig-dashboard.jpg" alt="iOsSig Dashboard" width={200} height={400} className="rounded-md shadow-apple-subtle" />
              <Image src="/images/iosig-scanner.jpg" alt="iOsSig Scanner" width={200} height={400} className="rounded-md shadow-apple-subtle" />
              <Image src="/images/iosig-inventory.jpg" alt="iOsSig Inventory" width={200} height={400} className="rounded-md shadow-apple-subtle" />
              <Image src="/images/iosig-reports.jpg" alt="iOsSig Reports" width={200} height={400} className="rounded-md shadow-apple-subtle" />
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="#" 
              className="inline-block bg-accent-blue hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-apple-subtle"
            >
              Ver Case Study Completo (Próximamente)
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
