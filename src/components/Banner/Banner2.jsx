import React from "react";
import { motion } from "framer-motion";
import { SlideLift } from "../../utiility/animation";

const Banner2 = () => {
  return (
    <section id="banner" className="relative py-20">

      {/* Glow background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-400/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black 
        text-white rounded-3xl shadow-xl py-16 px-6 md:px-16 flex justify-center items-center">

          {/* CONTENT */}
          <div className="flex flex-col justify-center text-center space-y-8 max-w-3xl">

            <motion.h1
              variants={SlideLift(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight uppercase"
            >
              Get <span className="text-orange-500">20% Discount</span> On Your First Order
            </motion.h1>

            <motion.p
              variants={SlideLift(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-300 leading-relaxed"
            >
              We make sure you get the right and best quality products
              for your workout journey. Start strong, stay consistent.
            </motion.p>

            <motion.div
              variants={SlideLift(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              {/* Primary */}
              <button
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold
                hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Learn More
              </button>

              {/* Secondary */}
              <button
                className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold
                hover:bg-white hover:text-black transition-all duration-300"
              >
                Stay In Touch
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;