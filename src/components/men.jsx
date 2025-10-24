"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const menProducts = [
  {
    id: 1,
    name: "Royal Kurta Set",
    price: 2999,
    oldPrice: 3499,
    discount: 14, 
    image: "/blackkurta.jpg",
  },
 
 
   {
    id: 3,
    name: "Looks on Kurtas",
    price: 1899,
    oldPrice: 2199,
    discount: 14,
    image: "/kurta.jpg",
  },
   {
    id: 2,
    name: "Party Blazer",
    price: 3499,
    oldPrice: 3999,
    discount: 13,
    image: "/mn4.jpg",
  },
  {
    id: 4,
    name: "Ethenic ",
    price: 999,
    oldPrice: 1299,
    discount: 23,
    image:"/dhoti.jpg",
  },
  {
    id: 5,
    name: "Formal",
    price: 1499,
    oldPrice: 1799,
    discount: 17,
    image:"/shirtt.jpg",
  },
  {
    id: 6,
    name: "casual wear",
    price: 3999,
    oldPrice: 4499,
    discount: 11,
    image: "/shirt.jpg",
  },
  {
    id: 7,
    name: "Royal Kurta Set",
    price: 2999,
    oldPrice: 3499,
    discount: 14, 
    image: "/royalset.jpg",
  },
  {
    id: 8,
    name: "Casual Shirt",
    price: 1899,
    oldPrice: 2199,
    discount: 14,
    image: "/mn2.jpg",
  },
   {
    id: 4,
    name: "South indian look",
    price: 999,
    oldPrice: 1299,
    discount: 23,
    image: "/southboy.jpg",
  },
  {
    id: 5,
    name: "Formal ",
    price: 1499,
    oldPrice: 1799,
    discount: 17,
    image:"/mn1.jpg",
  },
 
];

export default function MenPage() {
  return (
    <section className="py-10 bg-gradient-to-b from-[#f8f5ef] via-[#f2ead3] to-[#f8f5ef] min-h-screen">
      <div className="w-full mx-auto px-6">
      
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold text-[#3a2c0a] text-center mb-6"
        >
          Men&apos;s <span className="text-[#b5903c]">Collection</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[#4b3b15]/70 text-center mb-1"
        >
          Explore our curated collection of men&apos;s wear — style, comfort & elegance
          combined.
        </motion.p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {menProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white  shadow-lg hover:shadow-2xl overflow-hidden group relative"
            >
         
              {product.discount && (
                <div className="absolute top-3 left-3 bg-[#b5903c] text-white px-3 py-1  text-xs font-semibold z-10">
                  {product.discount}% OFF
                </div>
              )}

              <div className="relative w-full h-72">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

             
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-[#3a2c0a] mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-[#b5903c] font-medium text-lg">
                    ₹{product.price.toLocaleString()}
                  </p>
                  {product.oldPrice && (
                    <p className="text-[#4b3b15]/50 line-through text-sm">
                      ₹{product.oldPrice.toLocaleString()}
                    </p>
                  )}
                </div>

               
                <div className="flex justify-between items-center">
                  <Link
                    href={`/product/${product.id}`}
                    className="text-sm bg-[#a17c2b] text-white px-4 py-2  hover:bg-[#b6903d] transition-all"
                  >
                    View Details
                  </Link>
                  <button className="text-sm border border-[#a17c2b] text-[#a17c2b] px-4 py-2  hover:bg-[#a17c2b] hover:text-white transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/men">
     <button className="bg-[#a17c2b] text-white px-8 py-3 shadow-md hover:bg-[#b6903d] transition-all">load more</button> 
    </Link>
         
        </motion.div>
      </div>
    </section>
  );
}
