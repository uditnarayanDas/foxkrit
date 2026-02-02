import React, { useState } from "react";
import { motion } from "framer-motion";
import HireTalentModal from "./HireTalentModal";

const RecruiterSection = () => {
  const [openHireModal, setOpenHireModal] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Smart Screening",
      description:
        "AI-powered candidate filtering to find top talent instantly",
      icon: "🎯",
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Real-time insights into your recruitment pipeline",
      icon: "📊",
    },
    {
      id: 3,
      title: "Team Collaboration",
      description: "Seamless feedback and hiring decisions across teams",
      icon: "👥",
    },
    {
      id: 4,
      title: "Fast Onboarding",
      description: "Quick candidate evaluation and decision making",
      icon: "⚡",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 pt-4 pb-8 sm:py-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 sm:mb-10"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-white mb-2 sm:mb-3"
            style={{ fontFamily: "'Space Grotesk', Merriweather" }}
          >
            For
            <span className="text-blue-400 drop-shadow-[0_0_18px_rgba(96,165,250,0.5)]">
              {" "}
              Recruiters
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Streamline your hiring process with powerful tools tailored for
            modern teams.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="
    flex md:grid
    md:grid-cols-2 lg:grid-cols-4
    gap-6
    overflow-x-auto overflow-y-hidden md:overflow-visible
    snap-x snap-mandatory
    items-stretch
    -mx-6 px-6 md:mx-0 md:px-0
    pb-4
    touch-pan-y md:touch-auto
  "
          style={{ touchAction: "pan-y pan-x" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="
                group relative
                snap-center
                min-w-[85%] sm:min-w-[70%] md:min-w-0
              "
            >
              <div
                className="
                  relative h-48 sm:h-56 lg:h-64
                  rounded-xl sm:rounded-2xl backdrop-blur-md bg-white/10
                  border border-white/20
                  p-3 sm:p-4 lg:p-6
                  overflow-hidden transition-all duration-300
                  hover:bg-white/20 hover:border-white/40
                  hover:shadow-[0_8px_32px_rgba(31,38,135,0.37)]
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-300" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">
                      {card.icon}
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1.5 sm:mb-2">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <motion.div
                  className="
                    absolute bottom-4 right-4 sm:bottom-6 sm:right-6
                    text-white text-lg sm:text-2xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-6 sm:mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpenHireModal(true)}
            className="
              group relative px-5 sm:px-8 md:px-10 py-2.5 sm:py-3
              backdrop-blur-md bg-white/10
              border border-white/30
              text-white font-bold
              text-sm sm:text-base
              rounded-xl overflow-hidden
              transition-all duration-300
              hover:bg-white/20 hover:border-white/50
              hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
            "
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Building Your Team
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

      <HireTalentModal
        open={openHireModal}
        onClose={() => setOpenHireModal(false)}
      />
    </section>
  );
};

export default RecruiterSection;
