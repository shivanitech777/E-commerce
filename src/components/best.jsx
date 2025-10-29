"use client";

import { motion } from "framer-motion";
import { Eye, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const bestSellers = [
  
  {
    id: 1,
    name: " Trouser fit ",
    price: "₹21,499",
    image: "/trouser2.jpg",
  },
  
   {
    id: 2,
    name: "Suit",
    price: "₹26,499",
    image: "/white.webp",
  },
   {
    id: 3,
    name: "",
    price: "₹31,199",
    image: "/jeans.jpg",
  },
  {
    id: 4,
    name: "Best for women",
    price: "₹31,999",
    image: "/red.webp",
  },
  
  {
    id: 5,
    name: "Kurta",
    price: "₹26,499",
    image: "/yellowman.jpg",
  },
];

export default function BestSeller() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#f8f5ef] via-[#f2ead3] to-[#f8f5ef]">
      <div className="w-full mx-auto px-2  md:px-6 text-center">
       
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold text-[#3a2c0a]"
        >
          Our <span className="text-[#b5903c]">Best Sellers</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[#4b3b15]/70 mt-3 mb-10 max-w-2xl mx-auto text-lg"
        >
          Discover our top-selling dresses, loved by customers for their
          elegance, style, and perfect fit.
        </motion.p>

     
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {bestSellers.map((item, index) => (
              <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white  shadow-lg hover:shadow-2xl overflow-hidden group"
            >
              <div className="relative w-full h-56 md:h-96">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:p-5 p-2 text-left">
                <h3 className="text-lg font-semibold text-[#3a2c0a] md:mb-1">
                  {item.name}
                </h3>
                <p className="text-[#b5903c] font-medium mb-2 md:mb-4">{item.price}</p>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/product/${item.id}`}
                    className="text-sm bg-[#a17c2b] text-white px-4 py-2 r hover:bg-[#b6903d] transition-all flex items-center"
                  >
                    <Eye size={16} className="inline-block mr-0 md:hidden" />
                   <span className="hidden md:block"> View Details</span>
                  </Link>
                  <button className="text-sm border flex items-center border-[#a17c2b] text-[#a17c2b] px-4 py-2 hover:bg-[#a17c2b] hover:text-white transition-all">
                    <ShoppingBag size={16} className="inline-block mr-0 md:hidden" />
                 <span className="hidden md:block">   Add to Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <Link
            href="/collections"
            className="bg-[#a17c2b] text-white px-8 py-3  shadow-md hover:bg-[#b6903d] transition-all"
          >
            View All Best Sellers
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
