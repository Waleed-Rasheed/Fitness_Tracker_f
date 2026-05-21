import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utiility/animation";

const AboutUs = ({ image }) => {
  return (
    <section  id="about" className="relative py-24 overflow-hidden bg-black">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14
          bg-white/5 backdrop-blur-xl border border-white/10
          rounded-[2rem] p-10 md:p-16 shadow-2xl">

          {/* IMAGE SECTION */}
          <div className="relative flex justify-center">

            {/* Glow ring */}
            <div className="absolute w-[320px] h-[320px] bg-orange-500/10 rounded-full blur-3xl"></div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -top-6 bg-orange-500 text-black px-4 py-1 rounded-full text-xs font-semibold shadow-lg"
            >
              #1 Fitness Center
            </motion.div>

            <motion.img
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              src={image}
              alt="Gym About Us"
              className="relative w-[260px] md:w-[360px] xl:w-[440px] drop-shadow-2xl"
            />
          </div>

          {/* TEXT SECTION */}
          <div className="space-y-6 text-center md:text-left">

            {/* Small Tag */}
            <motion.span
              variants={SlideUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-orange-400 tracking-widest text-sm uppercase font-semibold"
            >
              About Us
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={SlideUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white"
            >
              Build Your <span className="text-orange-500">Best Body</span>
              <br />
              With Us
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={SlideUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0"
            >
              We are a modern fitness community focused on strength,
              endurance, and transformation. Our expert trainers and
              world-class equipment help you push beyond limits.
            </motion.p>

            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-400 max-w-md mx-auto md:mx-0 text-sm"
            >
              Whether you're starting your journey or leveling up your
              fitness, we design programs that deliver real results.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={SlideUp(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >

              <button
                className="bg-gradient-to-r from-orange-500 to-orange-600
                text-white px-7 py-3 rounded-full font-semibold
                hover:scale-105 active:scale-95 transition-all duration-300
                shadow-lg shadow-orange-500/30"
              >
                Join Now
              </button>

              <button
                className="border border-white/20 text-white px-7 py-3 rounded-full font-semibold
                hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300"
              >
                View Programs
              </button>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;