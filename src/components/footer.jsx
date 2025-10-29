"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

export default function Footer() {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
  });

  return (
    <footer className="relative bg-gradient-to-b from-[#fffaf3] via-[#f7f2e8] to-[#f9f4e9] text-[#3a2c0a] border-t border-[#e6d7b5]/50  overflow-hidden">
   
      <div className="absolute inset-0 bg-gradient-to-t from-[#f1e5c7]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 sm:grid-cols-2 gap-12 relative z-10">
  
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif text-[#a17c2b] mb-4">VS Wears</h2>
          <p className="text-sm text-[#5a4a2a]/80 leading-relaxed">
            Discover timeless Indian fashion crafted for elegance and comfort.  
            From traditional wear to modern designs — dress royally, every day.
          </p>
        </motion.div>
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-[#a17c2b] mb-4">Shop</h4>
          <ul className="space-y-2">
            {[
              ["Men's Collection", "/men"],
              ["Women's Collection", "/women"],
              ["New Arrivals", "/collections"],
              ["Sale", "/offers"],
              ["Gift Cards", "/gifts"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[#4b3b15]/80 hover:text-[#a17c2b] transition-all duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-[#a17c2b] mb-4">Customer Care</h4>
          <ul className="space-y-2">
            {[
              ["FAQs", "/faqs"],
              ["Shipping Info", "/shipping"],
              ["Returns & Exchange", "/returns"],
              ["Privacy Policy", "/privacy"],
              ["Terms & Conditions", "/terms"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[#4b3b15]/80 hover:text-[#a17c2b] transition-all duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-[#a17c2b] mb-4">Stay in Style</h4>
          <p className="text-sm text-[#4b3b15]/80 mb-4">
            Subscribe to get updates on new collections & exclusive offers.
          </p>
          <form className="flex items-center bg-white border border-[#e6d7b5] rounded-full overflow-hidden shadow-sm">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 text-sm text-[#3a2c0a] focus:outline-none placeholder-[#9b8c6a]"
            />
            <button
              type="submit"
              className="bg-[#a17c2b] text-white px-5 py-2 font-medium hover:bg-[#b6903d] transition-all"
            >
              Join
            </button>
          </form>

     
          <div className="flex space-x-4 mt-6">
            {[FaFacebookF, FaInstagram, FaTwitter, FaPinterest].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                className="p-2 border border-[#e4d6b8]/60 hover:bg-[#a17c2b] hover:text-white transition-all"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

    
      <div className="h-px bg-[#e6d7b5]/60 mx-auto w-[85%]" />

    
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center py-6 text-sm text-[#4b3b15]/70"
      >
        © {new Date().getFullYear()} <span className="text-[#a17c2b] font-semibold">RoyalThreads</span> — Made with Passion for Indian Elegance.
      </motion.div>
    </footer>
  );
}
