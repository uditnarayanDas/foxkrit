import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-[#121416] text-gray-400 mt-32">
      {/* ───────────────── Subscribe Floating Card ───────────────── */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4
                        rounded-2xl border border-white/10
                        bg-gradient-to-b from-[#1a1d20] to-[#0f1113]
                        px-6 py-6 backdrop-blur shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
        >
          <p className="text-white text-lg font-medium">
            Stay updated with opportunities & insights
          </p>

          <div className="flex items-center w-full md:w-auto bg-black/40 rounded-full overflow-hidden border border-white/10">
            <input
              id="footer-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              className="bg-transparent px-5 py-3 text-sm text-white placeholder-gray-500 outline-none w-full"
            />
            <button
              className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-white
                         bg-gradient-to-r from-red-600 to-red-500
                         hover:from-red-500 hover:to-red-400 transition-all"
            >
              Subscribe
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* ───────────────── Main Footer Content ───────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 grid gap-12 md:grid-cols-2">
        {/* Left */}
        <div className="space-y-4 max-w-md">
          <h2 className="text-white text-2xl font-semibold tracking-wide">
            FOXKRIT
          </h2>

          <p className="text-sm leading-relaxed">
            We are a recruitment agency specializing in IT and Technology. We
            help companies find the best talent and candidates find their dream
            jobs.
          </p>

          {/* LinkedIn placeholder */}
          <a
            href="https://www.linkedin.com/company/foxkrit/about/?viewAsMember=true" // replace later if needed
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FOXKRIT LinkedIn"
            className="w-10 h-10 rounded-md bg-white/5 border border-white/10
             hover:bg-white/10 hover:scale-105
             transition flex items-center justify-center text-white"
          >
            in
          </a>
        </div>

        {/* Right */}
        <div className="space-y-4 md:pl-16">
          <h3 className="text-white text-lg font-medium">Contact Us</h3>

          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span>📍</span>
              <span>Headquarters in Chennai | Serving Clients Globally</span>
            </li>

            <li className="flex gap-3">
              <span>📞</span>
              <span>+91 9028634445</span>
            </li>

            <li className="flex gap-3">
              <span>✉️</span>
              <span>contact@foxkrit.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ───────────────── Bottom Bar ───────────────── */}
      <div className="border-t border-white/5">
        <div
          className="max-w-7xl mx-auto px-6 py-6
                        flex flex-col md:flex-row gap-4
                        items-center justify-between text-sm text-gray-500"
        >
          <span>© 2026 FOXKRIT. All rights reserved.</span>

          <div className="flex gap-6">
            <button className="hover:text-white transition">
              Privacy Policy
            </button>
            <button className="hover:text-white transition">
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
