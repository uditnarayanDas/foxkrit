import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import RotatingText from "../components/RotatingText";
import TalentNetworkForm from "../components/TalentNetworkForm.JSX";
import HireTalentModal from "../components/HireTalentModal.jsx";

const HeroSection = () => {
  const [openCandidateForm, setOpenCandidateForm] = useState(false);
  const [openHireForm, setOpenHireForm] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY, currentTarget }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <>
      <section id="Hero"
        onMouseMove={handleMouseMove}
        className="relative w-full min-h-[60vh] sm:min-h-[65vh] lg:min-h-[85vh] px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-40 flex items-center"

        style={{ fontFamily: "'Outfit', Zefani" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto will-change-transform"
          style={{ transform: "translateZ(0)" }}
        >
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight sm:leading-[1.1] mb-3 sm:mb-4">
            <span className="text-white">Beyond the Resume.</span>
            <br />
            <span
              className="block mt-2 sm:mt-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
              style={{
                textShadow: "0 0 14px rgba(34,211,238,0.35)",
              }}
            >
              Before the Hire.
            </span>
          </h1>

          {/* Rotating Text */}
          <div className="flex justify-center mt-3 mb-6 sm:mb-8">
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-400 flex items-center gap-1 sm:gap-1.5 flex-wrap justify-center">
              <span>We deliver</span>

              <RotatingText
                texts={["Top Talent", "Fast Hiring", "Right Fit"]}
                mainClassName="px-1.5 sm:px-2 text-white overflow-hidden py-0.5 sm:py-1 justify-center rounded-md sm:rounded-lg"
                style={{ backgroundColor: "#6344FD" }}
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center items-center mt-3 sm:mt-4">

            {/* Get Hired */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpenCandidateForm(true)}
              className="group relative w-full sm:w-auto px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3 bg-white text-black font-bold text-xs sm:text-sm rounded-lg sm:rounded-xl"

            >
              <span className="relative z-10">Get Hired</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:animate-shine" />
            </motion.button>

            {/* Hire Talent */}
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpenHireForm(true)}
              className="w-full sm:w-auto px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3 border-2 border-white/20 text-white font-bold text-xs sm:text-sm rounded-lg sm:rounded-xl"

            >
              Hire Top Talent
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Candidate Modal */}
      <TalentNetworkForm
        open={openCandidateForm}
        onClose={() => setOpenCandidateForm(false)}
      />

      {/* Recruiter Modal */}
      <HireTalentModal
        open={openHireForm}
        onClose={() => setOpenHireForm(false)}
      />
    </>
  );
};

export default HeroSection;
