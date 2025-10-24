"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-white to-[#f8f3eb] py-16 px-4 sm:px-6 lg:px-10">
     
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-[#2b1810] mb-3"
        >
          Contact <span className="text-[#c19a6b]">Us</span>
        </motion.h2>
        <p className="text-gray-600 text-sm sm:text-base">
          We'd love to hear from you! Reach out for any questions, feedback, or support.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
   
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-[#e6dccf]"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#2b1810] mb-6 text-center sm:text-left">
            Send a Message
          </h3>
          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#c19a6b] transition-all text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#c19a6b] transition-all text-sm sm:text-base"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#c19a6b] transition-all text-sm sm:text-base"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#c19a6b] hover:bg-[#b28959] text-white py-3 px-6 rounded-xl transition-all duration-300 font-semibold w-full text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </motion.div>

    
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="bg-white shadow-xl border border-[#e6dccf] rounded-2xl p-6 sm:p-8 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#2b1810] mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-700 text-sm sm:text-base justify-center sm:justify-start">
                <FaPhoneAlt className="text-[#c19a6b] text-lg" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-700 text-sm sm:text-base justify-center sm:justify-start">
                <FaEnvelope className="text-[#c19a6b] text-lg" />
                <span>support@myostel.com</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-700 text-sm sm:text-base justify-center sm:justify-start">
                <FaMapMarkerAlt className="text-[#c19a6b] text-lg" />
                <span>123 Fashion Street, Mumbai, India</span>
              </li>
            </ul>
          </div>

       
          <div className="overflow-hidden rounded-2xl shadow-xl border border-[#e6dccf] h-[250px] sm:h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.981708186661!2d72.8776552149005!3d19.0760903870847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6301c81a22b%3A0x548ef38e5324e1b7!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1675012345678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
