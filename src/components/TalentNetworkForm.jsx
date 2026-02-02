
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const MAX_SIZE = 2 * 1024 * 1024;
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const TalentNetworkForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    techStack: "",
    experience: "",
    resume: null,
    portfolio: "",
  });

  const [fileError, setFileError] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  /* ───────────────── Reset Helper ───────────────── */
  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      techStack: "",
      experience: "",
      resume: null,
      portfolio: "",
    });
    setFileError("");
    setUploadProgress(0);
    setPreviewUrl(null);
    setSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  /* ───────────────── Side Effects ───────────────── */
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  useEffect(() => {
    return () => previewUrl && URL.revokeObjectURL(previewUrl);
  }, [previewUrl]);

  if (!open) return null;

  /* ───────────────── Handlers ───────────────── */
  const validateFile = (file) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      setFileError("Only PDF or DOC/DOCX files are allowed.");
      return;
    }
    if (file.size > MAX_SIZE) {
      setFileError("File size must be less than 2MB.");
      return;
    }

    setFileError("");
    setFormData((p) => ({ ...p, resume: file }));

    if (file.type === "application/pdf") {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(null);
    }

    setUploadProgress(0);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) clearInterval(interval);
    }, 80);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume" && files?.length) {
      validateFile(files[0]);
      return;
    }
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setSubmitted(true);

    setTimeout(() => {
      handleClose();
    }, 1800);
  };

  const baseInput =
    "w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400";

  /* ───────────────── JSX ───────────────── */
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={handleClose}
    >
      <div className="pt-16 sm:pt-20 pb-10 flex justify-center min-h-screen items-start">
        <div
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
                  Application Submitted
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Thank you for applying. Our team will review your profile and
                  get back to you shortly.
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* ───── Header ───── */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <h2 className="text-xl font-semibold text-white">
              Join the Talent Network
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
              name="fullName"
              placeholder="Full Name *"
              onChange={handleChange}
              className={baseInput}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address *"
                onChange={handleChange}
                className={baseInput}
              />
              <input
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className={baseInput}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                required
                name="techStack"
                placeholder="Primary Tech Stack *"
                onChange={handleChange}
                className={baseInput}
              />
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className={`${baseInput} [&>option]:bg-[#0f1115] [&>option]:text-white`}
              >
                <option value="" disabled>
                  Experience
                </option>
                <option>0–1 Years</option>
                <option>1–3 Years</option>
                <option>3–5 Years</option>
                <option>5+ Years</option>
              </select>
            </div>

            {/* Resume */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Resume (PDF / DOC, max 2MB)
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="w-full text-sm text-gray-300
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-lg file:border-0
                           file:bg-white/10 file:text-gray-200
                           hover:file:bg-white/20"
              />
            </div>

            {fileError && <p className="text-sm text-red-400">{fileError}</p>}

            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}

            {formData.resume && (
              <div className="border border-white/10 rounded-lg p-3 text-sm text-gray-300">
                {previewUrl ? (
                  <iframe
                    src={previewUrl}
                    className="w-full h-40 rounded-lg border border-white/10"
                    title="Resume Preview"
                  />
                ) : (
                  <p>📄 {formData.resume.name}</p>
                )}
              </div>
            )}

            <input
              name="portfolio"
              placeholder="LinkedIn / Portfolio URL"
              onChange={handleChange}
              className={baseInput}
            />

            <button
              type="submit"
              disabled={!formData.resume || fileError || uploadProgress < 100}
              className={`w-full mt-4 py-3 rounded-xl text-white font-medium transition
                ${!formData.resume || fileError || uploadProgress < 100
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500"
                }
                shadow-[0_0_30px_rgba(34,211,238,0.35)]`}
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TalentNetworkForm;
