"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Desarrollo",
    items: ["SwiftUI", "Kotlin Multiplatform", "Next.js", "Python (Django/FastAPI)", "Node.js (Express)"],
  },
  {
    category: "IA / LLMs",
    items: ["LangChain", "OpenAI API", "Vector DBs", "Fine-tuning", "Prompt Engineering"],
  },
  {
    category: "Herramientas",
    items: ["Git", "Docker", "AWS", "Firebase", "PostgreSQL", "MongoDB"],
  },
];

const Skills = () => {
  return (
    <motion.section 
      className="w-full py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-center mb-12 text-text-primary">Skills / Stacks IA</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((skillCategory, index) => (
          <motion.div
            key={index}
            className="bg-background-card p-6 rounded-lg shadow-apple-subtle border border-border-color"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <h3 className="text-xl font-bold text-text-primary mb-4">{skillCategory.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((item, itemIndex) => (
                <span key={itemIndex} className="px-4 py-2 bg-background-light rounded-full text-text-secondary text-sm shadow-apple-subtle">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
