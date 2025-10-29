"use client";

import { motion } from "framer-motion";
import { Eye, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menProducts = [
 {
    id: 1,
    name: "Best Shirta",
    price: 2999,
    oldPrice: 3499,
    discount: 14, 
    image: "/shirtmeri.webp",
  },
 
 
  {
    id: 2,
    name: "Shirt's",
    price: 2999,
    oldPrice: 3499,
    discount: 14, 
    image: "/yellowman.jpg",
  },
  {
    id: 3,
    name: "Shirt Blue",
    price: 2999,
    oldPrice: 3499,
    discount: 14, 
    image: "/blueshirt.jpg",
  },
  {
    id: 4,
    name: "Royal Kurta Set",
    price: 2999,
    oldPrice: 3499,
    discount: 14, 
    image: "/happy man.webp",
  },
 {
    id: 5,
    name: "Royal Kurta Set",
    price: 2999,
    oldPrice: 3499,
    discount: 14, 
    image: "/sleeping boy.jpg",
  },
 {
    id: 6,
    name: "Trouser",
    price: 2999,
    oldPrice: 3499,
    discount: 14, 
    image: "/trouser2.jpg",
  },
  {
    id: 7,
    name: "Track Pants",
    price: 2999,
    oldPrice: 3499,
    discount: 14, 
    image: "/trackpants.jpg",
  },
 {
    id: 8,
    name: "Trouser",
    price: 2999,
    oldPrice: 3499,
    discount: 14, 
    image: "/trouser.jpg",
  },
  {
    id: 9,
    name: "Royal Kurta Set",
    price: 2999,
    oldPrice: 3499,
    discount: 14, 
    image:"/jeans.jpg",
  },
    {
    id: 10,
    name: "Jeans",
    price: 2999,
    oldPrice: 3499,
    discount: 14, 
    image: "/jean.webp",
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

       
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4">
                 {menProducts.map((item, index) => (
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
                         className="object-cover  group-hover:scale-105 transition-transform duration-500"
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
