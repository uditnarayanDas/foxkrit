import React from "react";
import { motion } from "framer-motion";

const WhyFoxkrit = () => {
  const recruiterPoints = [
    {
      title: "We Deliver Hiring Confidence, Not Resume Volume",
      description: "We Deliver Hiring Confidence, Not Resume Volume"
    },
    {
      title: "Leadership-Led Screening Framework",
      description: "We assess skills, communication, and ownership—not just keywords."
    },
    {
      title: "Interview-Ready Talent Only",
      description: "Meet candidates prepared to perform, not just qualify"
    },
    {
      title: "Role-Specific, Customized Evaluation",
      description: "Every role is screened against your exact requirements"
    },
    {
      title: "Built for Competitive Tech Hiring",
      description: "Designed for fast-moving tech roles and demanding markets"
    },
    {
      title: "Quality Hires That Scale With You",
      description: "We prioritize adaptability and growth potential, not short-term fit alone"
    },
    {
      title: "Market-Ready Talent, Not Training Projects",
      description: "Candidates are vetted for real-world readiness, not just learning potential"
    }
  ];

  const candidatePoints = [
    {
      title: "Right Opportunities, Not Random Interviews",
      description: "Your profile is matched only with roles aligned to your skills and career direction"
    },
    {
      title: "Structured Screening With Clear Expectations",
      description: "Transparent evaluation of communication, aptitude, and role-specific skills"
    },
    {
      title: "Interview-Ready Preparation & Guidance",
      description: "Practical feedback and preparation to help you perform better in interviews"
    },
    {
      title: "Ethical, Candidate-First Approach",
      description: "No resume spamming, no false promises—only responsible and respectful handling of your profile."
    }
  ];

  return (
    <section className="w-full px-6 py-20 scroll-mt-20" id="why-foxkrit">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl Display text-white mb-4" style={{ fontFamily:"'Space Grotesk', merriweather "}}>
            Why 
            <span className="text-blue-400 drop-shadow-[0_0_18px_rgba(96,165,250,0.5)]"> Foxkrit?</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recruiters Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="relative rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-12 h-full overflow-hidden transition-all duration-500 hover:bg-white/15 hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] hover:border-white/40">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  RECRUITERS
                </h3>

                {/* Points List */}
                <div className="space-y-6">
                  {recruiterPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group/item"
                    >
                      <div className="flex gap-3">
                        <span className="text-blue-400 font-bold text-lg pt-1">•</span>
                        <div>
                          <h4 className="text-white font-bold text-sm mb-1 group-hover/item:text-cyan-400 transition-colors">
                            {point.title}
                          </h4>
                          <p className="text-gray-300 text-xs leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 pt-8 border-t border-white/20"
                >
                  <p className="text-blue-400 font-bold text-sm">
                    Quality-first hiring built for speed, clarity, and confidence.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Candidates Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="relative rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-12 h-full overflow-hidden transition-all duration-500 hover:bg-white/15 hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] hover:border-white/40">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  CANDIDATES
                </h3>

                {/* Points List */}
                <div className="space-y-6">
                  {candidatePoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group/item"
                    >
                      <div className="flex gap-3">
                        <span className="text-blue-400 font-bold text-lg pt-1">•</span>
                        <div>
                          <h4 className="text-white font-bold text-sm mb-1 group-hover/item:text-cyan-400 transition-colors">
                            {point.title}
                          </h4>
                          <p className="text-gray-300 text-xs leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-10 pt-8 border-t border-white/20"
                >
                  <p className="text-blue-400 font-bold text-sm">
                    We don't promise jobs—we help you move closer to the right one.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyFoxkrit;