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
        className="relative w-full min-h-[80vh] sm:min-h-screen px-6 pt-16 sm:pt-32 flex items-center"

        style={{ fontFamily: "'Outfit', Zefani" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-6xl mx-auto will-change-transform"
          style={{ transform: "translateZ(0)" }}
        >
          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter sm:leading-[1.05] sm:mb-8">
            <span className="text-white">Beyond the Resume.</span>
            <br />
            <span
              className="block mt-3 sm:mt-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
              style={{
                textShadow: "0 0 14px rgba(34,211,238,0.35)",
              }}
            >
              Before the Hire.
            </span>
          </h1>

          {/* Rotating Text */}
          <div className="flex justify-center mt-6 mb-14 sm:mb-14">
            <h2 className="text-lg sm:text-3xl md:text-4xl font-medium text-gray-400 flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              <span>We deliver</span>

              <RotatingText
                texts={["Top Talent", "Fast Hiring", "Right Fit"]}
                mainClassName="px-2 sm:px-2 md:px-3 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mt-6 sm:mt-8">

            {/* Get Hired */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpenCandidateForm(true)}
              className="group relative w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-xl"

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
              className="w-full sm:w-auto px-10 py-4 border-2 border-white/20 text-white font-bold rounded-xl"

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
