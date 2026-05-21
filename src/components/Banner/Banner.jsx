import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utiility/animation";



const Banner = ({ image, title, subtitle, link }) => {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* Glow background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-400/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 p-10 md:p-14">

          {/* IMAGE SECTION */}
          <div className="flex justify-center relative">

            {/* subtle ring glow */}
            <div className="absolute w-[280px] h-[280px] bg-orange-500/10 rounded-full blur-2xl"></div>

            <motion.img
              initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
              src={image}
              alt="Banner visual"
              className="relative w-[260px] md:w-[340px] xl:w-[420px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* TEXT SECTION */}
          <div className="space-y-6 text-center md:text-left">

            {/* Title */}
            <motion.h1
              variants={SlideUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight"
            >
              <span className="text-orange-500">{title}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0 text-sm md:text-base"
            >
              {subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            >

              {/* Primary Button */}
              <button
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold
                hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-orange-500/20"
              >
                Explore More
              </button>

              {/* Secondary Button */}
              <button
                className="border border-white/20 text-white px-6 py-3 rounded-full font-semibold
                hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Learn More
              </button>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;