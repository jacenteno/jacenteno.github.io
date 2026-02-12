"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-full bg-background-card border-t border-border-color py-8 text-center text-text-secondary text-sm shadow-apple-subtle"
    >
      <div className="max-w-640 mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Jorge Centeno. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://www.linkedin.com/in/jorgecenteno/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
            <Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} className="hover:brightness-75 transition-all duration-200" />
          </Link>
          <Link href="https://github.com/jacenteno" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
            <Image src="/images/github.svg" alt="GitHub" width={24} height={24} className="hover:brightness-75 transition-all duration-200" />
          </Link>
          <Link href="https://x.com/jacenteno" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
            <Image src="/images/x.svg" alt="X (Twitter)" width={24} height={24} className="hover:brightness-75 transition-all duration-200" />
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
