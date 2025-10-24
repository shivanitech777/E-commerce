"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Collections", href: "/collections" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#fffaf3] via-[#f7f2e8] to-[#fffaf3] border-b border-[#e6d7b5]/50 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 gap-3">
       
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
        >
          <Image
            src="/newlogo22.jpg"
            alt="RoyalThreads"
            width={45}
            height={45}
            className="object-cover"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#a17c2b] tracking-wide">
            VS<span className="text-[#4b3b15]">Wears</span>
          </h1>
        </motion.div>

        
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-8 flex-wrap">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                href={link.href}
                className="text-[#4b3b15] font-medium hover:text-[#a17c2b] transition-colors duration-300 text-sm sm:text-base"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-3 sm:space-x-5 flex-shrink-0">
           <motion.div whileHover={{ rotate: 15 }}>
            <Link href="/cart" className="flex gap-2">
            <p>Add To Cart</p>
              <ShoppingBag size={22} className="sm:text-24 text-[#4b3b15] hover:text-[#a17c2b]" />
             
            </Link>
          </motion.div>
         
         
           <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#a17c2b] text-white px-3 sm:px-5 py-1.5 sm:py-2 shadow-md hover:bg-[#b6903d] transition-all text-sm sm:text-base"
          >
            View Profile
          </motion.button>
        </div>
        

       
        <div className="md:hidden flex-shrink-0">
          <button
            onClick={() => setOpen(!open)}
            className="text-[#4b3b15] focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="md:hidden bg-[#fffaf3] border-t border-[#e6d7b5]/50 overflow-hidden"
      >
        <div className="flex flex-col items-center space-y-4 py-6 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#4b3b15] font-medium hover:text-[#a17c2b] transition-all w-full text-center"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/cart"
            className="bg-[#a17c2b] text-white px-6 py-2  shadow-md hover:bg-[#b6903d] transition-all mt-2"
          >
            View Cart
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
