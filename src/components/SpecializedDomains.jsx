import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SpecializedDomains = () => {
  const domains = [
    "Java Fullstack",
    "React, Angular",
    "Data Analyst",
    "Data Scientist",
    "Cloud Services",
    "Gen AI",
    "AI/ML Engineer",
    "Agentic AI",
    "SAP Modules",
    "DevOps Engineer",
    "Blockchain Developer",
    "Cybersecurity"
  ];

  const reasons = [
    {
      number: "1",
      title: "We Don't Promise Everything—We Promise Excellence",
      description: "We are comfortable saying \"no\" to projects outside our expertise. We won't promise to fill every seat in your organization, but for the domains we represent, we promise the top 5% of talent. By narrowing our focus, we deepen our impact."
    },
    {
      number: "2",
      title: "Deep Network, Not Just a Database",
      description: "Because we live and breathe in specific domains, we don't start our search from scratch. We maintain active, long-term relationships with \"passive\" candidates—the high-performers who aren't looking at job boards but will take a call from a specialist they trust."
    },
    {
      number: "3",
      title: "We Speak the Language",
      description: "There is nothing worse for a hiring manager than explaining basic industry terminology to a recruiter. Our consultants are domain-centric; they understand the technical nuances, the market shifts, and the specific skill sets required to excel in your field."
    },
    {
      number: "4",
      title: "Reduced Time-to-Hire through Curation",
      description: "Generalist firms often send a high volume of resumes hoping one \"sticks.\" We do the opposite. We provide a curated shortlist of candidates who are not just culturally aligned, but technically superior. You spend less time interviewing and more time onboarding."
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 py-10 sm:py-14 scroll-mt-16 bg-black" id="specialized-domains">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl Display text-white mb-3" style={{ fontFamily: "'Space Grotesk', Merriweather" }}>
            Specialized
            <span className="text-blue-400 drop-shadow-[0_0_18px_rgba(96,165,250,0.5)]"> Domains</span>
          </h2>

          {/* Auto-scrolling Domains */}
          <div className="relative w-full overflow-hidden py-4 sm:py-6 mb-10 sm:mb-14 mt-6 sm:mt-10">
            <motion.div
              className="flex gap-3 sm:gap-4 px-4 sm:px-6"
              animate={{ x: [0, -2000] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...domains, ...domains].map((domain, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 border border-white/30 rounded-full shadow-sm hover:bg-white/30 hover:shadow-md transition-all duration-300 whitespace-nowrap backdrop-blur-md">
                    <span className="text-white font-semibold text-xs sm:text-sm">
                      {domain}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Why We Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Why We Focus on Specialized Domains
          </h3>

          {/* Decorative underline */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-xl sm:rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-4 sm:p-6 h-full overflow-hidden transition-all duration-500 hover:bg-white/15 hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] hover:border-white/40">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500" />

                  {/* Number Badge */}
                  <div className="relative z-10 mb-2 sm:mb-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold rounded-full text-sm sm:text-base">
                      {reason.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="border-t border-b border-white/20 py-4 sm:py-6 px-4 sm:px-6 text-center bg-gradient-to-r from-white/0 via-white/5 to-white/0">
              <p className="text-base sm:text-lg md:text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Our reputation isn't built on the number of roles we take on, but on the caliber of the people we place.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecializedDomains;