"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#f8f5ef] via-[#f4ecd8] to-[#f8f5ef] overflow-hidden">
    
      <div className="absolute inset-0 bg-gradient-to-t from-[#f8f5ef]/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-24 lg:pt-32 pb-16 gap-10">
      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl lg:text-6xl font-extrabold text-[#3a2c0a] leading-tight"
          >
            Royal Fashion for <br />
            <span className="text-[#b5903c]">Men & Women</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-[#4b3b15]/80 text-lg max-w-xl mx-auto lg:mx-0"
          >
            Elevate your wardrobe with timeless designs crafted with elegance
            and perfection. Shop traditional & modern styles all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center lg:justify-start gap-4 pt-4"
          >
            <Link
              href="/men"
              className="bg-[#a17c2b] text-white px-6 py-3  shadow-lg hover:bg-[#b6903d] transition-all"
            >
              Shop Men
            </Link>
            <Link
              href="/women"
              className="border border-[#a17c2b] text-[#a17c2b] px-6 py-3 hover:bg-[#a17c2b] hover:text-white transition-all"
            >
              Shop Women
            </Link>
          </motion.div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex-1 relative flex justify-center"
        >
          <div className="relative w-[320px] h-[420px] lg:w-[420px] lg:h-[520px]">
            <Image
              src="/neww.jpg"
              alt="Royal Fashion"
              fill
              className="object-cover shadow-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 bg-gradient-to-t from-[#f8f5ef] via-transparent to-transparent rounded-2xl"
            />
          </div>
        </motion.div>
      </div>

   
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-0 md:bottom-6 w-full text-center text-[#3a2c0a]/80 font-medium tracking-wide"
      >
        ✨ Embrace the Royal Look – Crafted with Indian Elegance ✨
      </motion.div>
    </section>
  );
}
