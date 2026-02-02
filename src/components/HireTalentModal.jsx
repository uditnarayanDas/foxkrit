
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const HireTalentModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    businessEmail: "",
    phone: "",
    experience: "",
    roles: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  /* ───────────── Helpers ───────────── */
  const resetForm = () => {
    setFormData({
      companyName: "",
      contactPerson: "",
      businessEmail: "",
      phone: "",
      experience: "",
      roles: "",
      notes: "",
    });
    setSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  /* ───────────── Side Effects ───────────── */
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, [open]);

  /* ───────────── Handlers ───────────── */
  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 1800);
  };

  if (!open) return null;

  /* ───────────── JSX ───────────── */
  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      >
        {/* Offset from navbar */}
        <div className="pt-16 sm:pt-20 pb-10 flex justify-center min-h-screen items-start">
          <motion.div
            initial={{ scale: 0.96, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[95%] max-w-xl rounded-2xl
                       bg-[#14171a] border border-white/10
                       shadow-[0_30px_120px_rgba(0,0,0,0.8)]"
          >
            {/* ───── Success Overlay ───── */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-20 flex items-center justify-center
                           bg-black/75 backdrop-blur-sm rounded-2xl"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-[90%] max-w-sm rounded-2xl
                             bg-[#14171a] border border-white/10
                             shadow-[0_30px_120px_rgba(0,0,0,0.9)]
                             px-6 py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.6, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center
             rounded-full bg-emerald-600 border border-emerald-500
             shadow-[0_0_20px_rgba(16,185,129,0.6)]"
                  >
                    <span className="text-2xl font-bold text-white">✓</span>
                  </motion.div>

                  <h3 className="text-lg font-semibold text-white">
                    Request Submitted
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    Our recruitment team will get in touch with you shortly.
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* ───── Header ───── */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h2 className="text-xl font-semibold text-white">
                Hire Top Tech Talent
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white text-xl"
              >
                ×
              </button>
            </div>

            {/* ───── Form ───── */}
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
              <input
                required
                name="companyName"
                placeholder="Company Name *"
                onChange={handleChange}
                className="w-full rounded-lg bg-white/5 border border-white/10
                           px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  required
                  name="contactPerson"
                  placeholder="Contact Person *"
                  onChange={handleChange}
                  className="w-full rounded-lg bg-white/5 border border-white/10
                             px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
                <input
                  required
                  type="email"
                  name="businessEmail"
                  placeholder="Business Email *"
                  onChange={handleChange}
                  className="w-full rounded-lg bg-white/5 border border-white/10
                             px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="w-full rounded-lg bg-white/5 border border-white/10
                             px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
                <select
                  name="experience"
                  onChange={handleChange}
                  className="w-full rounded-lg bg-white/5 border border-white/10
                             px-4 py-3 text-white outline-none focus:border-cyan-400
                             [&>option]:bg-[#0f1115] [&>option]:text-white"
                >
                  <option value="" disabled>
                    Experience Needed
                  </option>
                  <option>0–2 Years</option>
                  <option>3–5 Years</option>
                  <option>5+ Years</option>
                </select>
              </div>

              <input
                required
                name="roles"
                placeholder="Roles Hiring For *"
                onChange={handleChange}
                className="w-full rounded-lg bg-white/5 border border-white/10
                           px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

              <textarea
                name="notes"
                placeholder="Additional Notes"
                rows={4}
                onChange={handleChange}
                className="w-full rounded-lg bg-white/5 border border-white/10
                           px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-xl
                           text-white font-medium
                           bg-gradient-to-r from-cyan-600 to-blue-600
                           hover:from-cyan-500 hover:to-blue-500 transition
                           shadow-[0_0_30px_rgba(34,211,238,0.35)]"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default HireTalentModal;
