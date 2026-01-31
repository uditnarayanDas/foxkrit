import React, { useState } from "react";
import { motion } from "framer-motion";
import TalentNetworkForm from "./TalentNetworkForm.JSX";

const CandidateSection = () => {
  const [openForm, setOpenForm] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Role-Aligned Profile Evaluation",
      description:
        "We review your resume against real job requirements to ensure your profile matches market expectations",
      icon: "📄",
    },
    {
      id: 2,
      title: "Structured Communication & Aptitude Screening",
      description:
        "Our assessments help identify your strengths and improvement areas before interviews",
      icon: "💬",
    },
    {
      id: 3,
      title: "Interview-Ready Positioning",
      description:
        "We focus on quality opportunities where you have a realistic chance to succeed",
      icon: "💼",
    },
    {
      id: 4,
      title: "Career-Focused Support",
      description:
        "Guidance aimed at long-term career growth, not just short-term interviews",
      icon: "📈",
    },
  ];

  return (
    <section className="w-full px-6 py-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', Merriweather" }}
          >
            For
            <span className="text-blue-400 drop-shadow-[0_0_18px_rgba(96,165,250,0.5)]">
              {" "}
              Candidates
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find Your Next Job at a Fast-Paced IT Industry
          </p>
        </motion.div>

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
                  relative h-56 sm:h-64 lg:h-80
                  rounded-2xl backdrop-blur-md bg-white/10
                  border border-white/20
                  p-4 sm:p-6 lg:p-8
                  overflow-hidden transition-all duration-300
                  hover:bg-white/20 hover:border-white/40
                  hover:shadow-[0_8px_32px_rgba(31,38,135,0.37)]
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-300" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
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
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpenForm(true)}
            className="
              group relative px-8 md:px-12 py-3 md:py-4
              backdrop-blur-md bg-white/10
              border border-white/30
              text-white font-bold
              text-base md:text-lg
              rounded-xl overflow-hidden
              transition-all duration-300
              hover:bg-white/20 hover:border-white/50
              hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
            "
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey Now
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

      <TalentNetworkForm open={openForm} onClose={() => setOpenForm(false)} />
    </section>
  );
};

export default CandidateSection;
