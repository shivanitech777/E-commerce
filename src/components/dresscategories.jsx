"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Women's Sarees",
    image: "/blue.jpg",
    link: "/women",
  },
  {
    name: "Women's Gowns",
    image: "/gown.jpg",
    link: "/women",
  },
  {
    name: "Men's Kurtas",
    image: "/man.jpg",
    link: "/men",
  },
  {
    name: "Men's Shirts",
    image: "/shirtt.jpg",
    link: "/men",
  },
  {
    name: "Casual Wear",
    image: "/casual.jpg",
    link: "/men",
  },
  {
    name: "Party Wear",
    image:"/party.jpg",
    link: "/men",
  },
   {
    name: "Ethenic",
    image:"/gownn.jpg",
    link: "/men",
  },
  
   {
    name: "Saree",
    image:"/sariwhite.jpg",
    link: "/men",
  },
];

export default function DressCategories() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-[#f8f5ef] via-[#f2ead3] to-[#f8f5ef]">
      <div className="w-full mx-auto px-6 text-center">
 
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold text-[#3a2c0a]"
        >
          Explore <span className="text-[#b5903c]">Dress Categories</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[#4b3b15]/70 mt-3 mb-10 max-w-2xl mx-auto text-lg"
        >
          Shop from our wide range of men's and women's collections — from
          traditional elegance to modern trends. Find your perfect outfit today.
        </motion.p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                width={500}
                height={500}
                className="object-contain w-full h-[350px] group-hover:scale-105 transition-transform duration-500"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#000]/60 via-transparent to-transparent"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-6 left-0 right-0 text-center h-full flex flex-col items-center justify-end pb-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-3 drop-shadow-lg">
                  {cat.name}
                </h3>
                <Link
                  href={cat.link}
                  className="inline-block bg-[#a17c2b] text-white px-6 py-2  hover:bg-[#b6903d] transition-all"
                >
                  Explore Now
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
