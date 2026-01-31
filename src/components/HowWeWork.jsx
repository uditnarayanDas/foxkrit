import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Resume Shortlist",
    description: "We identify the top 5% of talent relevant to your domain.",
    icon: "📄",
  },
  {
    id: 2,
    title: "Telephonic Round",
    description: "Initial screening to verify interest and basic fit.",
    icon: "☎️",
  },
  {
    id: 3,
    title: "Communication Round",
    description: "Ensuring cultural alignment and soft skill proficiency.",
    icon: "👥",
  },
  {
    id: 4,
    title: "Technical Interview",
    description: "Rigorous vetting by domain experts to ensure quality.",
    icon: "⚙️",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="w-full px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How We{" "}
            <span className="text-blue-400 drop-shadow-[0_0_18px_rgba(96,165,250,0.5)]">
              Work
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A simple, structured process to ensure quality at every step.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-6 overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
                {/* Gradient hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10 text-center flex flex-col h-full">
                  {/* Step badge */}
                  <div className="flex justify-center mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30">
                      Step {step.id}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>

                  {/* Text */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("Hero")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="group relative px-10 py-4 backdrop-blur-md bg-white/10
             border border-white/30 text-white font-bold text-lg
             rounded-xl overflow-hidden transition-all duration-300
             hover:bg-white/20 hover:border-white/50
             hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
